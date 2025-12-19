---
id: 1
title: Update Constitution with Feature-Specific Governance
stage: constitution
date: 2025-12-15
surface: agent
model: Gemini
feature: bonus-features
branch: main
user: Mahad Khan
command: /sp.constitution
labels: ["constitution", "governance", "phr", "bonus-features"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - ".specify/memory/constitution.md"
  - "history/prompts/bonus-features/"
tests:
  - "none"
---

## Prompt

---
description: Create or update the project constitution from interactive or provided principle inputs, ensuring all dependent templates stay in sync
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project constitution at `.specify/memory/constitution.md`. This file is a TEMPLATE containing placeholder tokens in square brackets (e.g. `[PROJECT_NAME]`, `[PRINCIPLE_1_NAME]`). Your job is to (a) collect/derive concrete values, (b) fill the template precisely, and (c) propagate any amendments across dependent artifacts.

Follow this execution flow:

1. Load the existing constitution template at `.specify/memory/constitution.md`.
   - Identify every placeholder token of the form `[ALL_CAPS_IDENTIFIER]`.
   **IMPORTANT**: The user might require less or more principles than the ones used in the template. If a number is specified, respect that - follow the general template. You will update the doc accordingly.

2. Collect/derive values for placeholders:
   - If user input (conversation) supplies a value, use it.
   - Otherwise infer from existing repo context (README, docs, prior constitution versions if embedded).
   - For governance dates: `RATIFICATION_DATE` is the original adoption date (if unknown ask or mark TODO), `LAST_AMENDED_DATE` is today if changes are made, otherwise keep previous.
   - `CONSTITUTION_VERSION` must increment according to semantic versioning rules:
     - MAJOR: Backward incompatible governance/principle removals or redefinitions.
     - MINOR: New principle/section added or materially expanded guidance.
     - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
   - If version bump type ambiguous, propose reasoning before finalizing.

3. Draft the updated constitution content:
   - Replace every placeholder with concrete text (no bracketed tokens left except intentionally retained template slots that the project has chosen not to define yet—explicitly justify any left).
   - Preserve heading hierarchy and comments can be removed once replaced unless they still add clarifying guidance.
   - Ensure each Principle section: succinct name line, paragraph (or bullet list) capturing non‑negotiable rules, explicit rationale if not obvious.
   - Ensure Governance section lists amendment procedure, versioning policy, and compliance review expectations.

4. Consistency propagation checklist (convert prior checklist into active validations):
   - Read `.specify/templates/plan-template.md` and ensure any "Constitution Check" or rules align with updated principles.
   - Read `.specify/templates/spec-template.md` for scope/requirements alignment—update if constitution adds/removes mandatory sections or constraints.
   - Read `.specify/templates/tasks-template.md` and ensure task categorization reflects new or removed principle-driven task types (e.g., observability, versioning, testing discipline).
   - Read each command file in `.specify/templates/commands/*.md` (including this one) to verify no outdated references (agent-specific names like CLAUDE only) remain when generic guidance is required.
   - Read any runtime guidance docs (e.g., `README.md`, `docs/quickstart.md`, or agent-specific guidance files if present). Update references to principles changed.

5. Produce a Sync Impact Report (prepend as an HTML comment at top of the constitution file after update):
   - Version change: old → new
   - List of modified principles (old title → new title if renamed)
   - Added sections
   - Removed sections
   - Templates requiring updates (✅ updated / ⚠ pending) with file paths
   - Follow-up TODOs if any placeholders intentionally deferred.

6. Validation before final output:
   - No remaining unexplained bracket tokens.
   - Version line matches report.
   - Dates ISO format YYYY-MM-DD.
   - Principles are declarative, testable, and free of vague language ("should" → replace with MUST/SHOULD rationale where appropriate).

7. Write the completed constitution back to `.specify/memory/constitution.md` (overwrite).

8. Output a final summary to the user with:
   - New version and bump rationale.
   - Any files flagged for manual follow-up.
   - Suggested commit message (e.g., `docs: amend constitution to vX.Y.Z (principle additions + governance update)`).

Formatting & Style Requirements:

- Use Markdown headings exactly as in the template (do not demote/promote levels).
- Wrap long rationale lines to keep readability (<100 chars ideally) but do not hard enforce with awkward breaks.
- Keep a single blank line between sections.
- Avoid trailing whitespace.

If the user supplies partial updates (e.g., only one principle revision), still perform validation and version decision steps.

If critical info missing (e.g., ratification date truly unknown), insert `TODO(<FIELD_NAME>): explanation` and include in the Sync Impact Report under deferred items.

Do not create a new template; always operate on the existing `.specify/memory/constitution.md` file.

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.


/sp.constitution update my constitution /sp.constitution

You are extending an existing, fully functional Docusaurus-based project.
This project already contains seven book chapters, a RAG AI chatbot, and a
complete SpecifyPlus workflow.

The objective is to integrate authentication and personalization features
as a bonus extension, without modifying or breaking existing functionality.

Core principles:

- The authentication system must be added to the existing project, not built as a new project.
- Better Auth must be used as the authentication solution.
- Neon PostgreSQL must be used as the database.
- Environment variables for Better Auth and Neon PostgreSQL will be provided
  externally and must be consumed securely without hardcoding.
- An existing Better Auth backend server must be reused wherever possible.
- Signup must collect software background and hardware background from users.
- User background data must be stored securely and correctly for future personalization.

Frontend and UX principles:

- The frontend UI must be clean, minimal, professional, and production-ready.
- No broken UI states, unhandled errors, or confusing user flows are acceptable.
- Authentication errors must be handled gracefully with clear, user-friendly messages.
- Authentication logic must not pollute documentation or chapter content.

Architecture and process principles:

- The system must remain compatible with both localhost and production deployments.
- The architecture must support future personalization of book content and RAG responses.
- Simplicity, clarity, and maintainability are more important than unnecessary features.
- Existing project structure and conventions must be respected at all times.

Prompt History Record (PHR) requirements:

- All authentication-related prompts must be recorded as Prompt History Records.
- A `history/prompt/bonus-features` directory must be created.
- All prompts related to Better Auth, Neon PostgreSQL, login, signup, and personalization
  must be saved inside the `bonus-features` folder.
- Prompt history must clearly reflect the evolution of design, specification, planning,
  and implementation decisions for the bonus features.

## Response snapshot

I have updated the project constitution to version 2.1.0. The principles have been reorganized and a new, specific governance section for Prompt History Records (PHRs) has been added. I also created the new `history/prompts/bonus-features/` directory as required. The PHR for this action is located at `history/prompts/bonus-features/1-update-constitution-with-feature-specific-governance.constitution.prompt.md`.

## Outcome

- ✅ Impact: Minor. Refined principles and added specific PHR governance.
- 🧪 Tests: N/A
- 📁 Files: Updated constitution and created a new directory for bonus feature prompts.
- 🔁 Next prompts: Agent will now follow the new PHR routing rules.
- 🧠 Reflection: The new constitution provides more specific governance, especially for PHR routing. The agent must now adhere to these new rules for prompts related to bonus features.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
