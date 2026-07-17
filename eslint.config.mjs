import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendor/reference design exploration, not part of the shipped app (see shadcnblocks/ in .gitignore).
    "shadcnblocks/**",
    // Claude Code's own state/worktree directory, not part of the shipped app.
    ".claude/**",
  ]),
  {
    // Plain CommonJS Node scripts (package.json has no "type": "module"), not
    // part of the app bundle — require() here is correct, not a lint issue.
    files: ["scripts/**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);

export default eslintConfig;
