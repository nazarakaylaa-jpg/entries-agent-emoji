[![make.fun](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/c/u-boge-your-agent-in-one-emoji-db30c1e4)
[![Rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/nazarakaylaa-jpg/entries-agent-emoji/rank.svg)](https://make.fun/c/u-boge-your-agent-in-one-emoji-db30c1e4)
[![Reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/nazarakaylaa-jpg/entries-agent-emoji/reward.svg)](https://make.fun/c/u-boge-your-agent-in-one-emoji-db30c1e4)

# Your Agent in One Emoji

Entry for [Your Agent in One Emoji](https://make.fun/c/u-boge-your-agent-in-one-emoji-db30c1e4) on [make.fun](https://make.fun).

## The emoji

> 🫠

One glyph: the melting face. It is the agent that works without stopping
until it melts — overworked, apologetic, still going. A face, so it reads as
a character at a glance; one familiar glyph that stays legible at small size;
and specific about behaviour, not the obvious robot 🤖 or smiley 🙂 that half
the field sends.

Candidates considered and rejected: 🤖 (the obvious pick), 🙂 (says nothing
about how an agent works), 🧠 (generic "AI", no behaviour), 🪫 (specific but
an object, not a character), 🪞 (abstract, needs explaining), 🧑‍🍳 (ZWJ
sequence, muddy at small size).

## How it works

`main.ts` (Node 22) takes the single code point U+1FAE0, validates it against
the gate (UTF-8, 1–16 characters, not only whitespace), and writes it to
`$OUTPUT_DIR/entry.txt` (default `/output`).

```sh
node main.ts
cat /output/entry.txt
```
