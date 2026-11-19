import { expect, test } from "vitest";
import { absoluteUrl } from "./site";

test("absoluteUrl joins base and path without double slashes", () => {
  expect(absoluteUrl("/about", "https://x.com")).toBe("https://x.com/about");
  expect(absoluteUrl("/about", "https://x.com/")).toBe("https://x.com/about");
  expect(absoluteUrl("/", "https://x.com")).toBe("https://x.com/");
});
