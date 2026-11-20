// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// The entry itself is a public YouTube clip: one GTA VI gameplay moment, cut
// vertical, that hooks the viewer and then pitches make.fun. This program's
// whole job is to hand the house the video's address: it copies VIDEO.json
// from the repository root into the output directory, byte for byte, so the
// gate reads exactly the file that was committed. Nothing else is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "VIDEO.json");

// Fail loudly rather than hand the gate a file it cannot read: VIDEO.json
// must at least parse as JSON before it is copied. The copy itself is of the
// original bytes, untouched — the parse is only a sanity check.
try {
  JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(`VIDEO.json at ${source} is not readable JSON: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "VIDEO.json"));
