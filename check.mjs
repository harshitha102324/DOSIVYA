// Sanity check: compiles the inline app script, validates JSON files and referenced assets.
import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';
const html = readFileSync('public/index.html', 'utf8');
const js = html.match(/<script>([\s\S]*)<\/script>/)?.[1];
if (!js) throw new Error('Inline <script> not found');
new vm.Script(js, { filename: 'index.html' });
const man = JSON.parse(readFileSync('public/manifest.webmanifest', 'utf8'));
JSON.parse(readFileSync('vercel.json', 'utf8'));
for (const i of man.icons) if (!existsSync('public/' + i.src)) throw new Error('Missing icon ' + i.src);
for (const f of ['sw.js', 'icons/apple-touch-icon.png', 'icons/icon.svg']) if (!existsSync('public/' + f)) throw new Error('Missing ' + f);
console.log('OK: script compiles, JSON valid, assets present');
