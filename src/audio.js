// All audio is synthesized at runtime — no external assets.
export function createAudio() {
  let ctx = null;
  let master = null;
  let muted = false;
  let ambientStarted = false;
  let noiseBuffer = null;

  function ensure() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume();
      return true;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.55;
    master.connect(ctx.destination);

    noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 1.2, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return true;
  }

  function now() {
    return ctx ? ctx.currentTime : 0;
  }

  function tone(freq, dur, type = 'sine', gain = 0.1, slideTo = null, delay = 0) {
    if (!ctx || muted) return;
    const t = now() + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  function noise(dur, freq, gain = 0.2, q = 1, delay = 0, type = 'bandpass') {
    if (!ctx || muted) return;
    const t = now() + delay;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    filter.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter).connect(g).connect(master);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  function startAmbient() {
    if (!ctx || muted || ambientStarted) return;
    ambientStarted = true;
    const g = ctx.createGain();
    g.gain.value = 0.05;
    g.connect(master);
    for (const [f, type, detune] of [
      [46, 'sine', 0],
      [55.2, 'triangle', 7],
      [92, 'sine', -6],
    ]) {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = f;
      o.detune.value = detune;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 240;
      o.connect(lp).connect(g);
      o.start();
    }
    // air handling hiss
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer;
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 420;
    const ng = ctx.createGain();
    ng.gain.value = 0.035;
    src.connect(lp).connect(ng).connect(master);
    src.start();
  }

  return {
    init() {
      if (!ensure()) return;
      startAmbient();
    },
    get muted() {
      return muted;
    },
    setMuted(value) {
      muted = value;
      if (master) master.gain.value = value ? 0 : 0.55;
    },
    shot() {
      noise(0.09, 1400, 0.26, 0.8);
      tone(135, 0.11, 'triangle', 0.22, 52);
      noise(0.03, 3400, 0.1, 1.4, 0, 'highpass');
    },
    enemyShot() {
      tone(680, 0.14, 'sawtooth', 0.06, 240);
      noise(0.08, 1900, 0.05, 1.8);
    },
    empty() {
      noise(0.03, 2200, 0.08, 2);
    },
    hit() {
      tone(980, 0.045, 'square', 0.055, 760);
    },
    headshot() {
      tone(1520, 0.06, 'square', 0.07, 1180);
      tone(2200, 0.05, 'sine', 0.045, 1500, 0.02);
    },
    kill() {
      tone(240, 0.18, 'sawtooth', 0.09, 90);
      noise(0.22, 500, 0.14, 0.6);
    },
    reload() {
      noise(0.04, 1800, 0.12, 2, 0);
      noise(0.05, 900, 0.14, 1.4, 0.55);
      noise(0.04, 2400, 0.1, 2, 1.35);
      tone(320, 0.05, 'square', 0.03, 220, 1.35);
    },
    hurt() {
      tone(90, 0.22, 'sine', 0.22, 48);
      noise(0.18, 340, 0.13, 0.7);
    },
    coreHit() {
      tone(70, 0.35, 'sine', 0.24, 38);
      tone(420, 0.12, 'square', 0.05, 240, 0.02);
    },
    spawn() {
      tone(160, 0.3, 'sawtooth', 0.05, 420);
      noise(0.25, 800, 0.06, 1.2);
    },
    wave() {
      tone(330, 0.16, 'square', 0.07);
      tone(330, 0.16, 'square', 0.07, null, 0.22);
      tone(494, 0.3, 'square', 0.07, null, 0.44);
    },
    clear() {
      tone(392, 0.16, 'triangle', 0.08);
      tone(523, 0.16, 'triangle', 0.08, null, 0.14);
      tone(659, 0.34, 'triangle', 0.08, null, 0.28);
    },
    explosion() {
      noise(0.5, 260, 0.3, 0.5);
      tone(58, 0.5, 'sine', 0.3, 28);
    },
    win() {
      [392, 523, 659, 784].forEach((f, i) => tone(f, 0.6, 'triangle', 0.09, null, i * 0.12));
    },
    lose() {
      tone(220, 0.5, 'sawtooth', 0.09, 110);
      tone(147, 0.9, 'triangle', 0.1, 62, 0.25);
      noise(0.9, 200, 0.1, 0.5, 0.1);
    },
  };
}
