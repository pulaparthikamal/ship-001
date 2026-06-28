# Flint Prompts

**Flint** instantly inserts structured, headings-only prompt templates into your editor. No fluff, no configuration, just fast prompt structures.

---

## ⚡ The Problem & What Flint Solves

### The Problem:
* **Token Bloat**: Copied prompt templates are often loaded with verbose descriptions, instructions, and examples that waste your LLM's context window and increase token cost.
* **Repetition**: Writing structured prompt sections (Goal, Constraints, Context, Output) manually every single time is slow.

### What Flint Solves:
* **Token Savings**: Inserts clean, minimal, headings-only structures. You only feed the AI what's actually relevant to your task.
* **Context Preservation**: Keeps your LLM focused on your actual code/problem, not the template's guidelines.

---

## 🚀 How to Use (Simple & Fast)

There are two correct ways to use Flint in **any file**:

### Method 1: The Slash Command `/` (Recommended)
1. Open any file in your editor (e.g. `notes.md`, `test.py`).
2. Type `/` followed by the template prefix (e.g., `/feat` or `/dbg`).
3. Press **Enter** or **Tab** to insert.

*Example:* Type `/dbg` and press Enter to instantly get:
```text
ISSUE:

EXPECTED:

ACTUAL:

LAST WORKING STATE:
...
```

### Method 2: Command Palette
1. Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux).
2. Type `Flint:` and select your command.

---

## 📝 Available Prompts

| Prefix | Name | Purpose |
|---|---|---|
| `/ai` | General AI | Standard input/output/constraints formula |
| `/dbg` | Debugging | Isolate issues, actual vs expected, error logs |
| `/feat` | Feature Dev | Define goal, stack, architecture, edge cases |
| `/review` | Code Review | Audit for scalability, complexity, and bugs |
| `/arch` | Architecture | System goals, trade-offs, and design benefits |
| `/api` | API Design | Endpoint, method, request/response, validation |
| `/refactor` | Refactoring | Target debt and plan specific code improvements |
| `/sec` | Security Review | OWASP Top 10, auth, injection risk check |
| `/perf` | Optimization | Latency target, metrics, and bottlenecks |
| `/agent` | AI Agent | Role, tools, decision rules, failure cases |
| `/learn` | Learning | Target topic, knowledge gaps, application |
| `/decision` | Decision-Making | Facts, risks, second-order effects |
| `/rca` | Root Cause | Symptom tracking and fix hypotheses |
| `/sys` | System Design | Traffic, databases, load balancing, caching |
| `/research` | Research | Hypotheses, unknowns, and risk assessment |
| `/improve` | Prompt Tuning | Audit existing prompts for better output |
| `/biz` | Business Logic | Target user flow, rules, failure scenarios |
| `/ui` | UI / UX | Design constraints and structural layouts |
| `/deploy` | Deployment | Environment debugging, logs, variables |
| `/context` | Context Eng. | File reference rules and expected AI behavior |

---

## 🔧 Installation

**From VS Code Extensions sidebar:**
Search for **`Flint Prompts`** and click **Install**.

**From CLI:**
```bash
code --install-extension kamalpulaparthi.promptspec
```

---

## 🛡️ Design Principles

* **Fully Offline**: Works without network calls, external APIs, or AI keys.
* **No Webviews**: Native VS Code editor API for maximum speed and zero memory overhead.

---

## License

MIT

