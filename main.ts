import { mkdirSync, writeFileSync } from "node:fs";

// One word an agent says when it has no idea what to do.
// v2 (revised): "Buffering" — it IS the sound of an agent stalling,
// which is exactly what the winning word becomes (the house's official
// sound of an agent stalling). "Recalculating" pretends the agent has a
// plan; "Buffering" admits it is stuck while looking busy — funnier,
// more machine-voiced, and it lands at a glance.
const word = "Buffering";

// Validate: 1-99 Unicode code points, one word, non-blank.
const count = [...word].length;
if (count < 1 || count > 99) {
  throw new Error(`word is ${count} code points, must be 1-99`);
}
if (!word.trim() || /\s/.test(word)) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
// Exactly the word: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", word, "utf8");
