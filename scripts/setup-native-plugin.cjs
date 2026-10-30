/**
 * Post-`cap add android` helper.
 * - Wires custom native plugins if any exist under /plugins
 * - Copies the Yene Birr app icon into Android mipmap folders
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pluginsDir = path.join(root, 'plugins');
const androidRes = path.join(root, 'android', 'app', 'src', 'main', 'res');
const publicIcons = path.join(root, 'public', 'icons');
const publicRoot = path.join(root, 'public');

function copyIcon(src, dest) {
  if (!fs.existsSync(src)) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  return true;
}

// --- App icon into Android density folders ---
if (fs.existsSync(androidRes)) {
  const map = [
    ['icon-48.png', 'mipmap-mdpi'],
    ['icon-72.png', 'mipmap-hdpi'],
    ['icon-96.png', 'mipmap-xhdpi'],
    ['icon-144.png', 'mipmap-xxhdpi'],
    ['icon-192.png', 'mipmap-xxxhdpi'],
  ];
  let n = 0;
  for (const [file, folder] of map) {
    const src = path.join(publicIcons, file);
    // launcher icons
    if (copyIcon(src, path.join(androidRes, folder, 'ic_launcher.png'))) n++;
    if (copyIcon(src, path.join(androidRes, folder, 'ic_launcher_round.png'))) n++;
    if (copyIcon(src, path.join(androidRes, folder, 'ic_launcher_foreground.png'))) n++;
  }
  // Also copy high-res into play store style if folder exists
  const play = path.join(publicRoot, 'icon-512.png');
  if (fs.existsSync(play)) {
    copyIcon(play, path.join(androidRes, 'mipmap-xxxhdpi', 'ic_launcher_foreground.png'));
  }
  console.log('[setup-native-plugin] Copied app icons into Android res (' + n + ' files).');
} else {
  console.log('[setup-native-plugin] android/res not found yet — skip icons.');
}

// --- Optional custom plugins ---
if (!fs.existsSync(pluginsDir)) {
  console.log('[setup-native-plugin] No /plugins directory — done.');
  process.exit(0);
}
const plugins = fs.readdirSync(pluginsDir).filter((name) =>
  fs.statSync(path.join(pluginsDir, name)).isDirectory()
);
if (plugins.length === 0) {
  console.log('[setup-native-plugin] /plugins empty — done.');
  process.exit(0);
}
console.log('[setup-native-plugin] Found plugin folders:', plugins.join(', '));
console.log('[setup-native-plugin] No wiring logic yet for these — add when needed.');
