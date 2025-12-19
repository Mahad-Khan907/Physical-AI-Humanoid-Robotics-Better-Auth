# Tasks: User Authentication and Personalization

**Input**: Design documents from `specs/1-auth-personalization/`
**Prerequisites**: `plan.md`, `spec.md`

## Phase 1: Backend Setup

**Purpose**: Initialize the Node.js + TypeScript backend for authentication.

- [X] T001 Create the `auth-backend` directory in the project root.
- [X] T002 [P] Inside `auth-backend`, initialize a new Node.js project by creating a `package.json` file (`npm init -y`).
- [X] T003 [P] Add a `tsconfig.json` file to `auth-backend` for TypeScript configuration.
- [X] T004 [P] Create the directory structure `auth-backend/src`.
- [X] T005 Install required backend dependencies in `auth-backend`: `express`, `better-auth`, `pg`.
- [X] T006 Install required backend development dependencies in `auth-backend`: `typescript`, `@types/express`, `@types/node`, `vitest`, `nodemon`, `ts-node`.
- [X] T007 Create the initial Express server setup in `auth-backend/src/index.ts`.
- [X] T008 Configure Better Auth with the Neon PostgreSQL adapter in `auth-backend/src/auth.ts`, ensuring it reads from environment variables.

---

## Phase 2: Frontend Foundational Setup

**Purpose**: Integrate the authentication client and context into the Docusaurus frontend.

- [X] T009 [P] Install the Better Auth client library in the root Docusaurus project.
- [X] T010 [P] Create a new file for the authentication context provider, e.g., `src/contexts/AuthContext.tsx`.
- [X] T011 Modify `src/theme/Root.tsx` to wrap the entire application with the new authentication context provider.

---

## Phase 3: User Story 1 - New User Registration (Priority: P1)

**Goal**: Allow a new user to create an account.
**Independent Test**: A user can fill out and submit the signup form and see a success state or error message.

- [X] T012 [P] [US1] Create the UI for the Signup page at `src/pages/signup.tsx`, including fields for email, password, software background, and hardware background.
- [X] T013 [P] [US1] Implement the `POST /api/auth/signup` endpoint in `auth-backend/src/index.ts` to handle new user registration.
- [X] T014 [US1] Connect the frontend Signup form to the backend API, handling form submission, loading states, and displaying success or error messages.

---

## Phase 4: User Story 2 - Existing User Login (Priority: P1)

**Goal**: Allow a registered user to sign in.
**Independent Test**: A user can submit the login form and be redirected to the homepage in a logged-in state.

- [X] T015 [P] [US2] Create the UI for the Login page at `src/pages/login.tsx`.
- [X] T016 [P] [US2] Implement the `POST /api/auth/login` endpoint in `auth-backend/src/index.ts`.
- [X] T017 [US2] Connect the frontend Login form to the backend API, handling form submission and session creation.
- [X] T018 [P] [US2] Implement the `GET /api/auth/session` endpoint in `auth-backend/src/index.ts` to allow the frontend to check the current session status.
- [X] T019 [US2] Update the navigation bar in Docusaurus to conditionally display "Login/Signup" or "Logout" based on the authentication state from the context.

---

## Phase 5: User Story 3 - Content Access Control (Priority: P2)

**Goal**: Protect book chapters from unauthenticated access.
**Independent Test**: An unauthenticated user visiting a chapter URL is redirected to the login page.

- [X] T020 [US3] Create a client-side wrapper or Higher-Order Component (HOC) that checks for an active user session from the AuthContext.
- [X] T021 [US3] Apply the session-checking wrapper to the Docusaurus layout or individual chapter pages to enforce authentication.
- [X] T022 [US3] Implement the redirect logic within the wrapper to send unauthenticated users to `/login`.

---

## Phase 6: User Story 4 - User Logout (Priority: P2)

**Goal**: Allow an authenticated user to log out.
**Independent Test**: Clicking the "Logout" button clears the user's session and updates the UI to a logged-out state.

- [X] T023 [P] [US4] Implement the `POST /api/auth/logout` endpoint in `auth-backend/src/index.ts`.
- [X] T024 [US4] Implement the "Logout" button functionality in the frontend navigation bar to call the logout endpoint and clear the local authentication state.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and improvements to ensure quality.

- [X] T025 [P] Review and implement graceful error handling for all form submissions and API requests (**P-9**).
- [X] T026 [P] Manually test all UI flows to ensure there are no broken states or glitches (**P-8**).
- [X] T027 [P] Validate that user background data is correctly stored in the Neon PostgreSQL database upon signup.
- [X] T028 [P] Write unit and integration tests for the `auth-backend` using Vitest, focusing on endpoint logic.
- [X] T029 Update all relevant documentation, including `README.md` and `quickstart.md`, with final setup and usage instructions.

---

## Dependencies & Execution Order

- **Phase 1 (Backend Setup)** must be completed before any frontend integration work that relies on the API.
- **Phase 2 (Frontend Foundational Setup)** can run in parallel with Phase 1.
- **User Story Phases (3-6)** depend on the completion of both Phase 1 and Phase 2.
  - User Story 1 (Signup) and User Story 2 (Login) can be worked on in parallel after the foundational setup.
  - User Story 3 (Access Control) depends on User Story 2 (Login) being functional.
  - User Story 4 (Logout) depends on User Story 2 (Login) being functional.
- **Phase N (Polish)** should be done after all user stories are functionally complete.

## Implementation Strategy

### MVP First (User Stories 1 & 2)

1. Complete Phase 1: Backend Setup.
2. Complete Phase 2: Frontend Foundational Setup.
3. Complete Phase 3: User Story 1 (Signup).
4. Complete Phase 4: User Story 2 (Login).
5. **STOP and VALIDATE**: At this point, users can sign up and log in. This is a core, testable MVP.
