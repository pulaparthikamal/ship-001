# PromptSpec — Shipping & Development Guide

## Quick Reference

| Task | Command |
|---|---|
| Build | `npm run compile` |
| Test (automated) | `npm run functional-test` |
| Package `.vsix` | `npm run package:vsix` |
| Publish to Marketplace | `npm run publish` |
| Local debug (F5) | Open project in VS Code → Press F5 |

---

## First-Time Setup (one-time only)

### 1. Install dependencies
```bash
npm install
```

### 2. Create your Marketplace publisher
→ https://marketplace.visualstudio.com/manage  
→ Sign in with Microsoft → Create Publisher → pick a publisher ID

### 3. Create a Personal Access Token (PAT)
→ https://dev.azure.com → User Settings → Personal Access Tokens  
→ New Token → Organization: All → Scope: **Marketplace → Manage** → Copy token

### 4. Set your publisher in `package.json`
```json
"publisher": "your-publisher-id"
```

### 5. Login with vsce
```bash
npx @vscode/vsce login your-publisher-id
# paste PAT when prompted
```

---

## Development Workflow

### Test locally (no install needed)
1. Open this project in VS Code
2. Press **F5**
3. A new "Extension Development Host" window opens
4. In that window: `Cmd+Shift+P` → type `PromptSpec`
5. All 6 commands will appear

### Run automated tests
```bash
npm run functional-test
# Expected: 6 passing
```

### Lint + type check
```bash
npm run compile
```

---

## Shipping a New Version

### Step 1 — Bump version in `package.json`
```json
"version": "0.0.2"   ← increment this
```

### Step 2 — Update CHANGELOG.md
Add a new entry at the top:
```markdown
## [0.0.2] - YYYY-MM-DD
### Added / Fixed / Changed
- ...
```

### Step 3 — Build + test
```bash
npm run compile
npm run functional-test
```

### Step 4 — Package and verify
```bash
npm run package:vsix
# → produces promptspec-0.0.2.vsix
```

Install it locally to verify before publishing:
1. `Cmd+Shift+P` → `Extensions: Install from VSIX...`
2. Select the new `.vsix`
3. Test all 6 commands manually

### Step 5 — Publish
```bash
npx @vscode/vsce publish
```

Extension goes live at:  
`https://marketplace.visualstudio.com/items?itemName=kamalpulaparthi.promptspec`

---

## Fix: Commands Not Appearing in Cmd+Shift+P

The extension only activates when installed or running via F5.

**If using VSIX:**
1. `Cmd+Shift+P` → `Extensions: Install from VSIX...`
2. Select `promptspec-0.0.1.vsix`
3. Click **Reload Window** when prompted
4. `Cmd+Shift+P` → type `PromptSpec` → 6 commands appear

**If developing (no install):**
- Press **F5** in VS Code with this project open
- Commands appear in the Extension Development Host window only

> ⚠️ Commands will NOT appear in the same VS Code window you're developing in unless the extension is installed.

---

## Common Errors

| Error | Fix |
|---|---|
| `not compatible with the IDE` | Lower `"vscode"` engine in `package.json` to match your VS Code version |
| `undefined_publisher` | Set `"publisher"` field in `package.json` to your real publisher ID |
| `No active text editor` | Open a file first before running any PromptSpec command |
| Commands not in palette | Extension not installed — install VSIX or press F5 |
| IPC socket path too long (macOS) | `.vscode-test.mjs` has `--user-data-dir .tmp-ud` fix already applied |

---

## Project Structure

```
ship-001/
├── src/
│   ├── extension.ts       ← command registration + insertTemplate logic
│   ├── templates.ts       ← all 6 prompt templates
│   └── test/
│       └── extension.test.ts  ← 6 integration tests
├── dist/
│   └── extension.js       ← compiled bundle (esbuild)
├── images/
│   └── icon.png           ← Marketplace icon (128x128)
├── test.js                ← functional test runner script
├── .vscode-test.mjs       ← test CLI config
├── esbuild.js             ← build config
├── package.json           ← extension manifest
├── tsconfig.json          ← TypeScript config
├── .vscodeignore          ← controls what's in the .vsix
├── .gitignore
├── LICENSE
├── README.md
├── CHANGELOG.md
└── SHIPPING.md            ← this file
```

---

## npm Scripts Reference

```bash
npm run compile          # type check + lint + build (development)
npm run package          # type check + lint + build (production/minified)
npm run compile-tests    # compile test files to out/
npm run functional-test  # run integration tests via vscode-test
npm run test             # alias for vscode-test
npm run check-types      # tsc type check only
npm run lint             # eslint src/ only
npm run watch            # watch mode (esbuild + tsc)
```
