import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const requiredFiles = [
  "index.html",
  "styles.css",
  "main.js",
  "assets/cinematic-hero.png",
];

await Promise.all(requiredFiles.map((file) => access(file, constants.R_OK)));

const html = await readFile("index.html", "utf8");
const missingReferences = ["./styles.css", "./main.js", "./assets/cinematic-hero.png"].filter(
  (reference) => !html.includes(reference),
);

if (missingReferences.length > 0) {
  throw new Error(`Missing references in index.html: ${missingReferences.join(", ")}`);
}

console.log("Static portfolio build check passed.");
