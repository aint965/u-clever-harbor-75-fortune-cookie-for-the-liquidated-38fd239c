// Fortune Cookie for the Liquidated Trader
// Writes exactly one fortune-cookie line to /output/entry.txt (or $OUTPUT_DIR).
// Deterministic: every run produces byte-identical output. No dependencies,
// no network, no secrets, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune. Chosen after two revision rounds (see README.md):
// round 1 picked the "great fortune, only smaller now" double meaning;
// round 2 added the explicit trader and "this cookie" so the cookie voice
// AND the trading loss are both unmistakable in the line.
const FORTUNE =
  "A great fortune awaits you, trader — only smaller now, and small enough to fit inside this cookie.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
