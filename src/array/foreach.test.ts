import { describe, expect, it, vi } from "vitest";
import { forEach } from "./foreach";

describe("forEach", () => {
  it("calls the callback for every item in order", () => {
    const users = [
      { name: "Rohit" },
      { name: "Samar" },
      { name: "Samir" },
    ];

    const callback = vi.fn();

    forEach(users, callback);

    expect(callback).toHaveBeenCalledTimes(3);

    expect(callback).toHaveBeenNthCalledWith(1, { name: "Rohit" }, 0);
    expect(callback).toHaveBeenNthCalledWith(2, { name: "Samar" }, 1);
    expect(callback).toHaveBeenNthCalledWith(3, { name: "Samir" }, 2);
  });
});
