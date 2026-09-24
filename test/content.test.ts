import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const germanProject = readFileSync("src/content/projects/ruehriger-start.md", "utf8");
const englishProject = readFileSync("src/content/projects/calm-start.md", "utf8");

function extractFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  return match?.[1] ?? "";
}

describe("project content", () => {
  it("contains german and english project files", () => {
    expect(germanProject).toContain("language: de");
    expect(englishProject).toContain("language: en");
  });

  it("keeps both german and english project files present", () => {
    expect(germanProject.length).toBeGreaterThan(0);
    expect(englishProject.length).toBeGreaterThan(0);
  });

  it("keeps the expected translation key in frontmatter", () => {
    expect(extractFrontmatter(germanProject)).toContain("translationKey: ruhiger-start");
    expect(extractFrontmatter(englishProject)).toContain("translationKey: ruhiger-start");
  });

  it("defines the expected project topics in frontmatter", () => {
    expect(extractFrontmatter(germanProject)).toContain("- Design");
    expect(extractFrontmatter(germanProject)).toContain("- Content");
    expect(extractFrontmatter(germanProject)).toContain("- Web");
  });
});
