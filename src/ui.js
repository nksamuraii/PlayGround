import { BAY, CORE } from './world.js';

const $ = (id) => document.getElementById(id);

export function createUI(handlers = {}) {
  const el = {
    menu: $('menu'),
    hud: $('hud'),
    pause: $('pause'),
    end: $('end'),
    start: $('start-btn'),
    resume: $('resume-btn'),
    restart: $('restart-btn'),
    redeploy: $('redeploy-btn'),
    menuBtn: $('menu-btn'),
    mute: $('mute-btn'),
    waveNum: $('wave-num'),
    score: $('score'),
    coreFill: $('core-fill'),
    coreNum: $('core-num'),
    objective: $('objective-text'),
    healthFill: $('health-fill'),
    healthNum: $('health-num'),
    healthState: $('health-state'),
    ammoMag: $('ammo-mag'),
    ammoRes: $('ammo-res'),
    ammoPips: $('ammo-pips'),
    reloadHint: $('reload-hint'),
    weaponName: $('weapon-name'),
    feed: $('killfeed'),
    threat: $('threat'),
    crosshair: $('crosshair'),
    hitmarker: $('hitmarker'),
    damage: $('damage-indicator'),
    banner: $('banner'),
    bannerTitle: $('banner-title'),
    bannerSub: $('banner-sub'),
    toast: $('toast'),
    pointerHint: $('pointer-hint'),
    minimap: $('minimap'),
    touch: $('touch'),
    stickZone: $('stick-zone'),
    stickKnob: $('stick-knob'),
    fire: $('btn-fire'),
    aim: $('btn-aim'),
    reload: $('btn-reload'),
    jump: $('btn-jump'),
    best: $('best-score'),
    danger: $('danger-flash'),
    rotate: $('rotate-hint'),
    endEyebrow: $('end-eyebrow'),
    endTitle: $('end-title'),
    endCopy: $('end-copy'),
    endStats: $('end-stats'),
    menuHostiles: $('menu-hostiles'),
  };

  const ctx = el.minimap.getContext('2d');
  const touchMode = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || window.innerWidth < 760;
  document.body.classList.toggle('touch-mode', touchMode);

  let bannerTimer = null;
  let toastTimer = null;
  let damageTimer = null;
  let lastAmmo = -1;
  const pips = [];
  for (let i = 0; i < 30; i++) {
    const pip = document.createElement('i');
    el.ammoPips.appendChild(pip);
    pips.push(pip);
  }

  const best = Number(localStorage.getItem('bulwark-best') || 0);
  el.best.textContent = String(best).padStart(6, '0');

  el.start.addEventListener('click', () => handlers.onStart?.());
  el.resume.addEventListener('click', () => handlers.onResume?.());
  el.restart.addEventListener('click', () => handlers.onRestart?.());
  el.redeploy.addEventListener('click', () => handlers.onRedeploy?.());
  el.menuBtn.addEventListener('click', () => handlers.onMenu?.());
  el.mute.addEventListener('click', () => handlers.onMute?.());

  function showMenu(show) {
    el.menu.classList.toggle('hidden', !show);
  }

  function showHud(show) {
    el.hud.classList.toggle('hidden', !show);
  }

  function showPause(show) {
    el.pause.classList.toggle('hidden', !show);
  }

  function showTouch(show) {
    el.touch.classList.toggle('hidden', !show || !touchMode);
  }

  function showPointerHint(show) {
    el.pointerHint.classList.toggle('hidden', !show);
  }

  function setWave(n) {
    el.waveNum.textContent = String(n).padStart(2, '0');
  }

  function setScore(n) {
    el.score.textContent = String(Math.floor(n)).padStart(6, '0');
  }

  function setCore(ratio, value) {
    el.coreFill.style.width = `${Math.max(0, ratio) * 100}%`;
    el.coreFill.classList.toggle('warn', ratio <= 0.6 && ratio > 0.3);
    el.coreFill.classList.toggle('critical', ratio <= 0.3);
    el.coreNum.textContent = String(Math.max(0, Math.ceil(value)));
  }

  function setHealth(value, max) {
    const ratio = Math.max(0, value / max);
    el.healthFill.style.width = `${ratio * 100}%`;
    el.healthFill.classList.toggle('low', ratio <= 0.32);
    el.healthNum.textContent = String(Math.max(0, Math.ceil(value)));
    el.healthState.textContent = ratio <= 0.32 ? 'CRITICAL' : ratio <= 0.65 ? 'WOUNDED' : 'STABLE';
  }

  function setAmmo(mag, reloading) {
    el.ammoMag.textContent = String(mag).padStart(2, '0');
    el.ammoMag.classList.toggle('low', mag <= 6);
    el.ammoRes.textContent = '\u221E';
    el.reloadHint.classList.toggle('hidden', !reloading);
    if (mag !== lastAmmo) {
      pips.forEach((p, i) => p.classList.toggle('spent', i >= mag));
      lastAmmo = mag;
    }
  }

  function setObjective(text) {
    el.objective.textContent = text;
  }

  function setThreat(count) {
    if (count <= 0) {
      el.threat.textContent = 'CLEAR';
      el.threat.classList.remove('hot');
    } else {
      el.threat.textContent = `${String(count).padStart(2, '0')} HOSTILE${count > 1 ? 'S' : ''}`;
      el.threat.classList.add('hot');
    }
  }

  function banner(title, sub, { danger = false, duration = 2400 } = {}) {
    clearTimeout(bannerTimer);
    el.bannerTitle.textContent = title;
    el.bannerSub.textContent = sub;
    el.banner.classList.toggle('danger', danger);
    el.banner.classList.add('show');
    bannerTimer = setTimeout(() => el.banner.classList.remove('show'), duration);
  }

  function hideBanner() {
    clearTimeout(bannerTimer);
    el.banner.classList.remove('show');
  }

  function toast(text, duration = 1700) {
    clearTimeout(toastTimer);
    el.toast.textContent = text;
    el.toast.classList.add('show');
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), duration);
  }

  function feed(html, cls = '') {
    const item = document.createElement('div');
    item.className = `feed-item ${cls}`;
    item.innerHTML = html;
    el.feed.appendChild(item);
    while (el.feed.children.length > 4) el.feed.firstChild.remove();
    setTimeout(() => item.remove(), 4200);
  }

  function hitmarker(kill = false) {
    el.hitmarker.classList.remove('show', 'kill');
    void el.hitmarker.offsetWidth;
    el.hitmarker.classList.toggle('kill', kill);
    el.hitmarker.classList.add('show');
  }

  function damageFrom(source, player, yaw) {
    const dx = source.x - player.x;
    const dz = source.z - player.z;
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    const rx = Math.cos(yaw);
    const rz = -Math.sin(yaw);
    const fwd = dx * fx + dz * fz;
    const right = dx * rx + dz * rz;
    const angle = (Math.atan2(right, fwd) * 180) / Math.PI;
    el.damage.style.transform = `rotate(${angle}deg)`;
    el.damage.classList.add('show');
    clearTimeout(damageTimer);
    damageTimer = setTimeout(() => el.damage.classList.remove('show'), 520);
    el.danger.classList.add('hit');
    setTimeout(() => el.danger.classList.remove('hit'), 90);
  }

  function setSpread(px, onEnemy, ads) {
    el.crosshair.style.setProperty('--spread', `${px.toFixed(1)}px`);
    el.crosshair.classList.toggle('enemy', !!onEnemy);
    el.crosshair.style.opacity = ads ? '0.25' : '0.92';
  }

  function drawMinimap(state) {
    const W = 220;
    const H = 220;
    const pad = 16;
    const scale = Math.min((W - pad * 2) / (BAY.halfX * 2), (H - pad * 2) / (BAY.maxZ - BAY.minZ));
    const cx = W / 2;
    const cz = H / 2;
    const mx = (x) => cx + x * scale;
    const mz = (z) => cz + z * scale;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#04090b';
    ctx.fillRect(0, 0, W, H);

    // grid
    ctx.strokeStyle = 'rgba(90,140,150,0.11)';
    ctx.lineWidth = 1;
    for (let x = -15; x <= 15; x += 5) {
      ctx.beginPath();
      ctx.moveTo(mx(x), mz(BAY.minZ));
      ctx.lineTo(mx(x), mz(BAY.maxZ));
      ctx.stroke();
    }
    for (let z = -20; z <= 20; z += 5) {
      ctx.beginPath();
      ctx.moveTo(mx(-BAY.halfX), mz(z));
      ctx.lineTo(mx(BAY.halfX), mz(z));
      ctx.stroke();
    }

    // room
    ctx.strokeStyle = 'rgba(130,190,200,0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(mx(-BAY.halfX), mz(BAY.minZ), BAY.halfX * 2 * scale, (BAY.maxZ - BAY.minZ) * scale);

    // catwalks
    ctx.fillStyle = 'rgba(90,130,140,0.18)';
    ctx.fillRect(mx(-BAY.halfX + 1.1), mz(BAY.minZ), 2.4 * scale, (BAY.maxZ - BAY.minZ) * scale);
    ctx.fillRect(mx(BAY.halfX - 3.5), mz(BAY.minZ), 2.4 * scale, (BAY.maxZ - BAY.minZ) * scale);

    // crates
    for (const c of state.colliders) {
      if (c.tag === 'core') continue;
      ctx.fillStyle = c.tag === 'crate' ? 'rgba(160,175,170,0.22)' : 'rgba(120,140,145,0.15)';
      ctx.strokeStyle = 'rgba(160,200,205,0.3)';
      ctx.lineWidth = 1;
      ctx.fillRect(mx(c.minX), mz(c.minZ), (c.maxX - c.minX) * scale, (c.maxZ - c.minZ) * scale);
      ctx.strokeRect(mx(c.minX), mz(c.minZ), (c.maxX - c.minX) * scale, (c.maxZ - c.minZ) * scale);
    }

    // core
    const coreRatio = state.coreRatio;
    ctx.beginPath();
    ctx.arc(mx(CORE.x), mz(CORE.z), Math.max(5, CORE.radius * scale), 0, Math.PI * 2);
    ctx.fillStyle = coreRatio > 0.3 ? 'rgba(71,240,207,0.22)' : 'rgba(255,59,48,0.3)';
    ctx.fill();
    ctx.strokeStyle = coreRatio > 0.3 ? 'rgba(71,240,207,0.95)' : 'rgba(255,59,48,1)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = coreRatio > 0.3 ? '#47f0cf' : '#ff3b30';
    ctx.font = 'bold 8px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('CORE', mx(CORE.x), mz(CORE.z) + 2.5);

    // spawn gates
    for (const s of state.spawns) {
      ctx.save();
      ctx.translate(mx(s.position.x), mz(s.position.z));
      ctx.rotate(Math.atan2(CORE.z - s.position.z, CORE.x - s.position.x) + Math.PI / 2);
      ctx.fillStyle = 'rgba(255,59,48,0.55)';
      ctx.beginPath();
      ctx.moveTo(0, -4);
      ctx.lineTo(3, 3);
      ctx.lineTo(-3, 3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // player view cone
    const p = state.player;
    const yaw = state.yaw;
    const facing = Math.atan2(-Math.cos(yaw), -Math.sin(yaw));
    ctx.save();
    ctx.translate(mx(p.x), mz(p.z));
    ctx.rotate(facing + Math.PI / 2);
    const grad = ctx.createLinearGradient(0, 0, 0, -34);
    grad.addColorStop(0, 'rgba(121,242,154,0.28)');
    grad.addColorStop(1, 'rgba(121,242,154,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(19, -34);
    ctx.lineTo(-19, -34);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // enemies
    for (const e of state.enemies) {
      if (!e.alive) continue;
      const x = mx(e.group.position.x);
      const z = mz(e.group.position.z);
      const r = e.type === 'brute' ? 3.6 : e.type === 'raider' ? 2.6 : 2;
      ctx.beginPath();
      ctx.arc(x, z, r, 0, Math.PI * 2);
      ctx.fillStyle = e.type === 'brute' ? '#ff3b30' : e.type === 'raider' ? '#ff8a3a' : '#ffb347';
      ctx.fill();
    }

    // player
    ctx.save();
    ctx.translate(mx(p.x), mz(p.z));
    ctx.rotate(facing + Math.PI / 2);
    ctx.fillStyle = '#d9ffed';
    ctx.beginPath();
    ctx.moveTo(0, -5);
    ctx.lineTo(4, 4);
    ctx.lineTo(0, 2);
    ctx.lineTo(-4, 4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // compass
    ctx.fillStyle = 'rgba(160,200,210,0.5)';
    ctx.font = '8px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('N', 6, 12);
  }

  function showEnd(win, stats) {
    el.end.classList.toggle('win', win);
    el.end.classList.remove('hidden');
    el.endEyebrow.textContent = win ? 'TRANSMISSION RESTORED' : 'TRANSMISSION ENDED';
    el.endTitle.textContent = win ? 'BAY HELD' : 'CORE LOST';
    el.endCopy.textContent = win
      ? 'Transport 09 is still breathing. Command is calling it a miracle. You call it a Tuesday.'
      : 'The reactor is dark. Boarders own the cargo bay, and the manifest is now theirs.';
    el.endStats.innerHTML = [
      ['SCORE', String(stats.score).padStart(6, '0')],
      ['KILLS', stats.kills],
      ['ACCURACY', `${stats.accuracy}%`],
      ['WAVES', `${stats.waves}/5`],
      ['HEADSHOTS', stats.headshots],
      ['TIME', stats.time],
    ]
      .map(([label, value]) => `<div class="stat"><b>${value}</b><span>${label}</span></div>`)
      .join('');
  }

  function hideEnd() {
    el.end.classList.add('hidden');
  }

  function setMuted(muted) {
    el.mute.textContent = `SOUND: ${muted ? 'OFF' : 'ON'}`;
  }

  function setBest(score) {
    if (score > Number(localStorage.getItem('bulwark-best') || 0)) {
      localStorage.setItem('bulwark-best', String(score));
      el.best.textContent = String(Math.floor(score)).padStart(6, '0');
    }
  }

  function setMenuHostiles(count) {
    el.menuHostiles.textContent = count > 0 ? `${String(count).padStart(2, '0')} BOARDERS` : 'UNKNOWN';
  }

  // ---------- touch controls ----------
  const input = { moveX: 0, moveY: 0, lookX: 0, lookY: 0, fire: false, aim: false, jump: false, reload: false };
  let stickId = null;
  let stickOrigin = null;
  let lookId = null;
  let lookLast = null;
  const stickCenter = { x: 0, y: 0 };

  function setStickFromEvent(e) {
    const max = 46;
    let dx = e.clientX - stickCenter.x;
    let dy = e.clientY - stickCenter.y;
    const len = Math.hypot(dx, dy) || 1;
    const clamped = Math.min(len, max);
    dx = (dx / len) * clamped;
    dy = (dy / len) * clamped;
    el.stickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
    input.moveX = dx / max;
    input.moveY = -dy / max;
  }

  function resetStick() {
    stickId = null;
    input.moveX = 0;
    input.moveY = 0;
    el.stickKnob.style.transform = 'translate(0px, 0px)';
  }

  el.stickZone.addEventListener('pointerdown', (e) => {
    if (stickId !== null) return;
    stickId = e.pointerId;
    el.stickZone.setPointerCapture(e.pointerId);
    const rect = el.stickZone.getBoundingClientRect();
    stickCenter.x = rect.left + rect.width / 2;
    stickCenter.y = rect.top + rect.height / 2;
    setStickFromEvent(e);
    e.preventDefault();
  });
  el.stickZone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== stickId) return;
    setStickFromEvent(e);
    e.preventDefault();
  });
  const endStick = (e) => {
    if (e.pointerId === stickId) resetStick();
  };
  el.stickZone.addEventListener('pointerup', endStick);
  el.stickZone.addEventListener('pointercancel', endStick);

  function bindHold(button, key) {
    button.addEventListener('pointerdown', (e) => {
      button.classList.add('active');
      button.setPointerCapture(e.pointerId);
      input[key] = true;
      e.preventDefault();
    });
    const release = () => {
      button.classList.remove('active');
      if (key !== 'jump') input[key] = false;
    };
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('pointerleave', () => {
      if (key !== 'jump') release();
    });
  }
  bindHold(el.fire, 'fire');
  bindHold(el.aim, 'aim');
  bindHold(el.jump, 'jump');
  el.reload.addEventListener('pointerdown', (e) => {
    input.reload = true;
    el.reload.classList.add('active');
    setTimeout(() => el.reload.classList.remove('active'), 120);
    e.preventDefault();
  });

  // touch look on the canvas (right 65% of screen)
  const canvas = $('scene');
  canvas.addEventListener('pointerdown', (e) => {
    if (!touchMode || lookId !== null) return;
    if (e.clientX < window.innerWidth * 0.35) return;
    lookId = e.pointerId;
    lookLast = { x: e.clientX, y: e.clientY };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!touchMode || e.pointerId !== lookId || !lookLast) return;
    const dx = e.clientX - lookLast.x;
    const dy = e.clientY - lookLast.y;
    lookLast = { x: e.clientX, y: e.clientY };
    input.lookX += dx * 1.15;
    input.lookY += dy * 1.15;
  });
  const endLook = (e) => {
    if (e.pointerId === lookId) {
      lookId = null;
      lookLast = null;
    }
  };
  canvas.addEventListener('pointerup', endLook);
  canvas.addEventListener('pointercancel', endLook);

  return {
    el,
    touchMode,
    input,
    showMenu,
    showHud,
    showPause,
    showTouch,
    showPointerHint,
    setWave,
    setScore,
    setCore,
    setHealth,
    setAmmo,
    setObjective,
    setThreat,
    banner,
    hideBanner,
    toast,
    feed,
    hitmarker,
    damageFrom,
    setSpread,
    drawMinimap,
    showEnd,
    hideEnd,
    setMuted,
    setBest,
    setMenuHostiles,
    resetTouch() {
      input.moveX = 0;
      input.moveY = 0;
      input.lookX = 0;
      input.lookY = 0;
      input.fire = false;
      input.aim = false;
      input.jump = false;
      input.reload = false;
      resetStick();
      el.stickKnob.style.transform = 'translate(0px, 0px)';
    },
  };
}
