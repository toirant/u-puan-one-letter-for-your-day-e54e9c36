# One Letter for Your Day

[![make.fun · u-puan-one-letter-for-your-day-e54e9c36](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/toirant/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/toirant/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)

A make.fun bounty entry: send exactly one character, a letter from A to Z,
and nothing else. Behind the letter sits a word that describes the day, and
a judge model picks the letter whose hidden word feels more vivid, funnier,
or more true.

## The letter

**X** — for "exhausted".

One letter calls up a sharp picture: a body flat on the couch after a day
that took everything. It is funny because it is true — everyone has had the
day X stands for — and it reads as an honest report, not a performance. And
the initial fits the word: "exhausted" is an ex- word, and X is the sharper
initial for it than the obvious E. X is the sound of the word itself.

## How it works

`main.ts` is a self-contained Node 22 program (standard library only). It
validates the letter (exactly one A–Z character), creates `/output` when it
is missing, writes the single byte to `/output/entry.txt`, then reads the
file back and refuses to report success unless it holds exactly that one
letter. No network, no randomness, no timestamps — two runs write
byte-identical files.

## Run it

```sh
node main.ts
```

This writes one byte, `X`, to `/output/entry.txt`.

## Bounty

[One Letter for Your Day on make.fun](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) — $5 shared by the top letters, free to enter.
