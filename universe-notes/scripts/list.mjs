import { readFile } from "node:fs/promises";

const notes = JSON.parse(
  await readFile(new URL("../notes/keynote-highlights.json", import.meta.url), "utf8"),
);
const highlightsByTopic = new Map();

for (const highlight of notes.highlights) {
  const titles = highlightsByTopic.get(highlight.topic) ?? [];
  titles.push(highlight.title);
  highlightsByTopic.set(highlight.topic, titles);
}

for (const [topic, titles] of highlightsByTopic) {
  console.log(topic);
  for (const title of titles) {
    console.log(`- ${title}`);
  }
  console.log();
}
