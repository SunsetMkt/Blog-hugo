---
name: typescript-setup
description: How to set up a new TypeScript project
---

To set up a new repo with TypeScript, follow these steps unless you have reason to deviate from them:

 * `npm install --save-dev typescript@latest` (or use the user's package manager of choice)
 * Run `npx tsc --init` to create a `tsconfig.json` file
 * Read the tsconfig.json it generates and make the edits suggested in that file:
   * If running server-side or local scripts, add `node` to `types` and `npm install --save-dev @types/node`
   * Set `rootDir` to `src` and `outDir` to `dist`
   * If using vite, esbuild, or similar bundlers, set `moduleResolution` to `bundler`
     * If you have more specific info from the bundler info, defer to it instead
 * Create a `src` directory and add your TypeScript files there     
 * Add a build script to your `package.json` that runs `tsc`
 * If using a bundler, add the appropriate build script for it as well

If you're running TypeScript code on the commandline, `tsx` is no longer necessary or recommended if node 22.18.0 or later is installed.
Enable `erasableSyntaxOnly` in the tsconfig and run e.g. `node src/index.ts` directly.