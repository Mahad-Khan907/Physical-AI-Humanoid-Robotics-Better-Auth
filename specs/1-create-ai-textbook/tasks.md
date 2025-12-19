# Tasks: Create AI Textbook Site

**Input**: Design documents from `specs/1-create-ai-textbook/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup

- [X] T001 Create a new Docusaurus project
- [X] T002 [P] Remove the default `blog` directory
- [X] T003 [P] Remove the default `docs` directory content
- [X] T004 [P] Remove the default `src/pages/markdown-page.md`

## Phase 2: User Story 1 - Create Textbook Site UI

**Goal**: Create a professional, modern, and clean UI for the textbook site.
**Independent Test**: The deployed site can be visually inspected for theme, layout, and removal of default Docusaurus elements.

- [X] T005 [US1] Create a custom homepage at `src/pages/index.tsx` with the title "Physical AI & Humanoid Robotics — Course Book" and subtitle "AI-Native Technical Textbook (Spec-Driven)".
- [X] T006 [US1] Create a custom CSS file at `src/css/custom.css` with styles for a professional, modern UI, including a gradient header, clean spacing, modern navbar, smoother shadows, modern typography, wider content width, and improved spacing.
- [X] T007 [US1] Update `docusaurus.config.ts` to remove the blog, and default tutorial sidebar.
- [X] T008 [US1] Update the `docusaurus.config.ts` footer to include the author's name and hackathon details.
- [X] T009 [US1] Update the `docusaurus.config.ts` navbar to remove default items.
- [X] T009a [US1] Update the homepage to remove default features and add chapter links with improved UI.

## Phase 3: User Story 2 - Access Chapter Content

**Goal**: Create the structure for the 7 chapters and make them accessible through the sidebar.
**Independent Test**: The sidebar can be navigated to all 7 chapters, and each chapter shows its sub-sections correctly with sliding transitions.

- [X] T010 [US2] Create the directory structure for the 7 chapters inside the `docs` directory.
- [X] T011 [P] [US2] Create placeholder files for each section of Chapter 1 in `docs/chapter1/`.
- [X] T012 [P] [US2] Create placeholder files for each section of Chapter 2 in `docs/chapter2/`.
- [X] T013 [P] [US2] Create placeholder files for each section of Chapter 3 in `docs/chapter3/`.
- [X] T014 [P] [US2] Create placeholder files for each section of Chapter 4 in `docs/chapter4/`.
- [X] T015 [P] [US2] Create placeholder files for each section of Chapter 5 in `docs/chapter5/`.
- [X] T016 [P] [US2] Create placeholder files for each section of Chapter 6 in `docs/chapter6/`.
- [X] T016a [P] [US2] Create placeholder files for each section of Chapter 7 in `docs/chapter7/`.
- [X] T017 [US2] Update `sidebars.ts` to reflect the 7-chapter structure.

## Phase 4: Polish & Cross-Cutting Concerns

- [X] T018 Run a full build of the Docusaurus site to ensure there are no errors.
- [X] T019 Review the deployed site for any visual inconsistencies.
- [X] T020 Review and update each chapter's content to ensure it is between 200 and 700 lines long.
