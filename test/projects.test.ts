import { describe, expect, it } from "vitest";
import { filterProjects, normalizeTopic, projectDateLabel, projectTopics } from "../src/lib/project-page";

const first = {
  data: { topics: ["Design", "Web"], date: new Date("2026-01-01") },
} as any;

const second = {
  data: { topics: ["Cloud"], date: new Date("2026-01-02") },
} as any;

describe("project helpers", () => {
  it("filters by topic and keeps all when topic is all", () => {
    expect(filterProjects([first, second], "all")).toHaveLength(2);
    expect(filterProjects([first, second], "Design")).toEqual([first]);
  });

  it("returns no projects for unknown topics", () => {
    expect(filterProjects([first, second], "Unknown")).toEqual([]);
  });

  it("matches topics case-insensitively", () => {
    expect(normalizeTopic("  Web  ")).toBe("web");
    expect(filterProjects([first, second], "web")).toEqual([first]);
    expect(filterProjects([first, second], "Web")).toEqual([first]);
  });

  it("exposes topics from a project entry", () => {
    expect(projectTopics(first)).toEqual(["Design", "Web"]);
  });

  it("formats project dates by locale", () => {
    expect(projectDateLabel(new Date("2026-09-24"), "de-DE")).toContain("24");
    expect(projectDateLabel(new Date("2026-09-24"), "en-US")).toContain("2026");
  });
});
