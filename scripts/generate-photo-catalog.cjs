const fs = require("fs");
const path = require("path");

const root = process.cwd();
const miniRoot = path.join(root, "public", "portfolio", "fotografia", "miniaturas");

const encodeSegments = (segments) => segments.map((s) => encodeURIComponent(s)).join("/");

const listImages = (folder) => {
  const dir = path.join(miniRoot, folder);
  const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => exts.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
    .map((f) => `/portfolio/fotografia/miniaturas/${folder}/${encodeURIComponent(f)}`);
};

const walkImages = (folder) => {
  const base = path.join(miniRoot, folder);
  const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
  const results = [];

  const walk = (current, rel = []) => {
    if (!fs.existsSync(current)) return;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const nextRel = [...rel, entry.name];
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full, nextRel);
        continue;
      }
      if (!exts.has(path.extname(entry.name).toLowerCase())) continue;
      results.push({
        url: `/portfolio/fotografia/miniaturas/${folder}/${encodeSegments(nextRel)}`,
        mtime: fs.statSync(full).mtimeMs,
      });
    }
  };

  walk(base);
  return results;
};

const bodaPhotos = listImages("boda");
const convencionPhotos = listImages("convencion");
const graduacionPhotos = listImages("graduacion");
const studioPhotos = walkImages("studio").map((x) => x.url);
const modaPhotos = walkImages("studio/moda")
  .sort((a, b) => b.mtime - a.mtime)
  .map((x) => x.url);

const ts =
  `export const bodaPhotos = ${JSON.stringify(bodaPhotos, null, 2)} as const;\n\n` +
  `export const convencionPhotos = ${JSON.stringify(convencionPhotos, null, 2)} as const;\n\n` +
  `export const graduacionPhotos = ${JSON.stringify(graduacionPhotos, null, 2)} as const;\n\n` +
  `export const studioPhotos = ${JSON.stringify(studioPhotos, null, 2)} as const;\n\n` +
  `export const modaPhotos = ${JSON.stringify(modaPhotos, null, 2)} as const;\n`;

const out = path.join(root, "app", "data", "photoCatalog.ts");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, ts, "utf8");
console.log("Generated", out);
