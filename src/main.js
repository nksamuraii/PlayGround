import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createWorld, BAY, CORE } from './world.js';
import { createFX } from './fx.js';
import { createAudio } from './audio.js';
import { Player } from './player.js';
import { Enemy, ProjectileSystem } from './enemies.js';
import { createUI } from './ui.js';

const canvas = document.getElementById('scene');
const clock = new THREE.Clock();
const WAVES = {
  1: { drone: 7, raider: 0, brute: 0, sub: 'BOARDING PARTY INBOUND' },
  2: { drone: 8, raider: 4, brute: 0, sub: 'ARMED BOARDERS DETECTED' },
  3: { drone: 9, raider: 5, brute: 1, sub: 'HEAVY BREACH UNIT ON DECK' },
  4: { drone: 10, raider: 6, brute: 2, sub: 'MULTIPLE HULL BREACHES' },
  5: { drone: 12, raider: 8, brute: 3, sub: 'FINAL ASSAULT // HOLD THE LINE' },
};

let renderer;
let scene;
let camera;
let world;
let fx;
let audio;
let player;
let ui;
let projectiles;

const enemies = [];
const game = {
  state: 'menu',
  phase: 'idle',
  wave: 0,
  score: 0,
  kills: 0,
  headshots: 0,
  shots: 0,
  hits: 0,
  coreHealth: 120,
  maxCore: 120,
  queue: [],
  spawnTimer: 0,
  spawnInterval: 0.8,
  intermission: 0,
  elapsed: 0,
  active: false,
  best: 0,
};

const keys = {
  forward: 0,
  strafe: 0,
  jump: false,
  sprint: false,
  fire: false,
  aim: false,
  reload: false,
  lookX: 0,
  lookY: 0,
};

let hadLock = false;
let lockFailed = false;
let minimapAcc = 0;

function safeStorage(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function init() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050a0c);
  scene.fog = new THREE.FogExp2(0x0a1418, 0.017);
  scene.userData.enemies = enemies;

  camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.05, 140);
  camera.position.set(6, 3.2, 17);
  scene.add(camera);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.2;
  pmrem.dispose();

  scene.add(new THREE.HemisphereLight(0x7ea3b2, 0x101619, 0.8));
  scene.add(new THREE.AmbientLight(0x33454c, 0.45));

  const warmFill = new THREE.DirectionalLight(0xffb877, 0.85);
  warmFill.position.set(7, 12, 9);
  scene.add(warmFill);
  const coolFill = new THREE.DirectionalLight(0x78b6c8, 0.48);
  coolFill.position.set(-9, 7, -8);
  scene.add(coolFill);

  world = createWorld(scene);
  fx = createFX(scene, renderer);
  audio = createAudio();
  projectiles = new ProjectileSystem({ scene, world, fx, audio });

  ui = createUI({
    onStart: startGame,
    onResume: resumeGame,
    onRestart: startGame,
    onRedeploy: startGame,
    onMenu: goMenu,
    onMute: toggleMute,
  });

  player = new Player({
    camera,
    world,
    fx,
    audio,
    hooks: {
      onHurt: (amount, source) => {
        ui.setHealth(player.health, player.maxHealth);
        ui.damageFrom(source, player.position, player.yaw);
        if (player.health <= 0) {
          // handled by onDeath below
        }
      },
      onDeath: () => loseGame('operator'),
    },
  });
  player.gun.visible = false;

  ui.setHealth(player.health, player.maxHealth);
  ui.setAmmo(player.ammo, false);
  ui.setCore(1, game.coreHealth);
  ui.setMenuHostiles(0);
  ui.showHud(false);
  ui.showTouch(false);

  bindInput();
  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && game.state === 'playing') pauseGame();
  });

  game.best = Number(safeStorage('bulwark-best', 0));
  ui.setBest(game.best);

  if (lockErrorGuard()) {
    requestAnimationFrame(loop);
  }
}

function lockErrorGuard() {
  try {
    return !!renderer;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// ---------------- input ----------------
function bindInput() {
  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        keys.forward = 1;
        break;
      case 'KeyS':
      case 'ArrowDown':
        keys.forward = -1;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        keys.strafe = -1;
        break;
      case 'KeyD':
      case 'ArrowRight':
        keys.strafe = 1;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        keys.sprint = true;
        break;
      case 'Space':
        keys.jump = true;
        e.preventDefault();
        break;
      case 'KeyR':
        keys.reload = true;
        break;
      case 'Escape':
        if (game.state === 'playing') pauseGame();
        else if (game.state === 'paused') resumeGame();
        break;
      case 'KeyM':
        toggleMute();
        break;
    }
  });

  window.addEventListener('keyup', (e) => {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        if (keys.forward > 0) keys.forward = 0;
        break;
      case 'KeyS':
      case 'ArrowDown':
        if (keys.forward < 0) keys.forward = 0;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        if (keys.strafe < 0) keys.strafe = 0;
        break;
      case 'KeyD':
      case 'ArrowRight':
        if (keys.strafe > 0) keys.strafe = 0;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        keys.sprint = false;
        break;
      case 'Space':
        keys.jump = false;
        break;
    }
  });

  window.addEventListener('blur', () => {
    keys.forward = keys.strafe = 0;
    keys.fire = keys.aim = false;
    if (game.state === 'playing') pauseGame();
  });

  canvas.addEventListener('mousedown', (e) => {
    if (game.state !== 'playing') return;
    if (ui.touchMode) return;
    if (!hadLock) requestLock();
    if (e.button === 0) keys.fire = true;
    if (e.button === 2) keys.aim = true;
  });
  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) keys.fire = false;
    if (e.button === 2) keys.aim = false;
  });
  window.addEventListener('contextmenu', (e) => e.preventDefault());

  document.addEventListener('mousemove', (e) => {
    if (game.state !== 'playing') return;
    if (document.pointerLockElement !== canvas) return;
    keys.lookX += e.movementX || 0;
    keys.lookY += e.movementY || 0;
  });

  document.addEventListener('pointerlockchange', () => {
    const locked = document.pointerLockElement === canvas;
    if (locked) {
      hadLock = true;
      lockFailed = false;
      ui.showPointerHint(false);
    } else if (hadLock && game.state === 'playing' && !ui.touchMode) {
      hadLock = false;
      pauseGame();
    }
  });
  document.addEventListener('pointerlockerror', () => {
    lockFailed = true;
    if (game.state === 'playing' && !ui.touchMode) ui.showPointerHint(true);
  });

  canvas.addEventListener('click', () => {
    if (game.state === 'playing' && !ui.touchMode && !hadLock) requestLock();
  });
}

function requestLock() {
  if (ui.touchMode) return;
  try {
    const promise = canvas.requestPointerLock?.();
    if (promise && promise.catch) promise.catch(() => {});
  } catch {
    /* pointer lock can fail in embeds */
  }
}

function gatherInput() {
  const t = ui.input;
  let forward = keys.forward + t.moveY;
  let strafe = keys.strafe + t.moveX;
  const len = Math.hypot(forward, strafe);
  if (len > 1) {
    forward /= len;
    strafe /= len;
  }
  return {
    forward,
    strafe,
    jump: keys.jump || t.jump,
    sprint: keys.sprint,
    fire: keys.fire || t.fire,
    aim: keys.aim || t.aim,
    reload: keys.reload || t.reload,
    lookX: keys.lookX + t.lookX,
    lookY: keys.lookY + t.lookY,
    touch: ui.touchMode,
  };
}

function consumeInput() {
  keys.lookX = 0;
  keys.lookY = 0;
  keys.reload = false;
  ui.input.lookX = 0;
  ui.input.lookY = 0;
  ui.input.reload = false;
  ui.input.jump = false;
}

// ---------------- game flow ----------------
function startGame() {
  audio.init();
  clearRun();
  ui.showMenu(false);
  ui.hideEnd();
  ui.showPause(false);
  ui.showHud(true);
  ui.showTouch(true);
  ui.showPointerHint(false);
  ui.el.feed.innerHTML = '';
  player.gun.visible = true;
  game.state = 'playing';
  game.phase = 'active';
  requestLock();
  beginWave(1, 0.05);
}

function clearRun() {
  for (const e of [...enemies]) e.dispose();
  enemies.length = 0;
  projectiles.clear();
  player.reset();
  keys.forward = keys.strafe = 0;
  keys.fire = keys.aim = false;
  keys.reload = false;
  ui.resetTouch();
  ui.hideBanner();

  game.wave = 0;
  game.score = 0;
  game.kills = 0;
  game.headshots = 0;
  game.shots = 0;
  game.hits = 0;
  game.coreHealth = game.maxCore;
  game.queue = [];
  game.waveSpawned = 0;
  game.spawnTimer = 0;
  game.intermission = 0;
  game.elapsed = 0;
  game.phase = 'active';
  world.setCoreHealth(1);
  ui.setWave(0);
  ui.setScore(0);
  ui.setCore(1, game.coreHealth);
  ui.setHealth(player.health, player.maxHealth);
  ui.setAmmo(player.ammo, false);
  ui.setThreat(0);
  ui.setMenuHostiles(0);
}

function beginWave(n, delay = 1.4) {
  game.wave = n;
  game.phase = 'active';
  game.waveSpawned = 0;
  game.queue = buildWaveQueue(n);
  game.spawnInterval = Math.max(0.34, 0.78 - n * 0.07);
  game.spawnTimer = delay;
  ui.setWave(n);
  ui.setObjective('DEFEND THE REACTOR CORE');
  const def = WAVES[n];
  ui.banner(`WAVE ${String(n).padStart(2, '0')}`, def.sub, {
    danger: n >= 4,
    duration: n === 1 ? 4200 : 2500,
  });
  ui.setThreat(game.queue.length);
  audio.wave();
}

function buildWaveQueue(n) {
  const def = WAVES[n];
  const pool = [];
  for (let i = 0; i < def.drone; i++) pool.push('drone');
  for (let i = 0; i < def.raider; i++) pool.push('raider');
  for (let i = 0; i < def.brute; i++) pool.push('brute');
  // Fisher-Yates, then keep heavies out of the opening beats.
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  for (let i = 0; i < 3; i++) {
    if (pool[i] === 'brute') {
      const swap = pool.findIndex((t, idx) => idx > 4 && t !== 'brute');
      if (swap > 0) [pool[i], pool[swap]] = [pool[swap], pool[i]];
    }
  }
  return pool;
}

function spawnEnemy(type) {
  const forced = game.waveSpawned === 0 ? 0 : game.waveSpawned === 1 ? 1 : Math.floor(Math.random() * world.spawns.length);
  const spawn = world.spawns[forced];
  const advance = game.waveSpawned < 2;
  const anchor = advance ? spawn.lane[Math.min(1, spawn.lane.length - 1)] : spawn.position;
  const pos = anchor.clone();
  pos.x += (Math.random() - 0.5) * 1.1;
  pos.z += (Math.random() - 0.5) * 1.1;
  game.waveSpawned++;
  const lane = spawn.lane.map((p) => p.clone());
  // small jitter on lane to avoid single-file conga lines
  lane.forEach((p) => {
    p.x += (Math.random() - 0.5) * 1.4;
    p.z += (Math.random() - 0.5) * 1.4;
  });

  const enemy = new Enemy({
    type,
    position: pos,
    lane,
    scene,
    fx,
    world,
    audio,
    wave: game.wave,
    callbacks: {
      onDeath: handleEnemyDeath,
      onCoreDamage: handleCoreDamage,
      onMelee: () => {},
    },
  });
  enemies.push(enemy);

  const burstPos = pos.clone().setY(1.6);
  fx.spawn(burstPos, { count: 10, speed: 5, color: 0xff3a1c, size: 3.4, life: 0.55, gravity: 2 });
  fx.shockwave(pos.clone().setY(0.06), 0xff3a1c);
  audio.spawn();
}

function updateWaves(dt) {
  if (game.phase === 'intermission') {
    game.intermission -= dt;
    const secs = Math.max(0, Math.ceil(game.intermission));
    ui.setObjective(`REACTOR REPAIRS // NEXT WAVE IN ${secs}`);
    if (game.intermission <= 0) {
      beginWave(game.wave + 1, 0.2);
    }
    return;
  }

  if (game.phase !== 'active') return;

  if (game.queue.length > 0) {
    game.spawnTimer -= dt;
    if (game.spawnTimer <= 0) {
      spawnEnemy(game.queue.shift());
      game.spawnTimer = game.spawnInterval * (0.7 + Math.random() * 0.7);
    }
  }

  const remaining = game.queue.length + enemies.filter((e) => e.alive).length;
  ui.setThreat(remaining);

  if (remaining === 0 && game.phase === 'active') {
    waveCleared();
  }
}

function waveCleared() {
  const bonus = 1000 * game.wave;
  game.score += bonus;
  ui.setScore(game.score);
  game.coreHealth = Math.min(game.maxCore, game.coreHealth + 12);
  world.setCoreHealth(game.coreHealth / game.maxCore);
  ui.setCore(game.coreHealth / game.maxCore, game.coreHealth);
  player.heal(25);
  ui.setHealth(player.health, player.maxHealth);
  audio.clear();

  if (game.wave >= 5) {
    winGame();
    return;
  }

  game.phase = 'intermission';
  game.intermission = 5.0;
  game.spawnTimer = 0;
  ui.banner('WAVE CLEARED', `+${bonus} PTS // REACTOR PATCHED`, { duration: 2400 });
  ui.toast('AMMO RESUPPLIED — CORE REPAIRED +12');
}

function handleEnemyDeath(enemy) {
  game.kills++;
  const head = enemy.headshotKill;
  const gain = enemy.def.score + (head ? 100 : 0);
  game.score += gain;
  ui.setScore(game.score);
  ui.hitmarker(true);
  ui.feed(
    `<b>${enemy.def.name}</b> ${head ? 'HEADSHOT' : 'ELIMINATED'} <span class="dim">+${gain}</span>`,
    head ? 'head' : ''
  );
  enemy.headshotKill = false;
}

function handleCoreDamage(enemy, damage) {
  if (game.state !== 'playing' || game.phase !== 'active') return;
  game.coreHealth -= damage;
  const ratio = Math.max(0, game.coreHealth / game.maxCore);
  world.setCoreHealth(ratio);
  ui.setCore(ratio, game.coreHealth);
  ui.feed(`CORE HIT <span class="dim">-${damage}</span>`, 'core');
  audio.coreHit();
  player.addShake(0.22);
  if (game.coreHealth <= 0) loseGame('core');
}

function winGame() {
  game.state = 'over';
  game.phase = 'won';
  ui.setThreat(0);
  ui.showTouch(false);
  audio.win();
  saveBest();
  ui.banner('BAY HELD', 'ALL BOARDING WAVES REPELLED', { duration: 2600 });
  setTimeout(() => {
    ui.showEnd(true, stats());
    ui.showHud(false);
  }, 650);
  exitLock();
}

function loseGame(reason) {
  if (game.state === 'over') return;
  game.state = 'over';
  game.phase = 'lost';
  ui.showTouch(false);
  audio.lose();
  saveBest();
  const copy = reason === 'core' ? 'The reactor went critical.' : 'Operator down.';
  ui.banner(reason === 'core' ? 'CORE LOST' : 'OPERATOR DOWN', copy, { danger: true, duration: 2600 });
  setTimeout(() => {
    ui.showEnd(false, stats());
    ui.showHud(false);
  }, 900);
  exitLock();
}

function stats() {
  return {
    score: game.score,
    kills: game.kills,
    headshots: game.headshots,
    accuracy: game.shots ? Math.round((game.hits / game.shots) * 100) : 0,
    waves: game.wave,
    time: formatTime(game.elapsed),
  };
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
}

function saveBest() {
  if (game.score > Number(safeStorage('bulwark-best', 0))) {
    try {
      localStorage.setItem('bulwark-best', String(game.score));
    } catch {
      /* ignore */
    }
    ui.setBest(game.score);
  }
}

function pauseGame() {
  if (game.state !== 'playing') return;
  game.state = 'paused';
  keys.fire = keys.aim = false;
  ui.input.fire = ui.input.aim = false;
  ui.showPause(true);
  ui.showPointerHint(false);
  exitLock();
}

function resumeGame() {
  if (game.state !== 'paused') return;
  game.state = 'playing';
  ui.showPause(false);
  requestLock();
}

function goMenu() {
  game.state = 'menu';
  game.phase = 'idle';
  clearRun();
  ui.hideEnd();
  ui.showPause(false);
  ui.showHud(false);
  ui.showTouch(false);
  ui.showMenu(true);
  ui.setMenuHostiles(0);
  ui.showPointerHint(false);
  player.gun.visible = false;
  exitLock();
  camera.fov = 74;
  camera.updateProjectionMatrix();
}

function exitLock() {
  hadLock = false;
  if (document.pointerLockElement === canvas) document.exitPointerLock?.();
}

function toggleMute() {
  const next = !audio.muted;
  audio.setMuted(next);
  ui.setMuted(next);
}

// ---------------- combat ----------------
const raycaster = new THREE.Raycaster();

function raySphere(origin, dir, center, radius) {
  const ox = center.x - origin.x;
  const oy = center.y - origin.y;
  const oz = center.z - origin.z;
  const t = ox * dir.x + oy * dir.y + oz * dir.z;
  if (t < 0) return null;
  const d2 = ox * ox + oy * oy + oz * oz - t * t;
  const r2 = radius * radius;
  if (d2 > r2) return null;
  return t - Math.sqrt(r2 - d2);
}

function wallDistance(origin, dir) {
  raycaster.set(origin, dir);
  raycaster.far = 80;
  const hits = raycaster.intersectObjects(world.solids, false);
  return hits.length ? hits[0] : null;
}

function trace(origin, dir) {
  const wall = wallDistance(origin, dir);
  const wallT = wall ? wall.distance : Infinity;
  let best = null;
  for (const enemy of enemies) {
    if (!enemy.alive || enemy.state !== 'active') continue;
    const bodyR = enemy.radius * (enemy.type === 'drone' ? 1.0 : 0.95);
    const tb = raySphere(origin, dir, enemy.bodyCenter, bodyR);
    const th = raySphere(origin, dir, enemy.headCenter, enemy.type === 'brute' ? 0.46 : 0.34);
    if (tb !== null && tb < wallT && (!best || tb < best.t)) {
      best = { enemy, t: tb, head: false, point: origin.clone().addScaledVector(dir, tb) };
    }
    if (th !== null && th < wallT && (!best || th < best.t)) {
      best = { enemy, t: th, head: true, point: origin.clone().addScaledVector(dir, th) };
    }
  }
  return { hit: best, wall, wallT };
}

function handleShot(shot) {
  game.shots++;
  const origin = shot.origin;
  const dir = shot.dir;

  let result = trace(origin, dir);

  // light touch aim assist for touch screens
  if (!result.hit && ui.touchMode) {
    let bestEnemy = null;
    let bestAngle = 0.05;
    for (const enemy of enemies) {
      if (!enemy.alive || enemy.state !== 'active') continue;
      const to = enemy.bodyCenter.clone().sub(origin);
      const dist = to.length();
      if (dist > 30) continue;
      to.normalize();
      const angle = Math.acos(THREE.MathUtils.clamp(to.dot(dir), -1, 1));
      if (angle < bestAngle) {
        const blocked = wallDistance(origin, to);
        if (!blocked || blocked.distance > dist) {
          bestAngle = angle;
          bestEnemy = enemy;
        }
      }
    }
    if (bestEnemy) {
      const to = bestEnemy.bodyCenter.clone().sub(origin).normalize();
      result = trace(origin, to);
      if (!result.hit) {
        result = {
          hit: { enemy: bestEnemy, head: false, t: 0, point: bestEnemy.bodyCenter.clone() },
          wall: result.wall,
          wallT: result.wallT,
        };
      }
    }
  }

  const muzzle = player.muzzleWorldPosition();
  let endPoint;
  let hitEnemy = false;

  if (result.hit) {
    const { enemy, head, point } = result.hit;
    const damage = head ? 62 : 26;
    enemy.headshotKill = head;
    const killed = enemy.takeDamage(damage, head, dir);
    game.hits++;
    hitEnemy = true;
    endPoint = point;
    fx.impact(point, dir.clone().negate(), head ? 0xffd166 : 0xff7a3a);
    ui.hitmarker(killed);
    if (head) game.headshots++;
    ui.setScore(game.score);
  } else if (result.wall) {
    endPoint = result.wall.point;
    let normal = dir.clone().negate();
    if (result.wall.face) {
      normal = result.wall.face.normal.clone().transformDirection(result.wall.object.matrixWorld);
    }
    fx.impact(endPoint, normal, 0xffc070);
  } else {
    endPoint = origin.clone().addScaledVector(dir, 60);
  }

  fx.tracer(muzzle, endPoint, hitEnemy ? 0xffd9a0 : 0xffb066, 0.055);

  // tiny tracer from muzzle to camera ray; no-op if same point
  ui.setSpread(player.crosshairSpread, !!result.hit, player.ads);
}

// ---------------- loop ----------------
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, clock.getDelta());
  const t = clock.elapsedTime;

  if (game.state === 'menu') {
    updateMenuCamera(t);
    world.update(dt, t);
    fx.update(dt);
    scene.userData.cameraQuat = camera.quaternion;
    renderer.render(scene, camera);
    return;
  }

  if (game.state === 'playing') {
    game.elapsed += dt;
    const input = gatherInput();
    player.update(dt, input, t);

    if (input.fire) {
      const shot = player.fire();
      if (shot) handleShot(shot);
      else if (player.ammo === 0 && !player.reloading) player.startReload();
      else if (player.ammo === 0) audio.empty();
    }
    consumeInput();

    updateWaves(dt);

    for (let i = enemies.length - 1; i >= 0; i--) {
      if (enemies[i]) enemies[i].update(dt, t, player, projectiles);
    }

    projectiles.update(
      dt,
      player,
      (damage) => {
        if (player.alive) player.takeDamage(damage, player.position.clone());
      },
      (damage) => {
        handleCoreDamage(null, damage);
      }
    );

    // HUD updates
    ui.setHealth(player.health, player.maxHealth);
    ui.setAmmo(player.ammo, player.reloading > 0 && player.ammo < player.magSize);
    const centerDir = camera.getWorldDirection(new THREE.Vector3());
    const centerOrigin = camera.getWorldPosition(new THREE.Vector3());
    const centerTrace = trace(centerOrigin, centerDir);
    ui.setSpread(player.crosshairSpread, !!centerTrace.hit, player.ads);
    minimapAcc += dt;
    if (minimapAcc > 0.08) {
      minimapAcc = 0;
      ui.drawMinimap({
        player: player.position,
        yaw: player.yaw,
        enemies,
        colliders: world.colliders,
        spawns: world.spawns,
        coreRatio: game.coreHealth / game.maxCore,
      });
    }
  } else {
    // paused / over: keep the world alive but frozen in place
    player.update(dt * 0, gatherInput(), t);
    consumeInput();
  }

  world.update(dt, t);
  fx.update(dt);
  scene.userData.cameraQuat = camera.quaternion;
  renderer.render(scene, camera);
}

function updateMenuCamera(t) {
  const drift = Math.sin(t * 0.11);
  camera.position.set(4.9 + drift * 1.0, 2.55 + Math.sin(t * 0.07) * 0.18, 4.2 - drift * 0.7);
  camera.lookAt(-0.4 + drift * 0.3, 2.5, -13.6);
  if (camera.fov !== 70) {
    camera.fov = 70;
    camera.updateProjectionMatrix();
  }
}

function onResize() {
  if (!renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const pr = Math.min(window.devicePixelRatio || 1, 1.75);
  renderer.setPixelRatio(pr);
  fx.setPixelRatio(pr);
}

window.addEventListener('error', (event) => {
  const box = document.getElementById('boot-error');
  if (!box || game.state !== 'menu') return;
  box.classList.remove('hidden');
  box.textContent = `SYSTEM FAULT — ${event.message || 'unable to start renderer'}`;
});

try {
  init();
} catch (error) {
  console.error(error);
  const box = document.getElementById('boot-error');
  if (box) {
    box.classList.remove('hidden');
    box.textContent = 'SYSTEM FAULT — WebGL could not start on this device.';
  }
}

if (new URLSearchParams(location.search).has('debug')) {
  window.__bulwark = {
    game,
    enemies,
    player,
    world,
    camera,
    scene,
    ui,
    startGame,
    beginWave,
    spawnEnemy,
    handleShot,
    handleCoreDamage,
    winGame,
    loseGame,
    stats,
    THREE,
  };
}
