import { describe, expect, it } from "vitest";
import { getCanonicalPath, getPreferredLanguage } from "../src/lib/routing";

describe("routing", () => {
  it("prefers german for DACH countries", () => {
    expect(getPreferredLanguage("de")).toBe("de");
    expect(getPreferredLanguage("AT")).toBe("de");
    expect(getPreferredLanguage("ch")).toBe("de");
  });

  it("falls back to english outside DACH", () => {
    expect(getPreferredLanguage("US")).toBe("en");
    expect(getPreferredLanguage(null)).toBe("en");
  });

  it("canonicalizes known routes with trailing slash", () => {
    expect(getCanonicalPath("/de")).toBe("/de/");
    expect(getCanonicalPath("/en")).toBe("/en/");
    expect(getCanonicalPath("/de/projekte")).toBe("/de/projekte/");
    expect(getCanonicalPath("/en/projects")).toBe("/en/projects/");
  });
});
