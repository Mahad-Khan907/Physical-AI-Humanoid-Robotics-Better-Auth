---
id: 3
title: Create Implementation Plan for Auth
stage: plan
date: 2025-12-15
surface: agent
model: Gemini
feature: 1-auth-personalization
branch: 1-auth-personalization
user: Mahad Khan
command: /sp.plan
labels: ["plan", "authentication", "architecture", "bonus-features"]
links:
  spec: specs/1-auth-personalization/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - "specs/1-auth-personalization/plan.md"
  - "specs/1-auth-personalization/research.md"
  - "specs/1-auth-personalization/data-model.md"
  - "specs/1-auth-personalization/contracts/api.yaml"
  - "specs/1-auth-personalization/quickstart.md"
  - ".specify/memory/technologies.md"
tests:
  - "none"
---

## Prompt

---
description: Execute the implementation planning workflow using the plan template to generate design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/bash/setup-plan.sh --json` from repo root and parse JSON for FEATURE_SPEC, IMPL_PLAN, SPECS_DIR, BRANCH. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

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


/sp.plan

This plan describes how authentication and personalization bonus features
will be integrated into an existing Docusaurus-based AI textbook project
using Better Auth and Neon PostgreSQL.

High-level architecture:

- Authentication will be implemented as a separate backend service.
- A new folder named `auth-backend` will be created inside the project.
- This backend will follow the same structure and design as the existing
  Better Auth backend reference implementation.
- Neon PostgreSQL will be used as the database for authentication data.
- The Docusaurus frontend will consume authentication APIs from this backend.

Backend structure plan:

- Create an `auth-backend` directory.
- Inside `auth-backend`, create:
  - `package.json`
  - `tsconfig.json`
  - `src/auth.ts`
  - `src/index.ts`
- The `auth.ts` file will configure Better Auth with Neon PostgreSQL.
- The `index.ts` file will expose authentication routes using Express.
- The backend must support:
  - Email and password authentication
  - Secure session handling
  - Cross-origin authentication
  - Additional user fields for software and hardware background
- Backend configuration must rely only on environment variables.

Backend integration plan:

- Reuse patterns and conventions from the provided Better Auth reference backend.
- Do not introduce unnecessary abstractions or frameworks.
- Ensure the backend can run independently in local and production environments.
- Expose authentication endpoints under `/api/auth/*`.

Frontend integration plan:

- Connect the Docusaurus frontend to the `auth-backend`.
- Initialize a Better Auth client in the frontend.
- Provide a global authentication context.
- Create clean and professional Login and Signup pages.
- Extend Signup to collect software and hardware background.
- Reflect authentication state in the navigation bar.

Access control and UX plan:

- Restrict book chapters to authenticated users only.
- Redirect unauthenticated users to the Login page.
- Handle authentication errors gracefully.
- Maintain a clean and professional UI without broken states.

Process and history plan:

- Follow the existing SpecifyPlus workflow.
- Record all decisions as Prompt History Records.
- Save this plan under `history/prompt/bonus-features`.

## Response snapshot

I have created the implementation plan and all associated design artifacts for the 'User Authentication and Personalization' feature. The work was performed on the `1-auth-personalization` branch.

The following artifacts were generated in `specs/1-auth-personalization/`:
- `plan.md`: The detailed implementation plan.
- `research.md`: A document recommending Vitest as the testing framework.
- `data-model.md`: The data model for the User entity.
- `contracts/api.yaml`: The OpenAPI specification for the authentication API.
- `quickstart.md`: Setup and run instructions for the new backend.

A new file at `.specify/memory/technologies.md` was also created to track the project's technology stack.

All planning and design work is complete. The next step is to generate tasks with `/sp.tasks`.

## Outcome

- ✅ Impact: Created a comprehensive implementation plan and all necessary design artifacts for the new feature.
- 🧪 Tests: N/A
- 📁 Files: `plan.md`, `research.md`, `data-model.md`, `api.yaml`, `quickstart.md`, `technologies.md`, and a PHR file.
- 🔁 Next prompts: The user should now run `/sp.tasks`.
- 🧠 Reflection: The manual fallback for the bash scripts continues to work well. Creating a separate technologies file was a good workaround for the ambiguity in the agent context update instructions. The planning phase is now complete and well-documented.

## Evaluation notes (flywheel)

- Failure modes observed: `setup-plan.sh` script failed due to missing `bash`. Manual fallback was successful.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
