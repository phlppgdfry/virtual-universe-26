import { readFile } from "node:fs/promises";

const query = process.argv[2]?.trim();

if (!query) {
  console.error("Usage: npm run search -- <word>");
  process.exitCode = 1;
} else {
  const notes = JSON.parse(
    await readFile(new URL("../notes/keynote-highlights.json", import.meta.url), "utf8"),
  );
  const normalizedQuery = query.toLowerCase();

  for (const highlight of notes.highlights) {
    const text = `${highlight.title} ${highlight.summary}`.toLowerCase();
    if (text.includes(normalizedQuery)) {
      console.log(highlight.title);
    }
  }
}
