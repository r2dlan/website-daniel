import { describe, expect, it } from "vitest";
import { getCanonicalPath } from "../src/lib/routing";

describe("legal routing", () => {
  it("canonicalizes language home routes", () => {
    expect(getCanonicalPath("/de")).toBe("/de/");
    expect(getCanonicalPath("/en")).toBe("/en/");
  });

  it("canonicalizes project routes", () => {
    expect(getCanonicalPath("/de/projekte")).toBe("/de/projekte/");
    expect(getCanonicalPath("/en/projects")).toBe("/en/projects/");
  });
});
