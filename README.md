# Mini Music Player Web App

A lightweight, browser-based music player using vanilla HTML, CSS, and JavaScript. Load and control local MP3 files with a simple interface.

## Features
- Load local MP3 files via file input.
- Play, pause/resume, restart, and stop controls.
- Dynamic button icons and text.
- Basic progress bar for track duration.
- Responsive design for various screen sizes.

## Prerequisites
- Any modern web browser (supports HTML5 `<audio>`).

## Installation
1. Clone or download this repository.
2. No installation required—no dependencies.

## Usage
1. Open `index.html` in your browser.
2. Click "Load File" to select an MP3 from your device.
3. Use buttons to control playback:
   - Play/Restart: Starts or restarts the track.
   - Pause/Resume: Toggles playback.
   - Stop: Halts and resets the player.
4. Track progress is shown via a progress bar.

## Code Structure
- `index.html`: Main structure and layout.
- `style.css`: Styling for the UI.
- `script.js`: JavaScript logic for audio controls and events.

## Limitations
- Single-track only (no playlists).
- No volume control or advanced seeking (basic progress bar only).
- Local files only—browser security restricts remote loading without CORS.
- MP3 support is browser-dependent; test with valid files.

## Deployment
- **Local:** Double-click `index.html`.
- **Online:** Host on static sites like GitHub Pages:
  1. Create a GitHub repo.
  2. Push files.
  3. Go to Settings > Pages > Source: main branch.
  4. Access at `<username>.github.io/<repo>`.

## Contributing
Fork and submit pull requests for enhancements.

## License
MIT License
