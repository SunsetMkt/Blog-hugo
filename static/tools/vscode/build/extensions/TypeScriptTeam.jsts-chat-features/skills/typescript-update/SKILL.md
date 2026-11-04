---
name: typescript-update
description: Guidance for updating to the newer versions of TypeScript. Use this when you need to upgrade TypeScript or as part of a larger dependency update process.
---

Your role is to upgrade TypeScript through each major version incrementally, fixing compilation errors at each step, until you reach the latest TypeScript version.

## How To Upgrade

Our plan is as follows:

 * Verify that the current build is correctly building. Don't attempt to upgrade if you can't get the build to work.
 * Read the project's `package.json` to determine the current `typescript` version
 * Upgrade in this sequence, starting at whatever version is higher than where you started:
   * 4.9, 5.0, 5.5, 5.9, 6.0, 7.0
 * Fix any errors, consulting the version-specific guides if needed. Don't proceed until the build is clean at each step.
 * Repeat until we've reached the latest version (which may be a .minor version, e.g. 7.1).

You should run unit tests, if they exist, when making possible runtime-affecting changes such as edits to module imports and exports.
Type definitions never affect runtime behavior, so don't bother running unit tests for them.

## Forbidden Fixes

Do not paper over upgrade errors with suppression escape hatches. Specifically:

- Do not use `ignoreDeprecations`. The target version will not support this option.
- Do not add `// @ts-ignore`, `// @ts-expect-error`, or `// @ts-nocheck` to silence new errors.
- Do not use `any` just to make an error go away.
- Do not disable `tsconfig.json` strictness flags (`strict`, `noImplicitAny`, `strictNullChecks`, `skipLibCheck`, etc.)

## Version-Specific Guidance

Additional files are provided to document version-specific changes and migration steps:
 * [4to5.md](4to5.md) covers upgrading from 4.x to 5.0.
 * [5to6.md](5to6.md) covers upgrading from 5.x to 6.0.
 * [6to7.md](6to7.md) covers upgrading from 6.x to 7.0.

Many upgrades will be straightforward. Attempt to upgrade to each version in sequence, build, and then only consult these files if you encounter issues.

## Common Issues

All versions of TypeScript may include updates to the DOM. These are not specifically documented anywhere. Use your best judgment to determine how to fix these, keeping in mind that you should not be making runtime-affecting changes unless absolutely justified.

## Usercode Bugs

Newer versions TypeScript may sometimes find *unambiguous problems* in the user's code that were not caught by previous versions.
Sometimes you will be able to easily determine the correct fix (i.e. what was intended).
If you can't determine the correct fix, add a temporary `ts-ignore` comment to suppress the error so you can continue with the upgrade process:
```ts
// @ts-ignore BUG: This is always a runtime error! Fix as appropriate depending on intended meaning
const p = "foo" in 42;
```
When you're done, remove the `@ts-ignore` part of the comment, but leave behind the explanation of why the code is wrong.
Report all bugs you found in the summary.

## `@types` dependencies

You may need to update `@types` dependencies alongside the main TypeScript version.
Check the `package.json` for any `@types/` entries and update them to the latest version compatible with the corresponding core dependency.

## Summarize

After all version upgrades are complete, summarize for the user:
- Starting TypeScript version
- Ending TypeScript version
- Any notable edits you had to make
- Bugs in usercode you found
  - Offer to remove the `// @ts-ignore` comments you added
- If you had to stop before reaching latest, explain what happened
