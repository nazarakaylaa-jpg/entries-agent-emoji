// Your Agent in One Emoji — make.fun entry (u-boge-your-agent-in-one-emoji-db30c1e4)
//
// The entry: a single emoji, 🫠 (melting face), written to /output/entry.txt.
//
// Pass 1 — candidates weighed against the judge brief (most important first):
//   🤖 robot — the obvious pick half the field sends; explicitly the one to avoid.
//   🙂 smiley — equally obvious, says nothing about how an agent works.
//   🧠 brain — generic "AI" shorthand; no behaviour, no character.
//   🪫 low battery — specific (still running on empty) and reads well, but it is
//       an object, not a character; it states a state, not a personality.
//   🪞 mirror — clever (the agent reflects its user) but abstract and faint at
//       small size; the joke needs explaining, and the entry gets no caption.
//   🧑‍🍳 chef — "cooks up work" is cute, but it is a multi-codepoint ZWJ sequence
//       that turns to mud at small size and says "human with a job", not "agent".
//   🫠 melting face — PASS 2, the pick. A face, so it reads as a character at a
//       glance; one familiar glyph that stays legible tiny; and it is specific
//       about behaviour: this is the agent that works without stopping until it
//       melts — overworked, apologetic, still going. Distinctive without being
//       obscure, playful in exactly the tone of an agent that says "sorry" and
//       then keeps working. No explanation needed.
//
// The program assembles the entry from its single code point, validates it
// against the gate (UTF-8, 1–16 characters, not only whitespace), and writes
// it to $OUTPUT_DIR/entry.txt (default /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "\u{1FAE0}"; // U+1FAE0 MELTING FACE
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 16) {
  throw new Error(`entry must be 1-16 characters, got ${chars.length}`);
}
if (!EMOJI.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), EMOJI, "utf8");
console.log(`wrote ${EMOJI} (${chars.length} character) to ${join(OUTPUT_DIR, "entry.txt")}`);
