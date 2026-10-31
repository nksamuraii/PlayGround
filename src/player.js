import * as THREE from 'three';
import { BAY } from './world.js';

const EYE = 1.68;
const RADIUS = 0.42;

export class Player {
  constructor({ camera, world, fx, audio, hooks }) {
    this.camera = camera;
    this.world = world;
    this.fx = fx;
    this.audio = audio;
    this.hooks = hooks;

    this.position = new THREE.Vector3(0, 0, 10.5);
    this.velocity = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.onGround = true;
    this.radius = RADIUS;

    this.maxHealth = 100;
    this.health = 100;
    this.alive = true;
    this.damageTimer = 0;
    this.invuln = 0;

    this.magSize = 30;
    this.ammo = 30;
    this.reserve = Infinity;
    this.fireRate = 620 / 60;
    this.fireCooldown = 0;
    this.reloading = 0;
    this.reloadTime = 1.55;
    this.reloadQueued = false;
    this.bloom = 0;
    this.ads = false;
    this.sprint = false;
    this.bobTime = 0;
    this.recoilRecover = 0;
    this.shake = 0;
    this.land = 0;
    this.muzzleCooldown = 0;

    this.baseFov = 74;
    this.targetFov = 74;

    this.buildWeapon();
  }

  buildWeapon() {
    const g = new THREE.Group();
    this.gun = g;
    this.camera.add(g);

    const metal = new THREE.MeshStandardMaterial({ color: 0x323c40, metalness: 0.5, roughness: 0.5 });
    const polymer = new THREE.MeshStandardMaterial({ color: 0x1b2123, metalness: 0.2, roughness: 0.8 });
    const accent = new THREE.MeshStandardMaterial({ color: 0x414d52, metalness: 0.45, roughness: 0.5 });
    const glow = new THREE.MeshBasicMaterial({ color: 0xff8a2a });
    const dot = new THREE.MeshBasicMaterial({ color: 0x5bffe0 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.105, 0.36), metal);
    body.position.set(0, 0, -0.05);
    g.add(body);

    const upper = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.045, 0.3), accent);
    upper.position.set(0, 0.072, -0.08);
    g.add(upper);

    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.022, 0.34, 10), metal);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.015, -0.4);
    g.add(barrel);

    const shroud = new THREE.Mesh(new THREE.BoxGeometry(0.058, 0.06, 0.22), polymer);
    shroud.position.set(0, 0.012, -0.29);
    g.add(shroud);

    for (let i = 0; i < 3; i++) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.064, 0.008, 0.03), accent);
      vent.position.set(0, 0.03, -0.24 - i * 0.055);
      g.add(vent);
    }

    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.075, 0.15), polymer);
    stock.position.set(0, -0.012, 0.2);
    g.add(stock);

    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.13, 0.06), polymer);
    grip.position.set(0, -0.1, 0.07);
    grip.rotation.x = -0.24;
    g.add(grip);

    const mag = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.16, 0.075), accent);
    mag.position.set(0, -0.125, -0.045);
    mag.rotation.x = 0.15;
    g.add(mag);

    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.018, 0.24), polymer);
    rail.position.set(0, 0.095, -0.06);
    g.add(rail);

    // holo sight
    const sightFrame = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.07, 0.035), polymer);
    sightFrame.position.set(0, 0.135, -0.06);
    g.add(sightFrame);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.052, 0.05),
      new THREE.MeshBasicMaterial({ color: 0x2a5b58, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
    );
    glass.position.set(0, 0.137, -0.078);
    g.add(glass);
    const reticle = new THREE.Mesh(new THREE.CircleGeometry(0.006, 12), dot);
    reticle.position.set(0, 0.137, -0.079);
    g.add(reticle);

    const stripL = new THREE.Mesh(new THREE.BoxGeometry(0.002, 0.012, 0.16), glow);
    stripL.position.set(-0.039, 0.0, -0.09);
    g.add(stripL);
    const stripR = stripL.clone();
    stripR.position.x = 0.039;
    g.add(stripR);

    // hands
    const glove = new THREE.MeshStandardMaterial({ color: 0x181d1f, metalness: 0.15, roughness: 0.85 });
    const knuckle = new THREE.MeshStandardMaterial({ color: 0xff7a2a, metalness: 0.3, roughness: 0.6 });
    const right = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.09, 0.11), glove);
    right.position.set(0.012, -0.11, 0.06);
    right.rotation.x = -0.3;
    g.add(right);
    const rightPlate = new THREE.Mesh(new THREE.BoxGeometry(0.078, 0.022, 0.045), knuckle);
    rightPlate.position.set(0.012, -0.085, 0.045);
    rightPlate.rotation.x = -0.3;
    g.add(rightPlate);
    const left = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.075, 0.1), glove);
    left.position.set(-0.015, -0.065, -0.27);
    left.rotation.x = -0.15;
    left.rotation.z = 0.2;
    g.add(left);

    g.position.set(0.29, -0.245, -0.46);
    g.rotation.set(0.015, -0.035, 0.006);
    g.scale.setScalar(0.94);
    this.gunHome = g.position.clone();
    this.gunRotHome = g.rotation.clone();
    const gunLight = new THREE.PointLight(0xffd8b0, 6, 3.2, 2);
    gunLight.position.set(0.5, 0.4, 0.25);
    this.camera.add(gunLight);
    this.ammoLight = stripL;
  }

  reset() {
    this.position.set(0, 0, 10.5);
    this.velocity.set(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.health = this.maxHealth;
    this.alive = true;
    this.ammo = this.magSize;
    this.reloading = 0;
    this.reloadQueued = false;
    this.fireCooldown = 0;
    this.bloom = 0;
    this.ads = false;
    this.invuln = 0;
    this.damageTimer = 0;
    this.recoilRecover = 0;
    this.shake = 0;
    this.targetFov = this.baseFov;
    this.gun.visible = true;
    this.gun.position.copy(this.gunHome);
    this.gun.rotation.copy(this.gunRotHome);
  }

  get eyePosition() {
    return new THREE.Vector3(this.position.x, this.position.y + EYE, this.position.z);
  }

  get onLowHealth() {
    return this.health <= 32;
  }

  addLook(dx, dy, sensitivity = 0.0022) {
    this.yaw -= dx * sensitivity;
    this.pitch -= dy * sensitivity;
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.42, 1.42);
  }

  addShake(amount) {
    this.shake = Math.min(1.2, this.shake + amount);
  }

  muzzleWorldPosition() {
    const v = new THREE.Vector3(0, 0.02, -0.52);
    return this.gun.localToWorld(v);
  }

  canFire() {
    return this.alive && !this.reloading && this.fireCooldown <= 0 && this.ammo > 0;
  }

  startReload() {
    if (this.reloading || !this.alive || this.ammo === this.magSize) return;
    this.reloading = this.reloadTime;
    this.reloadQueued = false;
    this.audio.reload();
  }

  fire() {
    if (!this.canFire()) return null;
    this.ammo--;
    this.fireCooldown = 1 / this.fireRate;
    this.bloom = Math.min(0.02, this.bloom + 0.0028);
    this.weaponKick = 1;
    this.muzzleCooldown = 0.05;

    const kick = 0.0026 + Math.random() * 0.0024;
    this.pitch += kick;
    this.yaw += (Math.random() - 0.5) * 0.0022;
    this.recoilRecover += kick * 0.55;

    this.fx.muzzle(this.muzzleWorldPosition());
    this.audio.shot();

    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const dir = this.camera.getWorldDirection(new THREE.Vector3());
    const spread = this.currentSpread;
    dir.x += (Math.random() - 0.5) * spread;
    dir.y += (Math.random() - 0.5) * spread;
    dir.z += (Math.random() - 0.5) * spread;
    dir.normalize();

    if (this.ammo === 0) this.reloadQueued = true;
    return { origin, dir, ads: this.ads };
  }

  get currentSpread() {
    const moving = Math.min(1, this.velocity.length() / 6);
    let spread = 0.0028 + moving * 0.009 + this.bloom;
    if (!this.onGround) spread += 0.018;
    if (this.ads) spread *= 0.3;
    if (this.sprint) spread += 0.01;
    return spread;
  }

  get crosshairSpread() {
    return THREE.MathUtils.clamp(this.currentSpread * 120, 2, 20);
  }

  takeDamage(amount, sourcePos) {
    if (!this.alive || this.invuln > 0) return;
    this.health -= amount;
    this.damageTimer = 0;
    this.invuln = 0.08;
    this.addShake(0.35);
    this.audio.hurt();
    if (this.hooks.onHurt) this.hooks.onHurt(amount, sourcePos);
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
      if (this.hooks.onDeath) this.hooks.onDeath();
    }
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  update(dt, input, t) {
    if (!this.alive) {
      this.updateCamera(dt, t);
      return;
    }

    this.baseFov = this.camera.aspect < 0.9 ? 83 : 74;

    this.invuln = Math.max(0, this.invuln - dt);
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.muzzleCooldown = Math.max(0, this.muzzleCooldown - dt);
    this.damageTimer += dt;
    this.bloom = Math.max(0, this.bloom - dt * 0.05);
    this.shake = Math.max(0, this.shake - dt * 2.2);
    this.land = Math.max(0, this.land - dt * 4);

    if (this.damageTimer > 5 && this.health < this.maxHealth) {
      this.health = Math.min(this.maxHealth, this.health + dt * 7);
    }

    if (input.reload) this.startReload();
    if (this.reloadQueued && this.fireCooldown <= 0) this.startReload();

    if (this.reloading > 0) {
      this.reloading -= dt;
      if (this.reloading <= 0) {
        this.reloading = 0;
        this.ammo = this.magSize;
      }
    }

    // look
    this.addLook(input.lookX || 0, input.lookY || 0, input.touch ? 0.0032 : 0.0022);

    this.ads = !!input.aim && !this.sprint;
    this.sprint = !!input.sprint && (input.forward || 0) > 0.2 && !this.ads;

    const wish = new THREE.Vector3();
    const forward = (input.forward || 0);
    const strafe = (input.strafe || 0);
    wish.x = strafe;
    wish.z = -forward;
    if (wish.lengthSq() > 1) wish.normalize();
    wish.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);

    let speed = this.sprint ? 8.0 : 5.2;
    if (this.ads) speed *= 0.62;
    if (this.reloading > 0) speed *= 0.92;

    const accel = this.onGround ? 55 : 15;
    this.velocity.x += (wish.x * speed - this.velocity.x) * Math.min(1, accel * dt);
    this.velocity.z += (wish.z * speed - this.velocity.z) * Math.min(1, accel * dt);

    if (this.onGround && wish.lengthSq() < 0.01) {
      const friction = Math.max(0, 1 - dt * 11);
      this.velocity.x *= friction;
      this.velocity.z *= friction;
    }

    if (input.jump && this.onGround) {
      this.velocity.y = 5.7;
      this.onGround = false;
    }

    this.velocity.y -= 18 * dt;
    this.position.addScaledVector(this.velocity, dt);

    if (this.position.y <= 0) {
      if (!this.onGround && this.velocity.y < -4) {
        this.land = Math.min(1, -this.velocity.y / 9);
        this.addShake(0.18);
      }
      this.position.y = 0;
      this.velocity.y = 0;
      this.onGround = true;
    }

    this.resolveCollisions();

    // bob
    const planarSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    if (this.onGround) this.bobTime += dt * planarSpeed * 1.55;
    this.moveAmount = Math.min(1, planarSpeed / 5.2);

    // recoil recovery
    const recover = this.recoilRecover * Math.min(1, dt * 8);
    this.pitch -= recover;
    this.recoilRecover -= recover;

    this.targetFov = this.ads ? (this.camera.aspect < 0.9 ? 64 : 56) : this.sprint ? 79 : this.baseFov;
    this.updateCamera(dt, t);
    this.updateWeapon(dt, planarSpeed);
  }

  resolveCollisions() {
    const p = this.position;
    // room bounds
    p.x = THREE.MathUtils.clamp(p.x, -BAY.halfX + 0.7, BAY.halfX - 0.7);
    p.z = THREE.MathUtils.clamp(p.z, BAY.minZ + 0.8, BAY.maxZ - 0.8);

    for (let pass = 0; pass < 2; pass++) {
      for (const c of this.world.colliders) {
        if (c.high && p.y > c.high) continue;
        const minX = c.minX - this.radius;
        const maxX = c.maxX + this.radius;
        const minZ = c.minZ - this.radius;
        const maxZ = c.maxZ + this.radius;
        if (p.x > minX && p.x < maxX && p.z > minZ && p.z < maxZ) {
          const dl = p.x - minX;
          const dr = maxX - p.x;
          const dt = p.z - minZ;
          const db = maxZ - p.z;
          const m = Math.min(dl, dr, dt, db);
          if (m === dl) p.x = minX;
          else if (m === dr) p.x = maxX;
          else if (m === dt) p.z = minZ;
          else p.z = maxZ;
        }
      }
    }
  }

  updateCamera(dt, t) {
    const cam = this.camera;
    const bobAmp = 0.028 * this.moveAmount * (this.sprint ? 1.5 : 1);
    const bobY = Math.sin(this.bobTime * 2) * bobAmp;
    const bobX = Math.cos(this.bobTime) * bobAmp * 0.7;
    const breathe = Math.sin(t * 1.6) * 0.004;

    const shake = this.shake * this.shake;
    const shakeX = (Math.random() - 0.5) * 0.05 * shake;
    const shakeY = (Math.random() - 0.5) * 0.05 * shake;

    cam.position.set(
      this.position.x + bobX + shakeX,
      this.position.y + EYE + bobY + breathe - this.land * 0.11 + shakeY,
      this.position.z
    );
    cam.rotation.order = 'YXZ';
    cam.rotation.y = this.yaw;
    cam.rotation.x = this.pitch + this.land * 0.05 + (Math.random() - 0.5) * 0.02 * shake;
    cam.rotation.z = Math.cos(this.bobTime * 1.1) * 0.006 * this.moveAmount;

    const fov = THREE.MathUtils.lerp(cam.fov, this.targetFov, Math.min(1, dt * 9));
    if (Math.abs(fov - cam.fov) > 0.01) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }
  }

  updateWeapon(dt, planarSpeed) {
    const g = this.gun;
    const t = performance.now() / 1000;
    const portrait = this.camera.aspect < 0.9;
    const baseX = portrait ? 0.05 : 0.29;
    const baseY = portrait ? -0.17 : -0.245;
    const baseZ = portrait ? -0.46 : -0.46;
    const baseYaw = this.ads ? 0 : portrait ? 0.22 : this.gunRotHome.y;
    g.scale.setScalar(portrait ? (this.ads ? 0.55 : 0.62) : 0.94);
    const swayTarget = new THREE.Vector3(
      baseX + Math.cos(this.bobTime) * 0.006 * this.moveAmount,
      baseY + Math.sin(this.bobTime * 2) * 0.007 * this.moveAmount,
      baseZ
    );
    if (this.ads) swayTarget.set(0, portrait ? -0.072 : -0.112, portrait ? -0.55 : -0.4);

    g.position.lerp(swayTarget, Math.min(1, dt * 12));

    // recoil push
    this.weaponKick = Math.max(0, (this.weaponKick || 0) - dt * 10);
    const kick = this.weaponKick;
    g.position.z += kick * 0.055;
    g.position.y += kick * 0.012;
    g.rotation.x = this.gunRotHome.x - kick * 0.07;

    // reload animation
    if (this.reloading > 0) {
      const k = 1 - this.reloading / this.reloadTime;
      const arc = Math.sin(Math.min(1, k * 1.2) * Math.PI);
      g.position.y -= arc * 0.13;
      g.rotation.z += arc * 0.5;
      g.rotation.x += arc * 0.35;
    } else {
      g.rotation.z = this.gunRotHome.z + Math.cos(t * 0.9) * 0.005;
      g.rotation.y = baseYaw + Math.sin(t * 0.6) * 0.004;
    }

    // ammo strip glow
    if (this.ammoLight) {
      this.ammoLight.material.color.setHex(this.ammo <= 6 ? 0xff2f1f : 0xff8a2a);
    }
  }
}
