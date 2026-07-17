import { describe, expect, it } from "vitest";
import { map } from "./map";

describe("map", () => {
  it("transforms every item into a new array", () => {
    const names = ["Rohit", "Samar", "Samir"];

    const upperNames = map(names, (name) => name.toUpperCase());

    expect(upperNames).toEqual([
      "ROHIT",
      "SAMAR",
      "SAMIR",
    ]);
  });
});
