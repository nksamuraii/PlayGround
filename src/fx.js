import * as THREE from 'three';

function softPointTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.7, 'rgba(255,255,255,0.2)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export function createFX(scene, renderer) {
  const MAX = 700;
  const posArr = new Float32Array(MAX * 3);
  const colArr = new Float32Array(MAX * 3);
  const sizeArr = new Float32Array(MAX);
  const alphaArr = new Float32Array(MAX);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  geo.setAttribute('aColor', new THREE.BufferAttribute(colArr, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizeArr, 1));
  geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphaArr, 1));

  const mat = new THREE.ShaderMaterial({
    uniforms: { uPR: { value: Math.min(window.devicePixelRatio || 1, 2) } },
    vertexShader: /* glsl */ `
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uPR;
      void main() {
        vColor = aColor;
        vAlpha = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPR * (12.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 d = gl_PointCoord - vec2(0.5);
        float a = smoothstep(0.5, 0.05, length(d));
        gl_FragColor = vec4(vColor, a * vAlpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);

  const pool = [];
  for (let i = 0; i < MAX; i++) {
    pool.push({
      alive: false,
      vx: 0, vy: 0, vz: 0,
      life: 0, maxLife: 1,
      gravity: 0, drag: 0,
      size: 2, r: 1, g: 1, b: 1,
      fade: 1,
    });
    posArr[i * 3 + 1] = -999;
  }
  let cursor = 0;

  const tmpColor = new THREE.Color();
  const tex = softPointTexture();

  function spawn(origin, opts = {}) {
    const count = opts.count ?? 8;
    const speed = opts.speed ?? 3;
    const spread = opts.spread ?? 1;
    const life = opts.life ?? 0.5;
    const size = opts.size ?? 3.5;
    const gravity = opts.gravity ?? 8;
    const drag = opts.drag ?? 1.5;
    const normal = opts.normal ?? null;
    tmpColor.set(opts.color ?? 0xffb347);
    for (let n = 0; n < count; n++) {
      const i = cursor;
      cursor = (cursor + 1) % MAX;
      const p = pool[i];
      p.alive = true;
      p.life = p.maxLife = life * (0.6 + Math.random() * 0.7);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      let dx = Math.sin(phi) * Math.cos(theta);
      let dy = Math.cos(phi);
      let dz = Math.sin(phi) * Math.sin(theta);
      if (normal) {
        dx = dx * spread + normal.x;
        dy = dy * spread + normal.y;
        dz = dz * spread + normal.z;
      }
      const s = speed * (0.35 + Math.random() * 0.9);
      p.vx = dx * s;
      p.vy = dy * s + (opts.lift ?? 0);
      p.vz = dz * s;
      p.gravity = gravity;
      p.drag = drag;
      p.size = size * (0.5 + Math.random() * 0.9);
      const jitter = 0.82 + Math.random() * 0.36;
      p.r = Math.min(1, tmpColor.r * jitter);
      p.g = Math.min(1, tmpColor.g * jitter);
      p.b = Math.min(1, tmpColor.b * jitter);
      posArr[i * 3] = origin.x + (Math.random() - 0.5) * 0.18;
      posArr[i * 3 + 1] = origin.y + (Math.random() - 0.5) * 0.18;
      posArr[i * 3 + 2] = origin.z + (Math.random() - 0.5) * 0.18;
      colArr[i * 3] = p.r;
      colArr[i * 3 + 1] = p.g;
      colArr[i * 3 + 2] = p.b;
      sizeArr[i] = p.size;
      alphaArr[i] = 1;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aColor.needsUpdate = true;
    geo.attributes.aSize.needsUpdate = true;
    geo.attributes.aAlpha.needsUpdate = true;
  }

  // tracer pool
  const tracers = [];
  for (let i = 0; i < 22; i++) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const m = new THREE.LineBasicMaterial({
      color: 0xffcf8a,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const line = new THREE.Line(g, m);
    line.frustumCulled = false;
    line.visible = false;
    scene.add(line);
    tracers.push({ line, life: 0, maxLife: 0.09 });
  }
  let tracerCursor = 0;

  function tracer(from, to, color = 0xffcf8a, life = 0.08) {
    const t = tracers[tracerCursor];
    tracerCursor = (tracerCursor + 1) % tracers.length;
    const arr = t.line.geometry.attributes.position.array;
    arr[0] = from.x; arr[1] = from.y; arr[2] = from.z;
    arr[3] = to.x; arr[4] = to.y; arr[5] = to.z;
    t.line.geometry.attributes.position.needsUpdate = true;
    t.line.material.color.setHex(color);
    t.line.material.opacity = 1;
    t.line.visible = true;
    t.life = t.maxLife = life;
  }

  // flash + light
  const flashSprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, color: 0xffc36a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  flashSprite.scale.set(0.7, 0.7, 1);
  flashSprite.visible = false;
  scene.add(flashSprite);
  const flashLight = new THREE.PointLight(0xffa040, 0, 14, 2);
  scene.add(flashLight);
  let flashTimer = 0;

  function muzzle(position, color = 0xffb056) {
    flashSprite.position.copy(position);
    flashSprite.material.color.setHex(color);
    flashSprite.material.opacity = 1;
    flashSprite.visible = true;
    flashSprite.scale.setScalar(0.5 + Math.random() * 0.35);
    flashSprite.material.rotation = Math.random() * Math.PI;
    flashLight.position.copy(position);
    flashLight.color.setHex(color);
    flashLight.intensity = 26;
    flashTimer = 0.05;
  }

  // impact glows
  const impacts = [];
  for (let i = 0; i < 16; i++) {
    const s = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: tex, color: 0xffc070, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    s.visible = false;
    scene.add(s);
    impacts.push({ sprite: s, life: 0, maxLife: 0.25 });
  }
  let impactCursor = 0;

  function impact(position, normal, color = 0xffc070) {
    const it = impacts[impactCursor];
    impactCursor = (impactCursor + 1) % impacts.length;
    it.sprite.position.copy(position).addScaledVector(normal, 0.02);
    it.sprite.material.color.setHex(color);
    it.sprite.material.opacity = 0.9;
    it.sprite.scale.setScalar(0.24 + Math.random() * 0.14);
    it.sprite.visible = true;
    it.life = it.maxLife;
    spawn(position, { count: 7, speed: 4.5, color, size: 2.6, life: 0.32, gravity: 9, normal, spread: 0.55 });
  }

  // shockwave rings
  const rings = [];
  for (let i = 0; i < 8; i++) {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.3, 0.42, 28),
      new THREE.MeshBasicMaterial({ color: 0xff7a3a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.visible = false;
    scene.add(ring);
    rings.push({ mesh: ring, life: 0, maxLife: 0.45 });
  }
  let ringCursor = 0;

  function shockwave(position, color = 0xff7a3a) {
    const r = rings[ringCursor];
    ringCursor = (ringCursor + 1) % rings.length;
    r.mesh.position.set(position.x, Math.max(0.05, position.y), position.z);
    r.mesh.material.color.setHex(color);
    r.mesh.scale.setScalar(1);
    r.mesh.material.opacity = 0.9;
    r.mesh.visible = true;
    r.life = r.maxLife;
  }

  function update(dt) {
    for (let i = 0; i < MAX; i++) {
      const p = pool[i];
      if (!p.alive) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.alive = false;
        alphaArr[i] = 0;
        posArr[i * 3 + 1] = -999;
        continue;
      }
      const damp = Math.max(0, 1 - p.drag * dt);
      p.vx *= damp;
      p.vz *= damp;
      p.vy = p.vy * damp - p.gravity * dt;
      posArr[i * 3] += p.vx * dt;
      posArr[i * 3 + 1] += p.vy * dt;
      posArr[i * 3 + 2] += p.vz * dt;
      if (posArr[i * 3 + 1] < 0.02) {
        posArr[i * 3 + 1] = 0.02;
        p.vy *= -0.32;
        p.vx *= 0.7;
        p.vz *= 0.7;
      }
      const k = p.life / p.maxLife;
      alphaArr[i] = k < 0.3 ? k / 0.3 : 1;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aAlpha.needsUpdate = true;

    for (const t of tracers) {
      if (t.life <= 0) continue;
      t.life -= dt;
      t.line.material.opacity = Math.max(0, t.life / t.maxLife);
      if (t.life <= 0) t.line.visible = false;
    }

    if (flashTimer > 0) {
      flashTimer -= dt;
      flashLight.intensity = Math.max(0, 26 * (flashTimer / 0.05));
      flashSprite.material.opacity = Math.max(0, flashTimer / 0.05);
      if (flashTimer <= 0) {
        flashLight.intensity = 0;
        flashSprite.visible = false;
      }
    }

    for (const it of impacts) {
      if (it.life <= 0) continue;
      it.life -= dt;
      it.sprite.material.opacity = Math.max(0, it.life / it.maxLife);
      it.sprite.scale.multiplyScalar(1 + dt * 3);
      if (it.life <= 0) it.sprite.visible = false;
    }

    for (const r of rings) {
      if (r.life <= 0) continue;
      r.life -= dt;
      const k = 1 - r.life / r.maxLife;
      r.mesh.scale.setScalar(1 + k * 5);
      r.mesh.material.opacity = Math.max(0, (1 - k) * 0.55);
      if (r.life <= 0) r.mesh.visible = false;
    }
  }

  function setPixelRatio(pr) {
    mat.uniforms.uPR.value = pr;
  }

  return { spawn, tracer, muzzle, impact, shockwave, update, setPixelRatio };
}
