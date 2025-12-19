---
id: 1
title: Update Project Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: gemini-pro
feature: none
branch: main
user: Mahad Khan
command: /sp.constitution
labels: [constitution, documentation]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
tests:
  - none
---

## Prompt

```text
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


/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution

/sp.constitution---
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


/sp.constitution # Project: Physical AI & Humanoid Robotics — AI-Native Textbookcont
================================================================================
The book MUST cover ONLY the course content below (no extra topics):

1. Physical AI Foundations & Embodied Intelligence
2. ROS 2 Fundamentals
3. Robot Simulation (Gazebo + Unity)
4. NVIDIA Isaac Platform
5. Humanoid Kinematics, Dynamics & Locomotion
6. Vision-Language-Action Robotics
7. Capstone: Autonomous Humanoid Pipeline
8. Hardware Requirements & Lab Architecture

Each chapter must be broken into 3–6 well-defined **subsections/slides**.

Out of scope:
✗ RAG Chatbot
✗ FastAPI
✗ Qdrant / Neon
✗ Sign-in/Auth
✗ Deployment pipelines
✗ Any non-course features

================================================================================
3. WRITING QUALITY STANDARDS
================================================================================
The textbook must follow these writing principles:

✔ Clear, concise, technical explanations
✔ Use diagrams, tables, lists where applicable
✔ Use real-world examples and robot workflows
✔ Avoid academic fluff — focus on teaching
✔ Every technical term must be explained on first use
✔ Each chapter ends with:
   – Learning Outcomes
   – Key Terms
   – Short Practical Exercises

Tone:
• Professional but beginner-friendly
• No unnecessary storytelling
• Must feel like an official engineering textbook

================================================================================
4. STRUCTURAL REQUIREMENTS (DOCUSAURUS)
================================================================================
• Use Docusaurus v3 documentation structure.
• All chapters appear under `/docs/` with unique IDs.
• Sidebars defined in `sidebars.ts` using category collapsible sections.
• Each chapter contains its own folder:
  Example:
  /docs/
    chapter1/
      intro.md
      section1.md
      section2.md
      section3.md

• Chapters must support **sliding navigation**:
  - Clicking a chapter expands child pages (sections).

================================================================================
5. SPEC-KIT PLUS STANDARDS
================================================================================
• All content must be produced through Spec-Driven Development:
  - `/sp.clarify` for collecting unanswered questions
  - `/sp.plan` for creating design plans
  - `/sp.tasks` for generating atomic build tasks
  - `/sp.implement` for generating actual chapter files

Rules:
✔ No chapter may be written without a plan
✔ Tasks must be small, atomic, independently verifiable
✔ All changes tracked through Spec-Kit’s syncing workflow

Quality Constraints:
• Consistent formatting
• All chapters fully edited and validated
• No placeholder text allowed in final output

================================================================================
6. TECHNOLOGY CONSTRAINTS
================================================================================
Mandatory Tools:
✔ Docusaurus
✔ GitHub Pages
✔ Claude Code
✔ Spec-Kit Plus
✔ Markdown + MDX components

Forbidden Tools:
✗ FastAPI
✗ Python backends
✗ RAG/chat systems
✗ External databases

================================================================================
7. CHAPTER LIST (FIXED & FINAL)
================================================================================
**Chapter 1 — Foundations of Physical AI**
• Embodied Intelligence
• Digital vs Physical AI
• Sensor Overview

**Chapter 2 — ROS 2: The Robotic Nervous System**
• Nodes, Topics, Services
• Python Integration (rclpy)
• URDF for Humanoids

**Chapter 3 — Digital Twin Simulation (Gazebo)**
• Physics simulation
• SDF/URDF
• Sensor Simulation

**Chapter 4 — Unity for Human–Robot Interaction**
• High-fidelity environments
• Interaction pipelines

**Chapter 5 — NVIDIA Isaac Platform**
• Isaac Sim
• Isaac ROS
• VSLAM and Navigation

**Chapter 6 — Humanoid Robotics**
• Kinematics & Dynamics
• Bipedal Locomotion
• Manipulation & Hands

**Chapter 7 — Vision-Language-Action Robotics**
• Whisper Voice Commands
• LLM Planning
• Multi-modal Robotics

**Chapter 8 — Capstone: The Autonomous Humanoid**
• Command → Planning → Navigation → Perception → Manipulation
• Final integrated pipeline

================================================================================
8. COMPLETENESS & ACCEPTANCE CRITERIA
================================================================================
The textbook is complete only if:

✔ 8 chapters fully written
✔ Each chapter has 3–6 subsections
✔ All chapters connected with Docusaurus sidebar
✔ Deployed to GitHub Pages
✔ Zero broken links
✔ Zero TODOs or placeholders
✔ All Spec-Kit phases completed (constitution → clarify → plan → tasks → implement)

================================================================================
END OF CONSTITUTION
================================================================================
```

## Response snapshot

The project constitution `.specify/memory/constitution.md` has been updated to version `1.0.0`. It now includes detailed principles covering course content scope, writing quality standards, structural requirements for Docusaurus, Spec-Kit Plus standards, technology constraints, a fixed chapter list, and completeness & acceptance criteria. The `plan-template.md` file was also updated to include a "Constitution Check" reflecting these new principles.

## Outcome

- ✅ Impact: The project constitution is updated and aligned with user requirements.
- 🧪 Tests: none
- 📁 Files: Updated `.specify/memory/constitution.md` and `.specify/templates/plan-template.md`.
- 🔁 Next prompts: None, waiting for user's next command.
- 🧠 Reflection: The `create-phr.sh` script did not create the file as expected, requiring a manual fallback.

## Evaluation notes (flywheel)

- Failure modes observed: `create-phr.sh` script did not output the path or create the file reliably.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Debug `create-phr.sh` script or improve agent's ability to locate newly created files.
