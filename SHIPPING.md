# Flint Prompts — Publishing Guide

## Every time you want to ship a change

### Step 1 — Make your changes
Edit templates, add new ones, fix bugs — whatever you need.

### Step 2 — Bump the version in `package.json`
```json
"version": "0.0.6"   ← increment this every time you publish
```

### Step 3 — Run this single command
```bash
npm run ship
```

That's it. This command compiles, tests, and publishes in one shot.

---

## Installing & Testing in Antigravity IDE (Local Development)

If you want to package and test the extension directly in the **Antigravity IDE** locally without waiting for the marketplace CDN:

### Run this single command:
```bash
npm run install:ide
```
This packages the current code into a `.vsix` file and automatically installs it to the Antigravity IDE. 

Once run, open or reload your Antigravity IDE window (`Cmd+Shift+P` -> `Reload Window`), and start typing `/feat` or `/dbg` in any file!

---

## What `npm run ship` does internally
1. `npm run compile` — type check + lint + build
2. `npm run compile-tests` — compile test files
3. `npm run functional-test` — run all 20 tests, abort if any fail
4. `npm run publish` — push to VS Code Marketplace

---

## Adding a new template

**1. Open `src/templates.ts`**

Add a new entry to the `templates` array:
```typescript
{
  prefix: 'myprefix',        // what user types after /
  title: 'Flint: My Template',
  description: 'Short description',
  body: [
    'HEADING ONE:',
    '',
    'HEADING TWO:',
    '',
    'HEADING THREE:',
  ],
},
```

**2. Add the command to `package.json`** under `contributes.commands`:
```json
{ "command": "flint.myprefix", "title": "Flint: My Template" }
```

**3. Run `npm run ship`** — done.

---

## Updating an existing template

1. Open `src/templates.ts`
2. Find the template by its `prefix`
3. Edit the `body` array
4. Bump version in `package.json`
5. Run `npm run ship`

---

## All prefixes (current v0.0.5)

| Prefix | Template |
|---|---|
| `/ai` | General AI Prompt |
| `/dbg` | Debug |
| `/feat` | Feature |
| `/review` | Code Review |
| `/arch` | Architecture |
| `/api` | API Design |
| `/refactor` | Refactor |
| `/sec` | Security Review |
| `/perf` | Performance |
| `/agent` | AI Agent |
| `/learn` | Learning |
| `/decision` | Decision |
| `/rca` | Root Cause Analysis |
| `/sys` | System Design |
| `/research` | Research |
| `/improve` | Improve Prompt |
| `/biz` | Business Logic |
| `/ui` | UI/UX |
| `/deploy` | Deployment Debug |
| `/context` | Context Engineering |

---

## One-time setup (already done — just for reference)

```bash
# Login to Marketplace (only needed once per machine)
npx @vscode/vsce login kamalpulaparthi
# paste your PAT when prompted
```

PAT lives at: https://dev.azure.com → User Settings → Personal Access Tokens

---

## Extension info

| | |
|---|---|
| Publisher | `kamalpulaparthi` |
| Extension ID | `kamalpulaparthi.promptspec` |
| Display name | `Flint Prompts` |
| Marketplace | https://marketplace.visualstudio.com/items?itemName=kamalpulaparthi.promptspec |
| Manage | https://marketplace.visualstudio.com/manage/publishers/kamalpulaparthi |
