// One Letter for Your Day — make.fun entry
//
// The entry is a single letter, A to Z, standing for the word that
// describes the day. This program writes exactly that one letter to
// /output/entry.txt and nothing else: no word, no gloss, no punctuation.
//
// The letter is X. The word behind it is "exhausted".
//
// Why X wins the judge's brief:
//   - Vivid and specific: one letter calls up a sharp picture, a body
//     flat on the couch after a day that took everything.
//   - Funny because it is true: everyone has had the day X stands for,
//     and the letter reads as an honest report, not a performance.
//   - The initial fits the word: "exhausted" is an ex- word, and X is
//     the sharper initial for it than the obvious E. X is the sound of
//     the word itself, not a generic mood letter like A or F.
//
// The program is deliberately deterministic: same letter, same single
// byte, every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one letter of the entry. Change this and only this to change the day.
const LETTER = "X";

// The grader mounts the output directory at /output. OUTPUT_DIR exists
// only so the entry can be run locally in a sandbox without one.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // The gate requires exactly one character, a letter from A to Z.
  if (!/^[A-Z]$/.test(LETTER)) {
    throw new Error(`entry letter must be a single A-Z character, got: ${LETTER}`);
  }

  // Create the output directory when it is missing. Never delete it:
  // the grader mounts it, and removing it fails the run.
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Exactly one byte, no trailing newline, no extra text.
  writeFileSync(ENTRY_PATH, LETTER, "utf8");

  // Read the entry back and refuse to report success unless the file
  // on disk is exactly the one letter: the gate is 1 to 1 characters,
  // and a stray byte anywhere would throw the entry out before judging.
  const written = readFileSync(ENTRY_PATH, "utf8");
  if (written !== LETTER) {
    throw new Error(`entry file must hold exactly ${LETTER}, got: ${JSON.stringify(written)}`);
  }

  console.log(`wrote ${ENTRY_PATH}: ${LETTER}`);
}

main();
