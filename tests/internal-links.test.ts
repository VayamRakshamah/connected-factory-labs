import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const routes = new Set([
  "/",
  "/services",
  "/solutions",
  "/industries",
  "/how-it-works",
  "/demo",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
]);
const files = fs
  .readdirSync(path.resolve("src/app"), { recursive: true })
  .filter(
    (file): file is string => typeof file === "string" && file.endsWith(".tsx"),
  );

describe("internal links", () => {
  it("keeps literal application links pointed at real routes", () => {
    const links = files.flatMap((file) =>
      [
        ...fs
          .readFileSync(path.resolve("src/app", file), "utf8")
          .matchAll(/href=["'](\/[a-z-]*)["']/g),
      ].map((match) => match[1]),
    );
    expect(links.length).toBeGreaterThan(0);
    expect(links.filter((link) => !routes.has(link))).toEqual([]);
  });
  it("includes the required page routes", () =>
    routes.forEach((route) => expect(routes.has(route)).toBe(true)));
});
