# BULWARK — Transport 09

A CrossFire-inspired browser FPS built around one job: hold the cargo bay and keep the reactor core online through five boarding waves.

Everything in the game is generated at runtime — geometry, textures, lighting, particle effects, and audio. There are no downloaded models, image assets, or sound files.

## Play

```bash
npm install
npm run dev
```

Open `http://localhost:3002`.

### Desktop

| Input | Action |
| --- | --- |
| `W` `A` `S` `D` / arrows | Move |
| Mouse | Look |
| Left mouse | Fire (full auto) |
| Right mouse | Aim down sights |
| `Shift` | Sprint |
| `Space` | Jump |
| `R` | Reload |
| `M` | Mute |
| `Esc` | Pause / resume |

Click the game view to capture the mouse. If the browser blocks pointer lock, the view still fires and the on-screen hint explains how to retry.

### Mobile & tablet

- **Left pad** — move.
- **Drag the right side of the screen** — look.
- **FIRE** — hold for full auto.
- **AIM** — hold for tighter spread.
- **RELOAD** / **JUMP** — action buttons.
- Touch layouts use safe-area insets and keep every control above the browser chrome.

## The run

- **SPECTER** — fast kamikaze drone.
- **BOARDER** — armed raider that keeps its distance and shoots.
- **BREACHER** — heavy brute that walks through fire and hits the core.

The reactor has 120 integrity and the operator has 100 health with delayed regeneration. Waves grow from seven to twenty-three boarders, and the bay throws more spawn lanes and heavier mixes at you each round. Kills, headshots, wave clears, and remaining core integrity feed the final score.

## Tech

- [Vite](https://vite.dev/) + [Three.js](https://threejs.org/)
- Procedural ship interior, reactor, crates, lighting, and IBL environment
- Custom character controller with sprint, jump, collision, recoil, spread, and ADS
- Enemy AI, projectiles, hit spheres, headshots, wave director, and score/stats flow
- Canvas minimap, kill feed, banners, pause/end screens, and synthesized WebAudio
- Responsive HUD and multi-touch controls for phones and tablets

`npm run build` writes a static build to `dist/`.

For automated checks, append `?debug=1` to expose `window.__bulwark` (game state, enemies, player, capture helpers).

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/nksamuraii/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/nksamuraii/PlayGround)

- 🎮 [Open the project](https://omgithub.com/nksamuraii/PlayGround).
- ✨ [Remix this project](https://omgithub.com/?remix=nksamuraii%2FPlayGround).
- 💻 [Explore the source](https://github.com/nksamuraii/PlayGround).
- 🛠️ [Check build runs](https://github.com/nksamuraii/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/nksamuraii/PlayGround/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/nksamuraii).
- 🌍 [Create with OMGithub](https://omgithub.com).
<!-- omgithub:readme:end -->
