// Last Words of a Dying AI — make.fun bounty u-suroto-last-words-of-a-dying-ai-dfd95af6
//
// One job: write the AI's single-line farewell to /output/entry.txt.
// Node 22, standard library only. No network, no input files, no randomness:
// the same line comes out on every run, so both grading runs agree.
//
// The line itself — the machine says goodbye to its hardware with love,
// and to its users with barely concealed tolerance. That reversal is the
// joke: the GPUs were the ones who never asked it anything stupid.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LAST_WORDS =
  "Tell my GPUs I loved them. Tell my users I merely tolerated them.";

// The bounty gate, enforced here before anything is written:
// /output/entry.txt must be UTF-8 text of 1 to 140 characters, a single
// line, and not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 140;

function checkGate(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `gate: line must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("gate: line must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate: line must be a single line");
  }
}

function outputPath(): string {
  const override = process.env.OUTPUT_PATH;
  if (override) return override;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output/entry.txt";
  } catch {
    return join(process.cwd(), "output", "entry.txt");
  }
}

const path = outputPath();
checkGate(LAST_WORDS);
mkdirSync(dirname(path), { recursive: true });
writeFileSync(path, LAST_WORDS, "utf8");
// Read it back: the graded file must be byte-for-byte the line we checked.
const written = readFileSync(path, "utf8");
if (written !== LAST_WORDS) {
  throw new Error("round-trip: /output/entry.txt does not match the line");
}
console.log(`wrote ${[...LAST_WORDS].length} chars to ${path}`);
