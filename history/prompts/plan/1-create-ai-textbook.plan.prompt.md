---
id: 3
title: Create AI Textbook Plan
stage: plan
date: 2025-12-06
surface: agent
model: gemini-pro
feature: 1-create-ai-textbook
branch: main
user: Mahad Khan
command: /sp.plan
labels: [plan, architecture]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-create-ai-textbook/plan.md
tests:
  - none
---

## Prompt

```text
---
description: Execute the implementation planning workflow using the plan template to generate design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/bash/setup-plan.sh --json` from repo root and parse JSON for FEATURE_SPEC, IMPL_PLAN, SPECS_DIR, BRANCH. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'm Groot' (or double-quote if possible: "I'm Groot").

2. **Load context**: Read FEATURE_SPEC and `.specify/memory/constitution.md`. Load IMPL_PLAN template (already copied).

3. **Execute plan workflow**: Follow the structure in IMPL_PLAN template to:
   - Fill Technical Context (mark unknowns as "NEEDS CLARIFICATION")
   - Fill Constitution Check section from constitution
   - Evaluate gates (ERROR if violations unjustified)
   - Phase 0: Generate research.md (resolve all NEEDS CLARIFICATION)
   - Phase 1: Generate data-model.md, contracts/, quickstart.md
   - Phase 1: Update agent context by running the agent script
   - Re-evaluate Constitution Check post-design

4. **Stop and report**: Command ends after Phase 2 planning. Report branch, IMPL_PLAN path, and generated artifacts.

## Phases

### Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:

   ```text
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

### Phase 1: Design & Contracts

**Prerequisites:** `research.md` complete

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Agent context update**:
   - Run `.specify/scripts/bash/update-agent-context.sh gemini`
   - These scripts detect which AI agent is in use
   - Update the appropriate agent-specific context file
   - Add only new technology from current plan
   - Preserve manual additions between markers

**Output**: data-model.md, /contracts/*, quickstart.md, agent-specific file

## Key rules

- Use absolute paths
- ERROR on gate failures or unresolved clarifications

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


/sp.plan also edit 8 chapters to 7 remove the last chapter   # /sp.plan — Architecture & Design Plan
**Project:** Physical AI & Humanoid Robotics — AI-Native Textbook
**Goal:** Build a fully customized, professional Docusaurus textbook using Spec-Kit Plus & Claude Code.

---

## 1. **High-Level Architecture**

### **1.1 Book Technology Stack**
- **Docusaurus v3** (Docs theme, fully customized)
- **Custom UI Components**
- **Tailwind-like styling or custom CSS**
- **Spec-Kit Plus** for structured book creation
- **Claude Code** for chapter writing automation
- **GitHub Pages / Vercel** deployment

---

## 2. **Book Structure (Chapters + Subsections)**
Chapters are based strictly on course details.
Every chapter will have collapsible sidebar + sliding navigation.

### **Chapter 1 — Introduction to Physical AI**
- What is Physical AI?
- Embodied Intelligence
- Digital AI vs Real-World AI
- Sensor Systems Overview (LiDAR, IMU, Cameras)

### **Chapter 2 — ROS 2 Fundamentals (Robotic Nervous System)**
- ROS 2 Architecture
- Nodes, Topics, Services
- ROS 2 Workspaces & Packages


### **Chapter 3 — Robot Simulation with Gazebo & Unity**
- Gazebo Physics Simulation
- SDF / URDF Robot Descriptions
- Gravity, Collisions, Joint Physics


### **Chapter 4 — NVIDIA Isaac Platform**
- Isaac Sim Overview
- AI-Powered Perception
- Synthetic Data Generation


### **Chapter 5 — Humanoid Robotics Development**
- Robot Kinematics & Dynamics
- Bipedal Locomotion
- Balancing Algorithms
- Human-Robot Interaction

### **Chapter 6 — Vision-Language-Action (VLA) Systems**
- What is VLA?
- Using Whisper (Voice-to-Action)
- LLM-Driven Planning


### **Chapter 7 — Weekly Breakdown Study Guide**
- Weeks 1–2: Foundations
- Weeks 3–5: ROS2 Packages
- Weeks 6–7: Gazebo
- Weeks 8–10: Isaac
- Weeks 11–12: Humanoid Dev

## 3. **UI / UX Customization Plan**

### **3.1 Remove Docusaurus Default Content**
- Remove default **Getting Started**, **Tutorial**, **Blog**, **Markdown pages**
- Replace sidebar with **only your 8 chapters**
- Remove default footer text & navbar items

### **3.2 Add Professional Book Styling**
- Modern academic layout
- Dark/Light mode toggle
- Custom hero section with book title
- Professional sidebar with chapter numbering
- Clean typography (Inter, Roboto, etc.)
- Custom CSS for:
  - Chapter headers
  - Callout boxes
  - Code blocks
  - Tables

### **3.3 Interactive Sliding Sidebar**
- Each chapter expands → its subsections slide out
- Smooth transitions
- Persistent navigation

---

## 4. **Directory Layout**

/docs
/chapter1
/chapter2
/chapter3
/chapter4
/chapter5
/chapter6
/chapter7
/src
/components/custom-ui
/css/custom.css
sidebars.ts
docusaurus.config.js


---

## 5. **AI/Spec-Driven Workflow**

### **5.1 Use Spec-Kit Plus Commands**
- `/sp.constitution` → sets quality rules
- `/sp.specify` → defines structure
- `/sp.plan` → this file
- `/sp.tasks` → break into atomic tasks
- `/sp.implement` → automatically generate chapters

### **5.2 Claude Code Integration**
- Generate each chapter via Claude Code
- Use prompts like:
  **“Expand subsection ‘URDF Basics’ into a full textbook-style explanation with diagrams in Markdown.”**

---

## 6. **Deployment Plan**
- Host on **GitHub Pages**
- Continuous updates via GitHub Actions
- Custom domain optional (e.g., ai-robotics-book.vercel.app)

---

## 7. **Success Criteria**
- Clean, professional UI
- Fully custom Docusaurus theme
- 7 complete chapters
- No default content
- High-quality textbook writing
- Deployable and readable online

---

**End of `/sp.plan`**
```

## Response snapshot

The implementation plan for "Create AI Textbook Site" has been created at `specs/1-create-ai-textbook/plan.md`. The plan has been updated to reflect 7 chapters instead of 8, as requested.

## Outcome

- ✅ Impact: The implementation plan is created and aligned with user requirements.
- 🧪 Tests: none
- 📁 Files: Created `specs/1-create-ai-textbook/plan.md`.
- 🔁 Next prompts: None, waiting for user's next command.
- 🧠 Reflection: The user clarified that only the `plan.md` file should be created, and all other steps of the `/sp.plan` workflow should be skipped.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A

```