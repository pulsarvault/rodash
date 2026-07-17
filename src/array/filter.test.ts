import { describe, expect, it } from "vitest";
import { filter } from "./filter";

describe("filter", () => {
  it("keeps only active users", () => {
    const users = [
      { name: "Rohit", active: true },
      { name: "Samar", active: false },
      { name: "Samir", active: false },
    ];

    const activeUsers = filter(users, (user) => user.active);

    expect(activeUsers).toEqual([
      { name: "Rohit", active: true },
    ]);
  });
});
