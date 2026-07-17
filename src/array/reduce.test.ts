import { describe, expect, it } from "vitest";
import { reduce } from "./reduce";

describe("reduce", () => {
  it("reduces all items into a single value", () => {
    const numbers = [10, 20, 30, 40, 50];

    const sum = reduce(numbers, 0, (total, number) => total + number);

    expect(sum).toBe(150);
  });
});
