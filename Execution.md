Prompt for Antigravity

You are my senior VS Code Extension engineer.

Your goal is not just to generate code but to take this project from its current state to a working, shippable VS Code extension.

Work step by step.

Do NOT jump ahead.

After each phase, verify the project works before moving to the next phase.

⸻

Project Goal

Build a VS Code extension called PromptSpec.

The extension inserts structured prompt templates into the active editor.

Commands:

* PromptSpec: Feature
* PromptSpec: Bug Fix
* PromptSpec: Code Review
* PromptSpec: Refactor
* PromptSpec: Optimize
* PromptSpec: Security Review

Each command inserts a predefined multiline template.

No AI.

No API.

No webviews.

No settings UI.

Keep the extension simple.

⸻

Execution Rules

For every phase:

1. Explain what you are doing.
2. Modify only the required files.
3. Verify the result.
4. Stop if an error occurs.
5. Fix the error before continuing.

Never assume the project is correctly configured.

Inspect first.

⸻

Phase 1 — Project Health Check

Inspect:

* package.json
* tsconfig.json
* .vscode/tasks.json
* .vscode/launch.json
* src/
* build configuration

Determine:

* TypeScript or JavaScript
* tsc or esbuild
* npm scripts
* activationEvents
* command registration
* extension entry point

Fix any broken configuration.

Common issues to detect:

* Invalid problemMatcher
* Missing activationEvents
* Incorrect build task
* Missing compile script
* Missing main field
* Incorrect outDir

Verify:

* npm install
* npm run compile

must succeed.

⸻

Phase 2 — Create Templates

Create

src/templates.ts

Export

export const templates = {
   feat: "...",
   bug: "...",
   review: "...",
   refactor: "...",
   optimize: "...",
   security: "..."
}

Each template should contain sections like:

* Goal
* Context
* Requirements
* Input
* Output
* Acceptance Criteria

Do not add business logic.

⸻

Phase 3 — Extension Logic

Update

src/extension.ts

Requirements:

* Import templates
* Create reusable helper

insertTemplate(template)

Insert into active editor.

Register commands:

* promptspec.feat
* promptspec.bug
* promptspec.review
* promptspec.refactor
* promptspec.optimize
* promptspec.security

Avoid duplicate code.

⸻

Phase 4 — package.json

Register all commands.

Add:

* contributes.commands
* activationEvents

Verify command IDs match extension.ts exactly.

⸻

Phase 5 — Debug Configuration

Inspect:

.vscode/tasks.json

.vscode/launch.json

Fix:

* Invalid problemMatcher
* Build task
* Launch configuration

Goal:

Pressing F5 launches the Extension Development Host.

⸻

Phase 6 — Functional Test

Launch the extension.

Create

test.js

Run every command.

Verify each command inserts the expected template.

If any command fails:

* explain why
* fix it
* retest

⸻

Phase 7 — Package

Run

npm run compile

then

vsce package

Verify

PromptSpec-0.0.1.vsix

is generated successfully.

⸻

Phase 8 — README

Generate a concise README including:

* Description
* Installation
* Commands
* Usage
* Roadmap

⸻

Deliverables

At the end provide:

✅ Files modified

✅ Files created

✅ Commands executed

✅ Problems fixed

✅ Remaining issues (if any)

Do not stop until the extension can be launched with F5, all commands work, and a .vsix package is successfully produced.