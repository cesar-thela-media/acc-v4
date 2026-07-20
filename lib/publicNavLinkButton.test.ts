/**
 * Ensures Base UI Button + Next Link composition uses nativeButton={false}
 * so public routes do not emit the recurring console error.
 * Drives the shipped PublicNav source (real path under components/layout).
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

const here = dirname(fileURLToPath(import.meta.url));
const publicNavPath = join(here, "..", "components", "layout", "PublicNav.tsx");

describe("PublicNav Join Button + Link", () => {
  it("sets nativeButton={false} on every Button that renders a Link", () => {
    const src = readFileSync(publicNavPath, "utf8");
    // Match each Button that uses render={<Link ... />} and require nativeButton={false} nearby
    const buttonBlocks = src.split("<Button").slice(1);
    const linkButtons = buttonBlocks.filter((b) => /render=\{\s*<Link/.test(b));
    assert.ok(linkButtons.length >= 2, `expected ≥2 Join Link buttons, found ${linkButtons.length}`);
    for (const block of linkButtons) {
      // Only inspect props until children close of opening tag region (~first 400 chars)
      const head = block.slice(0, 500);
      assert.match(
        head,
        /nativeButton=\{false\}/,
        "Button with render={<Link>} must set nativeButton={false} (Base UI console error)",
      );
    }
  });
});
