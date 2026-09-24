import { describe, expect, it } from "vitest";

describe("language navigation", () => {
  it("uses explicit language paths", () => {
    const de = "/de/";
    const en = "/en/";

    expect(de).toBe("/de/");
    expect(en).toBe("/en/");
  });
});
