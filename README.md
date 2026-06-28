# Flint Prompts

**Flint** instantly inserts structured, headings-only prompt templates into your editor. No fluff, no token bloat, just lightning-fast prompt structures.

---

## ⚡ The Problem & What Flint Solves

* **Unstructured Prompts**: LLMs output low-quality results without a clear structure (Goal, Context, Edge Cases, Output).
* **Token Waste**: Copy-pasting verbose prompt templates wastes hundreds of input tokens on explanation boilerplate.
* **Flint's Solution**: Flint inserts headings-only prompt skeletons that use minimum tokens and force the AI to focus entirely on your code context.

---

## 🚀 How to Use (Simple & Fast)

Flint works in **any file type** (`.md`, `.txt`, `.ts`, `.py`, etc.) with two quick methods:

### Method 1: Autocomplete Slash Commands (Recommended)
1. Open any file.
2. Type `/` followed by the prompt prefix (e.g. `/feat`, `/dbg`, `/arch`).
3. Press **Enter** or **Tab** to instantly insert the template structure.

#### 💡 Keyboard Shortcuts:
* **Trigger Suggestions Manually**: Press `Ctrl+Space` if the dropdown does not pop up automatically.
* **Navigate Templates**: Use the Up and Down arrow keys to view prompt documentation in the autocomplete hover card.

---

## 🔧 Installation Methods

### For Visual Studio Code
* **Search in UI**: Open the Extensions sidebar (`Cmd+Shift+X`), search for **`Flint Prompts`**, and click **Install**.
* **Via Terminal Command**:
  ```bash
  code --install-extension kamalpulaparthi.promptspec
  ```

### For Antigravity IDE
* **Search in UI**: Open the Extensions sidebar inside Antigravity IDE, search for **`Flint Prompts`**, and click **Install**.
* **Via Terminal Command**:
  ```bash
  "/Applications/Antigravity IDE.app/Contents/Resources/app/bin/antigravity-ide" --install-extension kamalpulaparthi.promptspec
  ```

---

## 📝 Available Prompts & Skeletons

| Slash Trigger | Template Name | Heading Skeleton Inserted |
|---|---|---|
| `/ai` | General AI | Goal, Context, Constraints, Input, Expected Output |
| `/dbg` | Debugging | Issue, Expected, Actual, Last Working, Hypotheses, Affected Files, Logs, Tested |
| `/feat` | Feature Dev | Goal, Stack, Current Architecture, Constraints, Inputs, Edge Cases, Expected Output |
| `/review` | Code Review | Review checklist: bugs, security, scalability, maintainability, edge cases, complexity |
| `/arch` | Architecture | System Goal, Limitations, Proposed Arch, Scalability, Security, Trade-offs, Benefits |
| `/api` | API Design | Goal, Endpoint, Method, Request Body, Expected Response, Validation, Auth, Error Cases |
| `/refactor` | Refactoring | Goal, Current Problems, Technical Debt, Constraints, Files Involved, Expected Improvements |
| `/sec` | Security Review | Security audit: auth, authorization, injection, exposure, config, validation, rate limits |
| `/perf` | Optimization | Goal, Current Bottleneck, Metrics, Affected Modules, Hypotheses, Targets, Improvements |
| `/agent` | AI Agent | Agent Role, Primary Objective, Tools, Constraints, Decision Rules, Failures, Success Criteria |
| `/learn` | Learning | Topic, Current Understanding, Knowledge Gaps, Real-World Apps, Exercises, Outcomes |
| `/decision` | Decision-Making | Decision, Options, Known Facts, Assumptions, Risks, Second-Order Effects, Recommendation |
| `/rca` | Root Cause | Problem, Start Time, What Changed, Observed Symptoms, Possible Causes, Fix Plan |
| `/sys` | System Design | Requirements, Traffic, Database, API, Caching, Load Balancing, Failures, Scalability Plan |
| `/research` | Research | Topic, Objective, Known Facts, Unknowns, Hypotheses, Risk of Assumptions, Expected Insights |
| `/improve` | Prompt Tuning | Current Prompt, Current Problems, Desired Improvements, Missing Context, Target Quality |
| `/biz` | Business Logic | Goal, User Flow, Business Rules, Edge Cases, Failure Scenarios, Data Requirements, Output |
| `/ui` | UI / UX | Goal, Target Users, User Problems, Responsive Rules, A11y Rules, Design Constraints, Structure |
| `/deploy` | Deployment | Environment, Deployment Target, Error, Last Success, Infrastructure, Logs, Tested |
| `/context` | Context Eng. | Project Type, Persistent Context Files, Temporary Context, Constraints, Reusable Patterns |

---

## 🛡️ Design Principles

* **Fully Offline**: 100% offline, zero network requests, no AI API keys required.
* **Extremely Lightweight**: Built purely on the native VS Code Completion and Snippet APIs (no memory-heavy webviews).

---

## 📜 Changelog

See the full changelog in the [CHANGELOG.md](file:///Users/kamalpulaparthi/Documents/projects/shippingProducts/ship-001/CHANGELOG.md) file.

## License

MIT
