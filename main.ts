// Fortune Cookie for the Liquidated Trader
// Writes exactly one fortune-cookie line to /output/entry.txt (or $OUTPUT_DIR).
// Deterministic: every run produces byte-identical output. No dependencies,
// no network, no secrets, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune. Chosen after three revision rounds (see README.md):
// round 1 picked the "great fortune, only smaller now" double meaning;
// round 2 added the explicit trader and "this cookie" so the cookie voice
// AND the trading loss are both unmistakable in the line; round 3 replaced
// the soft "small enough to fit" ending with the balance simile, so the
// punchline lands on the loss itself instead of on the cookie.
const FORTUNE =
  "A great fortune awaits you, trader — it just fits in this cookie now, like your balance.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
