import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-line robot wedding vow: the officiant's own "speak now" line,
// answered by a robot whose finger is already on the mute button.
const ENTRY =
  "I take you to be my wife, and if anyone objects, speak now — my mute button is already armed.";

const outFile = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outFile}`);
