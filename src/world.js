import * as THREE from 'three';

export const BAY = { halfX: 15.4, minZ: -20.4, maxZ: 20.4, height: 9 };
export const CORE = { x: 0, z: -14.4, radius: 2.35, y: 2.1 };

const rand = (() => {
  let s = 1337;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
})();

function makeTexture(w, h, draw, rx = 1, ry = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(rx, ry);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function paintFloor(ctx, w, h) {
  ctx.fillStyle = '#1d2529';
  ctx.fillRect(0, 0, w, h);
  const cell = 128;
  for (let y = 0; y < h; y += cell) {
    for (let x = 0; x < w; x += cell) {
      const shade = 36 + Math.floor(rand() * 14);
      ctx.fillStyle = `rgb(${shade + 4},${shade + 10},${shade + 13})`;
      ctx.fillRect(x + 2, y + 2, cell - 4, cell - 4);
      ctx.strokeStyle = 'rgba(4,8,10,0.85)';
      ctx.lineWidth = 3;
      ctx.strokeRect(x + 1, y + 1, cell - 2, cell - 2);
      ctx.strokeStyle = 'rgba(150,190,200,0.05)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 5, y + 5, cell - 10, cell - 10);
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.beginPath();
        ctx.arc(x + 12 + rand() * (cell - 24), y + 12 + rand() * (cell - 24), 1.4, 0, 7);
        ctx.fill();
      }
    }
  }
  // oil / wear
  for (let i = 0; i < 34; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const r = 10 + rand() * 58;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(3,6,7,${0.12 + rand() * 0.18})`);
    g.addColorStop(1, 'rgba(3,6,7,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // scratches
  for (let i = 0; i < 90; i++) {
    ctx.strokeStyle = `rgba(${rand() > 0.6 ? '180,200,205' : '0,0,0'},${0.03 + rand() * 0.06})`;
    ctx.lineWidth = rand() > 0.8 ? 1.5 : 0.7;
    const x = rand() * w;
    const y = rand() * h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (rand() - 0.5) * 46, y + (rand() - 0.5) * 12);
    ctx.stroke();
  }
}

function paintWall(ctx, w, h) {
  ctx.fillStyle = '#1b2225';
  ctx.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 170) {
    for (let x = 0; x < w; x += 170) {
      const s = 44 + Math.floor(rand() * 12);
      ctx.fillStyle = `rgb(${s},${s + 8},${s + 11})`;
      ctx.fillRect(x + 4, y + 4, 162, 162);
      ctx.strokeStyle = 'rgba(5,9,11,0.9)';
      ctx.lineWidth = 5;
      ctx.strokeRect(x + 2, y + 2, 166, 166);
      ctx.strokeStyle = 'rgba(0,0,0,0.4)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 14, y + 14, 142, 142);
      // vents
      if (rand() > 0.55) {
        ctx.fillStyle = 'rgba(4,8,10,0.6)';
        for (let v = 0; v < 5; v++) ctx.fillRect(x + 46, y + 52 + v * 8, 76, 3);
      }
      // rivets
      for (const [rx, ry] of [[10, 10], [158, 10], [10, 158], [158, 158]]) {
        ctx.fillStyle = 'rgba(190,215,220,0.16)';
        ctx.beginPath();
        ctx.arc(x + rx, y + ry, 2.2, 0, 7);
        ctx.fill();
      }
      // grime
      if (rand() > 0.5) {
        const gx = x + 10 + rand() * 140;
        const grad = ctx.createLinearGradient(gx, y + 10, gx, y + 170);
        grad.addColorStop(0, 'rgba(0,0,0,0.28)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(gx, y + 8, 7 + rand() * 14, 160);
      }
    }
  }
  for (let i = 0; i < 22; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.05 + rand() * 0.08})`;
    ctx.fillRect(rand() * w, rand() * h, 2 + rand() * 40, 1 + rand() * 4);
  }
}

function paintCrate(ctx, w, h) {
  const base = [92, 104, 108];
  ctx.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`;
  ctx.fillRect(0, 0, w, h);
  for (let x = 0; x < w; x += 26) {
    ctx.fillStyle = x % 52 === 0 ? 'rgba(255,255,255,0.045)' : 'rgba(0,0,0,0.2)';
    ctx.fillRect(x, 0, 12, h);
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.fillRect(x + 12, 0, 2, h);
  }
  ctx.strokeStyle = 'rgba(6,10,12,0.9)';
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, w - 10, h - 10);
  ctx.strokeStyle = 'rgba(190,210,215,0.12)';
  ctx.lineWidth = 2;
  ctx.strokeRect(12, 12, w - 24, h - 24);
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-0.04);
  ctx.font = 'bold 42px monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(220,230,230,0.22)';
  ctx.fillText('CF-09', 0, -4);
  ctx.font = 'bold 15px monospace';
  ctx.fillText('CARGO / SECURE', 0, 26);
  ctx.restore();
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(rand() * w, rand() * h, 10 + rand() * 40, 2 + rand() * 6);
  }
}

function paintStripe(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.fillRect(0, 0, w, h);
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, w, h);
  ctx.clip();
  const step = 48;
  for (let x = -h; x < w + h; x += step) {
    ctx.fillStyle = 'rgba(255,170,50,0.85)';
    ctx.beginPath();
    ctx.moveTo(x, h);
    ctx.lineTo(x + step / 2, h);
    ctx.lineTo(x + step / 2 + h, 0);
    ctx.lineTo(x + h, 0);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 0, w, h);
}

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createWorld(scene) {
  const root = new THREE.Group();
  scene.add(root);

  const solids = [];
  const colliders = [];
  const spawns = [];

  const floorTex = makeTexture(512, 512, paintFloor, 4, 5);
  const wallTex = makeTexture(512, 512, paintWall, 5, 1.2);
  const crateTex = makeTexture(256, 256, paintCrate);
  const stripeTex = makeTexture(256, 128, paintStripe);
  const glowTex = glowTexture();

  // ---------- shell ----------
  const floorMat = new THREE.MeshStandardMaterial({ map: floorTex, color: 0xd7e0e2, roughness: 0.62, metalness: 0.5 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(BAY.halfX * 2 + 3, BAY.maxZ * 2 + 3), floorMat);
  floor.rotation.x = -Math.PI / 2;
  root.add(floor);
  solids.push(floor);

  const ceilMat = new THREE.MeshStandardMaterial({ color: 0x1a2428, roughness: 0.85, metalness: 0.45 });
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(BAY.halfX * 2, BAY.maxZ * 2), ceilMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = BAY.height;
  root.add(ceiling);
  solids.push(ceiling);

  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, color: 0xe2eaec, roughness: 0.75, metalness: 0.4 });
  const sideGeo = new THREE.PlaneGeometry(BAY.maxZ * 2, BAY.height);
  for (const s of [-1, 1]) {
    const wall = new THREE.Mesh(sideGeo, wallMat);
    wall.position.set(s * (BAY.halfX + 1.7), BAY.height / 2, 0);
    wall.rotation.y = s > 0 ? -Math.PI / 2 : Math.PI / 2;
    root.add(wall);
    solids.push(wall);
  }
  const endGeo = new THREE.PlaneGeometry(BAY.halfX * 2 + 3, BAY.height);
  const backWall = new THREE.Mesh(endGeo, wallMat);
  backWall.position.set(0, BAY.height / 2, BAY.minZ - 0.7);
  root.add(backWall);
  solids.push(backWall);
  const frontWall = new THREE.Mesh(endGeo, wallMat);
  frontWall.position.set(0, BAY.height / 2, BAY.maxZ + 0.7);
  frontWall.rotation.y = Math.PI;
  root.add(frontWall);
  solids.push(frontWall);

  // structural ribs
  const ribMat = new THREE.MeshStandardMaterial({ color: 0x2c373b, metalness: 0.75, roughness: 0.42 });
  const ribGeo = new THREE.BoxGeometry(0.5, BAY.height, 0.7);
  for (let z = -18; z <= 18; z += 6) {
    for (const s of [-1, 1]) {
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(s * (BAY.halfX - 0.1), BAY.height / 2, z);
      root.add(rib);
    }
  }

  // wall pipework
  const pipeMat = new THREE.MeshStandardMaterial({ color: 0x39474b, metalness: 0.85, roughness: 0.35 });
  for (const s of [-1, 1]) {
    for (let i = 0; i < 2; i++) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, BAY.maxZ * 2 - 1, 8), pipeMat);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(s * (BAY.halfX + 1.35), 6.6 + i * 0.55, 0);
      root.add(pipe);
    }
  }

  // ---------- catwalk ----------
  const catMat = new THREE.MeshStandardMaterial({ color: 0x2a3438, metalness: 0.7, roughness: 0.5 });
  const railMat = new THREE.MeshStandardMaterial({ color: 0x4b5b60, metalness: 0.8, roughness: 0.35 });
  for (const s of [-1, 1]) {
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.22, BAY.maxZ * 2 - 2), catMat);
    deck.position.set(s * (BAY.halfX - 2.3), 5.1, 0);
    root.add(deck);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, BAY.maxZ * 2 - 2), railMat);
    rail.position.set(s * (BAY.halfX - 3.45), 6.05, 0);
    root.add(rail);
    for (let z = -19; z <= 19; z += 2.4) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.0, 0.07), railMat);
      post.position.set(s * (BAY.halfX - 3.45), 5.55, z);
      root.add(post);
    }
    // catwalk underglow
    const strip = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.06, BAY.maxZ * 2 - 3),
      new THREE.MeshBasicMaterial({ color: 0x1d6c7c })
    );
    strip.position.set(s * (BAY.halfX - 3.52), 4.96, 0);
    root.add(strip);

    // ladders
    for (const z of [-12, 11]) {
      for (let y = 0.4; y < 5.2; y += 0.45) {
        const rung = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.05), railMat);
        rung.position.set(s * (BAY.halfX - 1.4), y, z);
        root.add(rung);
      }
      for (const dx of [-0.36, 0.36]) {
        const pole = new THREE.Mesh(new THREE.BoxGeometry(0.05, 5.2, 0.05), railMat);
        pole.position.set(s * (BAY.halfX - 1.4) + dx, 2.6, z);
        root.add(pole);
      }
    }
  }

  // ---------- ceiling lamps ----------
  const lampMat = new THREE.MeshStandardMaterial({ color: 0x3a4145, metalness: 0.7, roughness: 0.45 });
  const lampGlowMat = new THREE.MeshBasicMaterial({ color: 0xffe4bc, toneMapped: false });
  const lampPositions = [
    [-7, 7.9, -8],
    [7, 7.9, -8],
    [-7, 7.9, 7],
    [7, 7.9, 7],
  ];
  for (const [x, y, z] of lampPositions) {
    const housing = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.3, 1.1), lampMat);
    housing.position.set(x, y + 0.5, z);
    root.add(housing);
    const pane = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.08, 0.8), lampGlowMat);
    pane.position.set(x, y + 0.34, z);
    root.add(pane);
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTex, color: 0xffbb77, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    );
    glow.position.set(x, y + 0.2, z);
    glow.scale.set(4.2, 4.2, 1);
    root.add(glow);
    const light = new THREE.PointLight(0xffc78f, 240, 38, 2);
    light.position.set(x, y - 0.5, z);
    root.add(light);
  }

  // ---------- emergency strips ----------
  const redStripMat = new THREE.MeshBasicMaterial({ color: 0xff3a20, toneMapped: false });
  for (const s of [-1, 1]) {
    for (const z of [-16, -10, 4, 12, 18]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.18, 2.2), redStripMat);
      strip.position.set(s * (BAY.halfX + 1.62), 3.1, z);
      root.add(strip);
      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: glowTex, color: 0xff3a1c, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
      );
      glow.position.copy(strip.position);
      glow.position.x -= s * 0.1;
      glow.scale.set(2.6, 1.2, 1);
      root.add(glow);
    }
  }

  // ---------- crates ----------
  const crateMats = [];
  const baseCrateMat = new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.72, metalness: 0.35 });
  for (const tint of [0x8a9a9e, 0xa08b63, 0x6f8a8e, 0xb0b8b8]) {
    crateMats.push(baseCrateMat.clone());
    crateMats[crateMats.length - 1].color.setHex(tint);
  }
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x242e31, metalness: 0.8, roughness: 0.4 });

  function addShadow(x, z, sx, sz) {
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(sx, sz),
      new THREE.MeshBasicMaterial({ map: glowTex, color: 0x000000, transparent: true, opacity: 0.55, depthWrite: false })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(x, 0.012, z);
    root.add(shadow);
  }

  function addCrate(x, z, w, h, d, matIndex = 0, rot = 0) {
    const mat = crateMats[matIndex % crateMats.length];
    const crate = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    crate.position.set(x, h / 2, z);
    crate.rotation.y = rot;
    root.add(crate);
    solids.push(crate);

    // edge trim
    const trim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.1, d + 0.06), trimMat);
    trim.position.set(x, h - 0.05, z);
    trim.rotation.y = rot;
    root.add(trim);
    const trimLow = trim.clone();
    trimLow.position.y = 0.06;
    root.add(trimLow);

    const halfW = (Math.abs(Math.cos(rot)) * w + Math.abs(Math.sin(rot)) * d) / 2;
    const halfD = (Math.abs(Math.sin(rot)) * w + Math.abs(Math.cos(rot)) * d) / 2;
    colliders.push({ minX: x - halfW, maxX: x + halfW, minZ: z - halfD, maxZ: z + halfD, tag: 'crate' });
    addShadow(x, z, halfW * 2.6, halfD * 2.6);

    if (rand() > 0.55) {
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 0.55, 0.16),
        new THREE.MeshBasicMaterial({ color: 0xffa42e, transparent: true, opacity: 0.55 })
      );
      label.position.set(x, h * 0.62, z + Math.cos(rot) * (d / 2 + 0.02));
      label.rotation.y = rot;
      root.add(label);
    }
    return crate;
  }

  addCrate(-9.6, 5.4, 3.0, 2.5, 3.0, 0, 0.06);
  addCrate(-11.9, 1.4, 2.6, 3.4, 2.6, 2, -0.12);
  addCrate(-8.4, 9.9, 2.2, 1.7, 2.2, 1, 0.2);
  addCrate(9.4, 4.6, 3.2, 2.6, 3.0, 3, -0.05);
  addCrate(12.2, 10.4, 2.4, 2.0, 2.8, 1, 0.16);
  addCrate(7.8, -8.9, 2.4, 1.8, 2.2, 2, 0.1);
  addCrate(-8.1, -8.4, 2.6, 2.2, 2.4, 3, -0.08);
  addCrate(11.6, -4.8, 2.5, 2.8, 2.5, 0, 0.24);
  addCrate(-4.9, 13.7, 1.7, 1.25, 1.7, 2, 0.4);
  addCrate(4.6, 13.9, 1.6, 1.1, 1.6, 1, -0.3);

  // stacked mini containers near back
  addCrate(-11.5, -14.8, 2.2, 5.0, 2.2, 3, 0.04);
  addCrate(11.6, -15.2, 2.2, 4.2, 2.2, 0, -0.05);

  // ---------- reactor core ----------
  const coreGroup = new THREE.Group();
  coreGroup.position.set(CORE.x, 0, CORE.z);
  root.add(coreGroup);

  const coreDarkMat = new THREE.MeshStandardMaterial({ color: 0x1e282b, metalness: 0.85, roughness: 0.3 });
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(3.15, 3.5, 0.6, 32), coreDarkMat);
  pedestal.position.y = 0.3;
  coreGroup.add(pedestal);
  solids.push(pedestal);

  const collar = new THREE.Mesh(new THREE.CylinderGeometry(2.55, 2.9, 0.7, 32), coreDarkMat);
  collar.position.y = 0.8;
  coreGroup.add(collar);

  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x081a1a,
    emissive: 0x1fd8b4,
    emissiveIntensity: 0.55,
    metalness: 0.55,
    roughness: 0.25,
  });
  const coreBody = new THREE.Group();
  coreBody.position.y = 2.5;
  coreGroup.add(coreBody);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const slat = new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.42, 0.16), coreMat);
    slat.position.set(Math.cos(a) * 1.58, 0, Math.sin(a) * 1.58);
    slat.rotation.y = -a;
    coreBody.add(slat);
    solids.push(slat);
  }
  for (const y of [-1.55, 0, 1.55]) {
    const belt = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.07, 8, 28), coreDarkMat);
    belt.rotation.x = Math.PI / 2;
    belt.position.y = y;
    coreBody.add(belt);
  }

  // inner energy column, visible through the cage
  const innerCore = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.72, 3.15, 16, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x9dfff0, transparent: true, opacity: 0.72, side: THREE.DoubleSide, toneMapped: false })
  );
  innerCore.position.y = 2.5;
  coreGroup.add(innerCore);

  const shell = new THREE.Mesh(
    new THREE.CylinderGeometry(1.78, 1.82, 3.55, 24, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0x3ff0c8,
      transparent: true,
      opacity: 0.09,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    })
  );
  shell.position.y = 2.5;
  coreGroup.add(shell);

  const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.72, 1.5, 0.5, 24), coreDarkMat);
  cap.position.y = 4.35;
  coreGroup.add(cap);
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 14), new THREE.MeshBasicMaterial({ color: 0xbafff1, toneMapped: false }));
  emitter.position.y = 4.85;
  coreGroup.add(emitter);

  const ringMats = [];
  for (let i = 0; i < 4; i++) {
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x47f0cf, toneMapped: false, transparent: true });
    ringMats.push(ringMat);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.02, 0.07, 8, 40), ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.15 + i * 0.95;
    ring.userData.baseScale = 1;
    coreGroup.add(ring);
  }

  const coreLight = new THREE.PointLight(0x3ff0c8, 42, 28, 2);
  coreLight.position.set(0, 3.4, 3.0);
  coreGroup.add(coreLight);

  const coreGlow = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: glowTex, color: 0x3ff0c8, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
  );
  coreGlow.position.set(0, 2.8, 0);
  coreGlow.scale.set(11, 14, 1);
  coreGroup.add(coreGlow);

  const corePool = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 12),
    new THREE.MeshBasicMaterial({
      map: glowTex,
      color: 0x2fd8b8,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    })
  );
  corePool.rotation.x = -Math.PI / 2;
  corePool.position.y = 0.03;
  coreGroup.add(corePool);

  // reactor struts
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const strut = new THREE.Mesh(new THREE.BoxGeometry(0.26, 4.2, 0.26), coreDarkMat);
    strut.position.set(Math.cos(a) * 2.35, 2.2, Math.sin(a) * 2.35);
    coreGroup.add(strut);
  }

  // hazard ring
  const hazardRing = new THREE.Mesh(
    new THREE.RingGeometry(3.8, 4.6, 48),
    new THREE.MeshBasicMaterial({ map: stripeTex, transparent: true, opacity: 0.75, side: THREE.DoubleSide })
  );
  hazardRing.rotation.x = -Math.PI / 2;
  hazardRing.position.y = 0.015;
  coreGroup.add(hazardRing);

  // core label
  const coreLabelCanvas = document.createElement('canvas');
  coreLabelCanvas.width = 512;
  coreLabelCanvas.height = 128;
  const lc = coreLabelCanvas.getContext('2d');
  lc.fillStyle = '#0c1416';
  lc.fillRect(0, 0, 512, 128);
  lc.strokeStyle = '#ffa42e';
  lc.lineWidth = 6;
  lc.strokeRect(6, 6, 500, 116);
  lc.fillStyle = '#ffb347';
  lc.font = 'bold 40px monospace';
  lc.textAlign = 'center';
  lc.fillText('REACTOR 09', 256, 58);
  lc.font = '18px monospace';
  lc.fillStyle = '#7d9398';
  lc.fillText('DO NOT BREACH // CLASS IV', 256, 92);
  const coreLabelTex = new THREE.CanvasTexture(coreLabelCanvas);
  coreLabelTex.colorSpace = THREE.SRGBColorSpace;
  const coreLabel = new THREE.Mesh(
    new THREE.PlaneGeometry(2.6, 0.65),
    new THREE.MeshBasicMaterial({ map: coreLabelTex, transparent: false })
  );
  coreLabel.position.set(0, 0.42, 3.2);
  coreGroup.add(coreLabel);

  colliders.push({ minX: -3.4, maxX: 3.4, minZ: CORE.z - 3.4, maxZ: CORE.z + 3.4, tag: 'core' });

  // ---------- breach doors ----------
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x2b363a, metalness: 0.8, roughness: 0.35 });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x1b2326, metalness: 0.7, roughness: 0.5 });
  const portalMat = new THREE.MeshBasicMaterial({ color: 0x360b06 });

  function addDoor(x, z, rotY, width, height, spawnPos, lane) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    root.add(g);

    const frameL = new THREE.Mesh(new THREE.BoxGeometry(0.4, height + 0.6, 0.55), frameMat);
    frameL.position.set(-width / 2 - 0.2, (height + 0.6) / 2, 0);
    const frameR = frameL.clone();
    frameR.position.x = width / 2 + 0.2;
    const frameT = new THREE.Mesh(new THREE.BoxGeometry(width + 0.8, 0.5, 0.6), frameMat);
    frameT.position.set(0, height + 0.3, 0);
    g.add(frameL, frameR, frameT);

    const door = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.16), doorMat);
    door.position.set(0, height / 2, 0);
    g.add(door);

    const seam = new THREE.Mesh(new THREE.BoxGeometry(0.1, height - 0.2, 0.05), new THREE.MeshBasicMaterial({ color: 0xff2e1c }));
    seam.position.set(0, height / 2, -0.11);
    g.add(seam);

    const portal = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.3, height - 0.3), portalMat);
    portal.position.set(0, height / 2, -0.12);
    g.add(portal);

    const warn = new THREE.Mesh(new THREE.PlaneGeometry(width * 0.9, 0.7), new THREE.MeshBasicMaterial({ map: stripeTex, transparent: true, opacity: 0.8 }));
    warn.rotation.x = -Math.PI / 2;
    warn.position.set(0, 0.02, 2.0);
    g.add(warn);

    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff2e1c }));
    lamp.position.set(0, height + 0.72, 0);
    g.add(lamp);
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTex, color: 0xff2e1c, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    glow.position.copy(lamp.position);
    glow.scale.set(2.2, 2.2, 1);
    g.add(glow);

    const light = new THREE.PointLight(0xff2b16, 18, 10, 2);
    light.position.set(0, 3, 2.4);
    g.add(light);

    spawns.push({ position: new THREE.Vector3(spawnPos[0], 0, spawnPos[1]), lane: lane.map(([lx, lz]) => new THREE.Vector3(lx, 0, lz)), door: g });
    return { g, seam, portal, glow, light };
  }

  const doors = [];
  doors.push(
    addDoor(-BAY.halfX - 0.4, -4, Math.PI / 2, 4.2, 5.2, [-13.6, -4], [
      [-10.5, -4],
      [-5, -2],
      [-1.5, -9.5],
    ])
  );
  doors.push(
    addDoor(BAY.halfX + 0.4, -4, -Math.PI / 2, 4.2, 5.2, [13.6, -4], [
      [10.5, -4],
      [5, -2],
      [1.5, -9.5],
    ])
  );
  doors.push(
    addDoor(0, BAY.maxZ + 0.4, Math.PI, 5.4, 5.6, [0, 18.4], [
      [0, 13.5],
      [0, 5],
      [0, -8.5],
    ])
  );

  // ---------- floor decals ----------
  const decalCanvas = document.createElement('canvas');
  decalCanvas.width = 512;
  decalCanvas.height = 512;
  const dc = decalCanvas.getContext('2d');
  dc.clearRect(0, 0, 512, 512);
  dc.strokeStyle = 'rgba(255,170,50,0.65)';
  dc.lineWidth = 12;
  dc.setLineDash([34, 22]);
  dc.beginPath();
  dc.moveTo(256, 500);
  dc.lineTo(256, 90);
  dc.stroke();
  dc.setLineDash([]);
  dc.strokeStyle = 'rgba(255,170,50,0.5)';
  dc.lineWidth = 6;
  dc.strokeRect(30, 30, 452, 452);
  dc.font = 'bold 150px monospace';
  dc.textAlign = 'center';
  dc.fillStyle = 'rgba(210,230,230,0.07)';
  dc.fillText('09', 256, 300);
  dc.font = 'bold 18px monospace';
  dc.fillStyle = 'rgba(255,170,50,0.34)';
  dc.fillText('CARGO BAY // AUTHORIZED ONLY', 256, 342);
  const decalTex = new THREE.CanvasTexture(decalCanvas);
  decalTex.colorSpace = THREE.SRGBColorSpace;
  const decal = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 26),
    new THREE.MeshBasicMaterial({ map: decalTex, transparent: true, opacity: 0.62, depthWrite: false, toneMapped: false })
  );
  decal.rotation.x = -Math.PI / 2;
  decal.position.set(0, 0.02, 2);
  root.add(decal);

  // central lane edge lights
  for (let z = -8; z <= 16; z += 2.4) {
    for (const s of [-1, 1]) {
      const dot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.35), new THREE.MeshBasicMaterial({ color: 0x2d7f88 }));
      dot.position.set(s * 4.2, 0.03, z);
      root.add(dot);
    }
  }

  // ---------- atmosphere ----------
  const dustGeo = new THREE.BufferGeometry();
  const dustCount = 420;
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * BAY.halfX * 2;
    dustPos[i * 3 + 1] = Math.random() * BAY.height;
    dustPos[i * 3 + 2] = BAY.minZ + Math.random() * (BAY.maxZ - BAY.minZ);
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({ color: 0x9fc4c6, size: 0.035, transparent: true, opacity: 0.45, depthWrite: false })
  );
  root.add(dust);

  // ambient haze planes near lamps
  const hazeMat = new THREE.MeshBasicMaterial({
    map: glowTex,
    color: 0xffb877,
    transparent: true,
    opacity: 0.055,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  for (const [x, , z] of lampPositions) {
    const haze = new THREE.Mesh(new THREE.PlaneGeometry(9, 14), hazeMat);
    haze.position.set(x, 4.4, z);
    haze.rotation.y = Math.PI / 4;
    root.add(haze);

    const cone = new THREE.Mesh(
      new THREE.CylinderGeometry(0.75, 4.6, 8.1, 20, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0xffc78f,
        transparent: true,
        opacity: 0.028,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
        toneMapped: false,
      })
    );
    cone.position.set(x, 4.05, z);
    root.add(cone);
  }

  // ---------- core state ----------
  let healthRatio = 1;
  const baseCoreColor = new THREE.Color(0x47f0cf);
  const dangerColor = new THREE.Color(0xff3b30);
  const tempColor = new THREE.Color();
  let flicker = 0;

  function setCoreHealth(ratio) {
    healthRatio = THREE.MathUtils.clamp(ratio, 0, 1);
    const danger = 1 - healthRatio;
    coreMat.emissive.copy(baseCoreColor).lerp(dangerColor, danger * 0.9);
    coreMat.emissiveIntensity = 0.34 + healthRatio * 0.4;
    for (const m of ringMats) m.color.copy(baseCoreColor).lerp(dangerColor, danger);
    coreLight.color.copy(baseCoreColor).lerp(dangerColor, danger);
    coreLight.intensity = 24 + healthRatio * 26;
    coreGlow.material.color.copy(baseCoreColor).lerp(dangerColor, danger);
    innerCore.material.color.copy(new THREE.Color(0x9dfff0)).lerp(dangerColor, danger);
    emitter.material.color.copy(new THREE.Color(0xbafff1)).lerp(dangerColor, danger);
  }

  function update(dt, t) {
    const speed = healthRatio < 0.35 ? 2.4 : 0.65;
    for (let i = 0; i < 4; i++) {
      const ring = coreGroup.children.find((c) => c.material === ringMats[i]);
      if (ring) {
        const s = 1 + Math.sin(t * (1.1 + i * 0.2) + i) * 0.015;
        ring.scale.set(s, s, s);
        ring.material.opacity = 0.75 + Math.sin(t * 2 + i) * 0.2;
        ring.material.transparent = true;
      }
    }
    emitter.scale.setScalar(1 + Math.sin(t * 3.2) * 0.06);
    coreGlow.material.opacity = 0.35 + Math.sin(t * 2.1) * 0.06 + (1 - healthRatio) * 0.16;
    hazardRing.rotation.z += dt * 0.03;
    innerCore.material.opacity = 0.55 + Math.sin(t * 3.6) * 0.12;

    // dust drift
    const pos = dust.geometry.attributes.position;
    for (let i = 0; i < dustCount; i++) {
      let y = pos.getY(i) + dt * (0.04 + (i % 5) * 0.012);
      if (y > BAY.height) y = 0.2;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;

    // emergency flicker when critical
    if (healthRatio < 0.35) {
      flicker += dt;
      const on = Math.sin(flicker * 9) > -0.4;
      for (const d of doors) d.glow.material.opacity = on ? 0.7 : 0.15;
    }

    // portal pulse
    const pulse = 0.35 + Math.sin(t * 2.5) * 0.12;
    portalMat.color.setRGB(0.28 + pulse * 0.2, 0.035, 0.02);
  }

  setCoreHealth(1);

  return {
    root,
    floor,
    solids,
    colliders,
    spawns,
    core: { x: CORE.x, z: CORE.z, radius: CORE.radius, position: new THREE.Vector3(CORE.x, 0, CORE.z) },
    doors,
    setCoreHealth,
    update,
  };
}
