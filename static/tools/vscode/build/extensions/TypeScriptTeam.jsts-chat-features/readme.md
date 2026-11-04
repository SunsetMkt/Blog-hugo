# JavaScript/TypeScript Chat Features

This extension provides the following functionality:

## Skills

Skills offer Copilot Agent Mode additional information on how to perform certain tasks.
To enable skills, set the `jsts-chat-features.skills.enabled` configuration setting to `true`.

Currently available:

 * The *TypeScript Setup Skill* (`typescript-setup`), which offers better guidance on how to make a modern `tsconfig.json` for TypeScript projects.
 * The *TypeScript Update Skill* (`typescript-update`), which assists in upgrading from older versions of TypeScript to newer versions, up to and including TypeScript 7.0.

## Telemetry and experimentation

The extension uses `@vscode/extension-telemetry` for activation and TAS diagnostic/query events,
and `vscode-tas-client` for cached experiment assignments. Events include TAS assignment context
so experiment results can be correlated with extension telemetry. This uses the same telemetry
resource as the TypeScript native-preview extension.

The extension queries the legacy TAS endpoint and the new assignments API at
`https://exp.individual.githubcopilot.com/api/v1/assignments`. The individual endpoint is used
for all Copilot SKUs until VS Code exposes a public endpoint-discovery API. Business or enterprise
firewalls may block this host; failed new-API requests are logged, and the client retains available
legacy or cached assignments, otherwise using treatment defaults.

The new assignments request uses VS Code's machine ID for randomization, matching the machine
identity included by the telemetry reporter. Activation telemetry counts startups, not
experiment exposure: it uses cached assignment context when available, but a cold-start event
may lack attribution because activation does not wait for network assignments.

Telemetry respects VS Code's `telemetry.telemetryLevel` setting. Setting it to `off` also stops
TAS polling and disables treatment lookups. No source code, chat prompts, or workspace paths are
added to extension events. This integration does not change the skills setting or its default.
See the [Microsoft Privacy Statement](https://privacy.microsoft.com/privacystatement).
