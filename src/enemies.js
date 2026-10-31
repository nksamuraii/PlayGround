import * as THREE from 'three';
import { BAY, CORE } from './world.js';

const TYPE_DEFS = {
  drone: {
    name: 'SPECTER',
    hp: 38,
    speed: 4.5,
    score: 100,
    radius: 0.62,
    bodyY: 0.05,
    headY: 0.05,
    coreDamage: 3,
    playerDamage: 8,
    attackRange: 2.0,
    attackCooldown: 0.9,
  },
  raider: {
    name: 'BOARDER',
    hp: 85,
    speed: 2.55,
    score: 220,
    radius: 0.55,
    bodyY: 1.05,
    headY: 1.72,
    coreDamage: 4,
    playerDamage: 7,
    attackRange: 15,
    attackCooldown: 2.3,
  },
  brute: {
    name: 'BREACHER',
    hp: 300,
    speed: 1.7,
    score: 500,
    radius: 0.95,
    bodyY: 1.45,
    headY: 2.3,
    coreDamage: 9,
    playerDamage: 17,
    attackRange: 2.8,
    attackCooldown: 1.35,
  },
};

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

const GLOW = glowTexture();

function mat(color, metalness = 0.7, roughness = 0.4, emissive = 0x000000) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness, emissive, emissiveIntensity: 0.6 });
}

export class Enemy {
  constructor({ type, position, lane, scene, fx, world, audio, callbacks, wave = 1 }) {
    this.type = type;
    this.def = TYPE_DEFS[type];
    this.scene = scene;
    this.fx = fx;
    this.world = world;
    this.audio = audio;
    this.callbacks = callbacks;

    this.maxHp = this.def.hp * (1 + (wave - 1) * 0.06);
    this.hp = this.maxHp;
    this.speed = this.def.speed * (1 + (wave - 1) * 0.025);
    this.radius = this.def.radius;
    this.alive = true;
    this.dying = 0;
    this.state = 'spawning';
    this.spawnTimer = 0.35;
    this.spawnScale = 0.01;
    this.attackTimer = 0.6 + Math.random() * 0.5;
    this.hitFlash = 0;
    this.bob = Math.random() * Math.PI * 2;
    this.strafeDir = Math.random() > 0.5 ? 1 : -1;
    this.lane = lane.map((p) => p.clone());
    this.laneIndex = 0;
    this.velocity = new THREE.Vector3();
    this.lastCoreHit = 0;

    this.group = new THREE.Group();
    this.group.position.copy(position);
    this.group.position.y = 0;
    this.group.scale.setScalar(0.01);
    scene.add(this.group);

    this.build();
    this.buildHealthBar();
  }

  build() {
    this.flashMats = [];
    const add = (mesh, flash = true) => {
      this.group.add(mesh);
      if (flash && mesh.material && mesh.material.emissive) this.flashMats.push(mesh.material);
      return mesh;
    };
    const addGlow = (x, y, z, scale, color, opacity = 0.6) => {
      const s = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: GLOW,
          color,
          transparent: true,
          opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          toneMapped: false,
        })
      );
      s.position.set(x, y, z);
      s.scale.set(scale, scale, 1);
      this.group.add(s);
      return s;
    };

    const dark = mat(0x343c3f, 0.45, 0.5);
    const armor = mat(0x566166, 0.35, 0.56, 0x180604);
    const trim = mat(0x22292c, 0.6, 0.4);
    const red = mat(0x6b120b, 0.3, 0.5, 0x8f150a);

    if (this.type === 'drone') {
      this.group.position.y = 1.15;
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.48, 0), dark);
      core.scale.set(1, 0.8, 1.15);
      add(core);
      for (let i = 0; i < 4; i++) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.055, 0.18), trim);
        fin.position.y = 0.05;
        fin.rotation.y = (i / 4) * Math.PI * 2;
        fin.rotation.z = 0.18;
        fin.position.x = Math.cos((i / 4) * Math.PI * 2) * 0.44;
        fin.position.z = Math.sin((i / 4) * Math.PI * 2) * 0.44;
        add(fin);
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff2a12, toneMapped: false }));
        tip.position.set(Math.cos((i / 4) * Math.PI * 2) * 0.8, 0.08, Math.sin((i / 4) * Math.PI * 2) * 0.8);
        this.group.add(tip);
      }
      const eyeHousing = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.2), trim);
      eyeHousing.position.set(0, 0.02, -0.4);
      add(eyeHousing);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 8), new THREE.MeshBasicMaterial({ color: 0xff3a1c, toneMapped: false }));
      eye.position.set(0, 0.02, -0.5);
      add(eye, false);
      const eyeGlow = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: GLOW, color: 0xff3a1c, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
      );
      eyeGlow.scale.set(1.6, 1.6, 1);
      eyeGlow.position.copy(eye.position);
      this.group.add(eyeGlow);
      this.eyeGlow = eyeGlow;
      addGlow(0, -0.5, 0.1, 3.0, 0xff2a12, 0.28);
      this.spinner = new THREE.Group();
      this.group.add(this.spinner);
      const rotor = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.022, 6, 24), trim);
      rotor.rotation.x = Math.PI / 2;
      this.spinner.add(rotor);
      this.barY = 1.05;
    } else if (this.type === 'raider') {
      // legs
      this.legs = [];
      for (const s of [-1, 1]) {
        const leg = new THREE.Group();
        leg.position.set(s * 0.17, 0.82, 0);
        const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.5, 0.22), armor);
        thigh.position.y = -0.22;
        leg.add(thigh);
        const shin = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.44, 0.19), dark);
        shin.position.y = -0.62;
        leg.add(shin);
        const boot = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.3), trim);
        boot.position.set(0, -0.85, -0.05);
        leg.add(boot);
        this.group.add(leg);
        this.legs.push(leg);
      }
      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.76, 0.42), armor);
      torso.position.y = 1.22;
      add(torso);
      for (const s of [-1, 1]) {
        const pad = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.4), trim);
        pad.position.set(s * 0.42, 1.5, 0);
        pad.rotation.z = -s * 0.2;
        add(pad);
      }
      const chest = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.1), trim);
      chest.position.set(0, 1.34, -0.24);
      add(chest);
      const chestGlow = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.02), new THREE.MeshBasicMaterial({ color: 0xff4a22, toneMapped: false }));
      chestGlow.position.set(0, 1.34, -0.3);
      this.group.add(chestGlow);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), dark);
      head.position.y = 1.73;
      add(head);
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.1), new THREE.MeshBasicMaterial({ color: 0xff4a24, toneMapped: false }));
      visor.position.set(0, 1.75, -0.2);
      this.group.add(visor);
      addGlow(0, 1.75, -0.26, 1.3, 0xff2a12, 0.7);
      addGlow(0, 1.34, -0.31, 2.0, 0xff3a1c, 0.32);
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.2), trim);
      pack.position.set(0, 1.25, 0.26);
      add(pack);
      const packGlow = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), new THREE.MeshBasicMaterial({ color: 0xff3a1c }));
      packGlow.position.set(0, 1.35, 0.37);
      this.group.add(packGlow);

      this.arms = [];
      for (const s of [-1, 1]) {
        const arm = new THREE.Group();
        arm.position.set(s * 0.38, 1.44, 0);
        const upper = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.17), dark);
        upper.position.y = -0.16;
        arm.add(upper);
        const fore = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.36, 0.15), armor);
        fore.position.set(0, -0.48, -0.04);
        arm.add(fore);
        this.group.add(arm);
        this.arms.push(arm);
        if (s > 0) {
          const gun = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.55), trim);
          gun.position.set(0, -0.62, -0.28);
          arm.add(gun);
          const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.3, 8), dark);
          barrel.rotation.x = Math.PI / 2;
          barrel.position.set(0, -0.6, -0.62);
          arm.add(barrel);
          const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff5a2a }));
          muzzle.position.set(0, -0.6, -0.78);
          arm.add(muzzle);
          this.gunTip = muzzle;
        }
      }
      this.barY = 2.25;
    } else {
      // breacher
      this.group.position.y = 0;
      this.legs = [];
      for (const s of [-1, 1]) {
        const leg = new THREE.Group();
        leg.position.set(s * 0.28, 0.95, 0);
        const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.6, 0.34), dark);
        thigh.position.y = -0.28;
        leg.add(thigh);
        const shin = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.55, 0.3), armor);
        shin.position.y = -0.82;
        leg.add(shin);
        const boot = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.2, 0.46), trim);
        boot.position.set(0, -1.1, -0.08);
        leg.add(boot);
        this.group.add(leg);
        this.legs.push(leg);
      }
      const torso = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 0.6), armor);
      torso.position.y = 1.62;
      add(torso);
      const belly = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.45, 0.55), dark);
      belly.position.y = 1.05;
      add(belly);
      for (const s of [-1, 1]) {
        const pad = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.4, 0.52), trim);
        pad.position.set(s * 0.58, 1.98, 0);
        pad.rotation.z = s * 0.18;
        add(pad);
      }
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.32, 0.34), dark);
      head.position.y = 2.36;
      add(head);
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.08, 0.04), new THREE.MeshBasicMaterial({ color: 0xff2a14, toneMapped: false }));
      visor.position.set(0, 2.38, -0.18);
      this.group.add(visor);
      addGlow(0, 2.38, -0.22, 1.15, 0xff2a12, 0.5);
      addGlow(0, 1.68, 0.34, 1.8, 0xff2a12, 0.28);
      const spine = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.7, 0.03), new THREE.MeshBasicMaterial({ color: 0xff2a14, toneMapped: false }));
      spine.position.set(0, 1.68, 0.31);
      this.group.add(spine);

      this.arms = [];
      for (const s of [-1, 1]) {
        const arm = new THREE.Group();
        arm.position.set(s * 0.62, 2.0, 0);
        const upper = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.55, 0.3), dark);
        upper.position.y = -0.24;
        arm.add(upper);
        const fore = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.55, 0.28), armor);
        fore.position.set(0, -0.7, -0.04);
        arm.add(fore);
        const fist = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.32, 0.36), trim);
        fist.position.set(0, -1.02, -0.06);
        arm.add(fist);
        const knuckle = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.08, 0.05), new THREE.MeshBasicMaterial({ color: 0xff2a14 }));
        knuckle.position.set(0, -0.96, -0.24);
        arm.add(knuckle);
        this.group.add(arm);
        this.arms.push(arm);
      }
      this.barY = 2.95;
    }

    this.group.traverse((o) => {
      if (o.isMesh) o.castShadow = false;
    });
  }

  buildHealthBar() {
    const g = new THREE.Group();
    const bg = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 0.09),
      new THREE.MeshBasicMaterial({ color: 0x140605, transparent: true, opacity: 0.75, depthWrite: false })
    );
    const fg = new THREE.Mesh(
      new THREE.PlaneGeometry(0.86, 0.05),
      new THREE.MeshBasicMaterial({ color: 0xff5a3a, transparent: true, opacity: 0.9, depthWrite: false })
    );
    fg.position.z = 0.001;
    g.add(bg, fg);
    g.position.set(0, this.barY, 0);
    g.visible = false;
    this.group.add(g);
    this.healthBar = { group: g, fill: fg };
  }

  get bodyCenter() {
    return new THREE.Vector3(this.group.position.x, this.group.position.y + this.def.bodyY, this.group.position.z);
  }

  get headCenter() {
    return new THREE.Vector3(this.group.position.x, this.group.position.y + this.def.headY, this.group.position.z);
  }

  takeDamage(amount, isHead, dir) {
    if (!this.alive) return false;
    this.hp -= amount;
    this.hitFlash = 1;
    this.healthBar.group.visible = true;
    this.healthBar.fill.scale.x = Math.max(0.01, this.hp / this.maxHp);
    this.healthBar.fill.position.x = -(1 - this.healthBar.fill.scale.x) * 0.43;
    this.healthBar.fill.material.color.setHex(isHead ? 0xffd166 : 0xff5a3a);
    this.audio.hit();
    if (isHead) this.audio.headshot();
    if (this.hp <= 0) {
      this.die(dir);
      return true;
    }
    return false;
  }

  die(dir) {
    this.alive = false;
    this.dying = 0.85;
    this.healthBar.group.visible = false;
    this.audio.kill();
    const center = this.bodyCenter;
    this.fx.spawn(center, {
      count: this.type === 'brute' ? 34 : 18,
      speed: this.type === 'brute' ? 8 : 5.5,
      color: this.type === 'drone' ? 0x62ffe0 : 0xff8a3a,
      size: 4,
      life: 0.85,
      gravity: 9,
      lift: 1.5,
    });
    this.fx.shockwave(center, this.type === 'drone' ? 0x47f0cf : 0xff7a3a);
    if (this.type === 'brute') {
      this.audio.explosion();
      this.fx.spawn(center, { count: 26, speed: 11, color: 0xffc46a, size: 6, life: 0.6, gravity: 5 });
    }
    if (this.callbacks.onDeath) this.callbacks.onDeath(this, dir);
  }

  update(dt, t, player, projectileSystem) {
    if (this.dying > 0) {
      this.dying -= dt;
      const k = Math.max(0, this.dying / 0.85);
      this.group.position.y = -(1 - k) * 1.9;
      this.group.rotation.z = (1 - k) * (this.type === 'drone' ? 2.6 : 1.2);
      this.group.rotation.x = (1 - k) * 0.6;
      this.group.scale.setScalar(Math.max(0.01, k));
      if (this.dying <= 0) this.remove();
      return;
    }
    if (!this.alive) return;

    if (this.state === 'spawning') {
      this.spawnTimer -= dt;
      const k = 1 - Math.max(0, this.spawnTimer) / 0.35;
      this.spawnScale = Math.max(0.01, 1 - (1 - k) * (1 - k));
      this.group.scale.setScalar(this.spawnScale);
      if (this.spawnTimer <= 0) {
        this.state = 'active';
        this.group.scale.setScalar(1);
      }
      return;
    }

    this.hitFlash = Math.max(0, this.hitFlash - dt * 6);
    for (const m of this.flashMats) {
      m.emissive.setRGB(this.hitFlash * 0.9, this.hitFlash * 0.25, this.hitFlash * 0.1);
    }

    if (this.healthBar.group) {
      this.healthBar.group.quaternion.copy(this.scene.userData.cameraQuat || new THREE.Quaternion());
    }

    const pos = this.group.position;
    const playerPos = player.position;
    const distPlayer = Math.hypot(playerPos.x - pos.x, playerPos.z - pos.z);
    const isBrute = this.type === 'brute';
    const isRanged = this.type === 'raider';

    let target;
    let usePlayer = false;
    if (isBrute) {
      usePlayer = distPlayer < 3.6;
    } else if (isRanged) {
      usePlayer = distPlayer < 16;
    } else {
      usePlayer = distPlayer < 9.5;
    }

    if (usePlayer) {
      target = playerPos;
    } else {
      // follow lane waypoints toward the core
      if (this.laneIndex < this.lane.length) {
        const wp = this.lane[this.laneIndex];
        if (Math.hypot(wp.x - pos.x, wp.z - pos.z) < 1.7) this.laneIndex++;
        target = this.lane[Math.min(this.laneIndex, this.lane.length - 1)] || CORE;
      }
      target = target || CORE;
      if (Math.hypot(target.x - pos.x, target.z - pos.z) < 1.6) {
        target = CORE;
      }
    }

    let dx = target.x - pos.x;
    let dz = target.z - pos.z;
    let dist = Math.hypot(dx, dz) || 1;
    dx /= dist;
    dz /= dist;

    let moveSpeed = this.speed;
    let attackTarget = null;

    if (isRanged && usePlayer) {
      // keep mid range and strafe
      const ideal = 9;
      if (dist < ideal - 2) {
        dx = -dx;
        dz = -dz;
      } else if (dist < ideal + 3) {
        const sx = -dz * this.strafeDir;
        const sz = dx * this.strafeDir;
        dx = sx * 0.75;
        dz = sz * 0.75;
        moveSpeed *= 0.55;
      }
      if (this.attackTimer <= 0 && dist < 16) {
        this.attackTimer = this.def.attackCooldown;
        this.burstLeft = 3;
        this.burstTimer = 0;
      }
      if (this.burstLeft > 0) {
        this.burstTimer -= dt;
        if (this.burstTimer <= 0) {
          this.burstTimer = 0.16;
          this.burstLeft--;
          const origin = this.gunTip
            ? this.gunTip.getWorldPosition(new THREE.Vector3())
            : this.bodyCenter;
          const chest = new THREE.Vector3(playerPos.x, playerPos.y + 1.2, playerPos.z);
          if (projectileSystem) projectileSystem.spawn(origin, chest, { damage: this.def.playerDamage, color: 0xff7a2a });
          this.audio.enemyShot();
          this.muzzleFlash = 0.06;
        }
      }
    } else if (isRanged) {
      if (this.attackTimer <= 0 && dist < 18) {
        // chip the core from range
        this.attackTimer = this.def.attackCooldown;
        this.burstLeft = 2;
        this.burstTimer = 0;
      }
      if (this.burstLeft > 0) {
        this.burstTimer -= dt;
        if (this.burstTimer <= 0) {
          this.burstTimer = 0.18;
          this.burstLeft--;
          const origin = this.gunTip ? this.gunTip.getWorldPosition(new THREE.Vector3()) : this.bodyCenter;
          const coreTarget = new THREE.Vector3(CORE.x, 2.2, CORE.z);
          if (projectileSystem) projectileSystem.spawn(origin, coreTarget, { damage: 3, color: 0xffa42a, core: true });
          this.audio.enemyShot();
        }
      }
    }

    // melee / attack when close to chosen target
    if (this.attackTimer > 0) this.attackTimer -= dt;
    if (!isRanged) {
      const targetPos = usePlayer ? playerPos : CORE;
      const d = Math.hypot(targetPos.x - pos.x, targetPos.z - pos.z);
      const range = this.def.attackRange + (usePlayer ? 0.4 : 2.6);
      if (d < range) {
        moveSpeed = 0;
        if (this.attackTimer <= 0) {
          this.attackTimer = this.def.attackCooldown;
          if (usePlayer) {
            player.takeDamage(this.def.playerDamage, pos.clone());
            if (this.callbacks.onMelee) this.callbacks.onMelee(this, this.def.playerDamage, false);
            this.fx.spawn(player.eyePosition, { count: 6, speed: 3, color: 0xff3b30, size: 2.5, life: 0.3 });
          } else {
            if (this.callbacks.onCoreDamage) this.callbacks.onCoreDamage(this, this.def.coreDamage);
            this.fx.spawn(new THREE.Vector3(CORE.x, 2.2, CORE.z + 2.2), {
              count: 12,
              speed: 5,
              color: 0xff6a3a,
              size: 4,
              life: 0.5,
            });
          }
        }
      }
    } else if (dist < 3.2 && !usePlayer) {
      // raider pressed against the core: claw at it
      if (this.attackTimer <= 0) {
        this.attackTimer = 1.6;
        if (this.callbacks.onCoreDamage) this.callbacks.onCoreDamage(this, 2);
      }
    }

    // separation
    let sepx = 0;
    let sepz = 0;
    if (this.scene.userData.enemies) {
      for (const other of this.scene.userData.enemies) {
        if (other === this || !other.alive || other.state !== 'active') continue;
        const ox = pos.x - other.group.position.x;
        const oz = pos.z - other.group.position.z;
        const d2 = ox * ox + oz * oz;
        const min = (this.radius + other.radius) * 1.15;
        if (d2 > 0.0001 && d2 < min * min) {
          const d = Math.sqrt(d2);
          sepx += (ox / d) * (min - d);
          sepz += (oz / d) * (min - d);
        }
      }
    }

    const vx = dx * moveSpeed + sepx * 3;
    const vz = dz * moveSpeed + sepz * 3;
    pos.x += vx * dt;
    pos.z += vz * dt;

    if (this.type !== 'drone') {
      for (const c of this.world.colliders) {
        const minX = c.minX - this.radius;
        const maxX = c.maxX + this.radius;
        const minZ = c.minZ - this.radius;
        const maxZ = c.maxZ + this.radius;
        if (pos.x > minX && pos.x < maxX && pos.z > minZ && pos.z < maxZ) {
          const dl = pos.x - minX;
          const dr = maxX - pos.x;
          const dt2 = pos.z - minZ;
          const db = maxZ - pos.z;
          const m = Math.min(dl, dr, dt2, db);
          if (m === dl) pos.x = minX;
          else if (m === dr) pos.x = maxX;
          else if (m === dt2) pos.z = minZ;
          else pos.z = maxZ;
        }
      }
    }

    pos.x = THREE.MathUtils.clamp(pos.x, -BAY.halfX + 0.5, BAY.halfX - 0.5);
    pos.z = THREE.MathUtils.clamp(pos.z, BAY.minZ + 0.6, BAY.maxZ - 0.6);

    // animation
    const moving = moveSpeed > 0.1;
    if (this.type === 'drone') {
      this.bob += dt * 4;
      pos.y = 1.15 + Math.sin(this.bob) * 0.12;
      this.group.rotation.y = Math.atan2(-dx, -dz);
      this.spinner.rotation.y += dt * 9;
      if (this.eyeGlow) this.eyeGlow.material.opacity = 0.55 + Math.sin(t * 6 + this.bob) * 0.2;
    } else {
      this.bob += dt * (moving ? this.speed * 3.4 : 2);
      if (this.legs) {
        const swing = moving ? Math.sin(this.bob) * 0.55 : 0;
        this.legs[0].rotation.x = swing;
        this.legs[1].rotation.x = -swing;
      }
      if (this.arms) {
        const swing = moving ? Math.sin(this.bob) * 0.22 : Math.sin(t * 1.8) * 0.03;
        this.arms[0].rotation.x = -swing;
        this.arms[1].rotation.x = swing;
      }
      if (this.type === 'brute') {
        this.group.position.y = Math.abs(Math.sin(this.bob)) * 0.06;
      }
      const targetRot = Math.atan2(-dx, -dz);
      let diff = targetRot - this.group.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.group.rotation.y += diff * Math.min(1, dt * 6);
    }

    if (this.muzzleFlash > 0) {
      this.muzzleFlash -= dt;
      if (this.gunTip) this.gunTip.material.color.setHex(this.muzzleFlash > 0 ? 0xffc46a : 0xff5a2a);
    }
  }

  remove() {
    this.group.removeFromParent();
    const i = this.scene.userData.enemies?.indexOf(this);
    if (i !== undefined && i >= 0) this.scene.userData.enemies.splice(i, 1);
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });
    this.remove();
  }
}

export class ProjectileSystem {
  constructor({ scene, world, fx, audio }) {
    this.scene = scene;
    this.world = world;
    this.fx = fx;
    this.audio = audio;
    this.list = [];
    const geo = new THREE.SphereGeometry(0.13, 10, 8);
    for (let i = 0; i < 48; i++) {
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ color: 0xff7a2a, transparent: true, opacity: 1 })
      );
      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: GLOW, color: 0xff7a2a, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      glow.scale.set(0.9, 0.9, 1);
      mesh.add(glow);
      mesh.visible = false;
      scene.add(mesh);
      this.list.push({ mesh, active: false, dir: new THREE.Vector3(), speed: 0, damage: 0, life: 0, core: false, glow });
    }
  }

  spawn(from, to, { speed = 18, damage = 7, color = 0xff7a2a, core = false } = {}) {
    const p = this.list.find((x) => !x.active);
    if (!p) return;
    p.active = true;
    p.mesh.visible = true;
    p.mesh.position.copy(from);
    p.dir.copy(to).sub(from).normalize();
    p.speed = speed;
    p.damage = damage;
    p.life = 3.2;
    p.core = core;
    p.mesh.material.color.setHex(color);
    p.glow.material.color.setHex(color);
  }

  update(dt, player, onPlayerHit, onCoreHit) {
    for (const p of this.list) {
      if (!p.active) continue;
      p.life -= dt;
      p.mesh.position.addScaledVector(p.dir, p.speed * dt);
      const pos = p.mesh.position;

      if (Math.random() > 0.55) {
        this.fx.spawn(pos, { count: 1, speed: 0.4, color: p.mesh.material.color.getHex(), size: 2.4, life: 0.22, gravity: 0 });
      }

      if (p.life <= 0 || pos.y < 0.05 || Math.abs(pos.x) > BAY.halfX || pos.z < BAY.minZ || pos.z > BAY.maxZ) {
        this.burst(p);
        continue;
      }

      if (p.core) {
        if (Math.hypot(pos.x - CORE.x, pos.z - CORE.z) < 2.4 && pos.y < 4.8) {
          if (onCoreHit) onCoreHit(p.damage);
          this.burst(p);
          continue;
        }
        continue;
      }

      // hit player capsule
      const px = player.position.x;
      const pz = player.position.z;
      const py = player.position.y + 1.0;
      if (player.alive && Math.hypot(pos.x - px, pos.z - pz) < 0.62 && Math.abs(pos.y - py) < 1.1) {
        if (onPlayerHit) onPlayerHit(p.damage);
        this.burst(p);
        continue;
      }

      // world occlusion (approximate box height)
      for (const c of this.world.colliders) {
        if (pos.x > c.minX && pos.x < c.maxX && pos.z > c.minZ && pos.z < c.maxZ && pos.y < 3.6) {
          this.burst(p);
          break;
        }
      }
    }
  }

  burst(p) {
    p.active = false;
    p.mesh.visible = false;
    const color = p.mesh.material.color.getHex();
    this.fx.spawn(p.mesh.position, { count: 6, speed: 2.5, color, size: 3, life: 0.3, gravity: 4 });
    this.fx.impact(p.mesh.position, new THREE.Vector3(0, 1, 0), color);
  }

  clear() {
    for (const p of this.list) {
      p.active = false;
      p.mesh.visible = false;
    }
  }
}
