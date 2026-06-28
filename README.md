# Flint

**Flint** is a lightweight VS Code extension that instantly inserts structured prompt templates into your editor — no AI, no API, no configuration required.

Strike the flint. Get your template. Start writing.

---

## Installation

**From Marketplace**

Search `Flint` in the VS Code Extensions sidebar, or:
```
ext install kamalpulaparthi.flint
```

**From VSIX (local)**

1. Download `flint-0.0.3.vsix`
2. `Cmd+Shift+P` → `Extensions: Install from VSIX...`
3. Select the file → Reload

---

## Commands

Open the Command Palette (`Cmd+Shift+P`) and type `Flint`:

| Command | Description |
|---|---|
| `Flint: Feature` | Insert a structured Feature prompt template |
| `Flint: Bug Fix` | Insert a structured Bug Fix prompt template |
| `Flint: Code Review` | Insert a structured Code Review prompt template |
| `Flint: Refactor` | Insert a structured Refactor prompt template |
| `Flint: Optimize` | Insert a structured Optimize prompt template |
| `Flint: Security Review` | Insert a structured Security Review prompt template |

---

## Usage

1. Open any file (`.md`, `.txt`, or code file)
2. Place cursor where you want the template
3. `Cmd+Shift+P` → run a `Flint: ...` command
4. Template inserts at cursor — fill in the sections

---

## Design Principles

- **No AI** — pure template insertion, zero network calls
- **No API** — works fully offline
- **No webviews** — native VS Code editor API only
- **No settings UI** — install and use immediately

---

## Roadmap

- [ ] Custom templates via `settings.json`
- [ ] Snippet variable support (`${TM_FILENAME}`, etc.)
- [ ] More templates: Test, Architecture, Documentation
- [ ] Multi-cursor insertion

---

## License

MIT
