# Tasks: AI Book RAG Chatbot Backend

**Input**: Design documents from `/specs/1-rag-chatbot-backend/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The current plan does not explicitly request TDD or test generation tasks, but implies verification through manual steps. Test tasks can be added in future iterations if a more formal testing approach is required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/` (relative to `my-hackathon` root)
- Current feature is `backend` part of a web app.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and environment setup.

- [ ] T001 Create Python virtual environment for backend in `backend/.venv`
- [ ] T002 Install Python dependencies from `backend/requirements.txt`
- [ ] T003 Configure environment variables in `backend/.env` (GEMINI_API_KEY, COHERE_API_KEY, QDRANT_API_KEY, QDRANT_URL)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core utility functions and data store setup that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T004 Implement `get_embedding(text)` function in `backend/retrieving.py` using Cohere API
- [ ] T005 Implement `create_collection()` function in `backend/ingestion.py` to initialize Qdrant collection "humanoid_ai_book"
- [ ] T006 Implement `save_chunk(chunk, chunk_id, url)` function in `backend/ingestion.py` to store data in Qdrant

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Content Ingestion (Priority: P1) 🎯 MVP

**Goal**: Populate the knowledge base from the online textbook using the sitemap.

**Independent Test**: Run `python ingestion.py` and verify that Qdrant is populated with content chunks.

### Implementation for User Story 1

- [ ] T007 [P] [US1] Implement `get_all_urls(sitemap_url)` function in `backend/ingestion.py` to parse sitemap XML
- [ ] T008 [P] [US1] Implement `extract_text(url)` function in `backend/ingestion.py` using Trafilatura
- [ ] T009 [P] [US1] Implement `chunk_text(text, max_chars)` function in `backend/ingestion.py`
- [ ] T010 [US1] Implement `ingest_book()` main logic in `backend/ingestion.py` to orchestrate fetching, extracting, chunking, embedding, and saving (depends on T004, T005, T006, T007, T008, T009)
- [ ] T011 [US1] Add `if __name__ == "__main__":` block to `backend/ingestion.py` to call `ingest_book()`

**Checkpoint**: User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Question Answering API (Priority: P2)

**Goal**: Provide an API endpoint for users to ask questions and receive RAG-generated answers.

**Independent Test**: Send a GET request to `http://127.0.0.1:8000/ask?question=...` and verify the response.

### Implementation for User Story 2

- [ ] T012 [P] [US2] Implement `retrieve(query)` function in `backend/retrieving.py` to query Qdrant (depends on T004)
- [ ] T013 [P] [US2] Setup `AsyncOpenAI` provider and `OpenAIChatCompletionsModel` for Gemini in `backend/agent.py`
- [ ] T014 [US2] Define `Agent` with instructions and `retrieve` tool in `backend/agent.py` (depends on T012, T013)
- [ ] T015 [US2] Initialize `FastAPI` app in `backend/main.py`
- [ ] T016 [US2] Implement `/ask` GET endpoint in `backend/main.py` to use the RAG agent (depends on T014)
- [ ] T017 [US2] Add `if __name__ == "__main__":` block to `backend/main.py` to run `uvicorn` server

**Checkpoint**: User Story 2 should be fully functional and testable independently.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories, including testing and frontend integration.

- [ ] T018 Integrate frontend `ChatWidget.js` component in `my-hackathon/ai-book/src/components/ChatWidget.js`
- [ ] T019 Style frontend `ChatWidget.css` in `my-hackathon/ai-book/src/components/ChatWidget.css`
- [ ] T020 Import `ChatWidget` in `my-hackathon/ai-book/src/theme/Layout.js`
- [ ] T021 Manual test of full E2E flow (backend & frontend)
- [ ] T022 Document usage in `backend/README.md`
- [ ] T023 Review `backend/requirements.txt` and `backend/pyproject.toml` for consistency

---

## Dependencies & Execution Order

### Phase Dependencies

-   **Setup (Phase 1)**: No dependencies - can start immediately.
-   **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
-   **User Story 1 (Phase 3)**: Depends on Foundational phase completion.
-   **User Story 2 (Phase 4)**: Depends on Foundational phase completion.
-   **Polish (Phase 5)**: Depends on all desired user stories being complete.

### User Story Dependencies

-   **User Story 1 (P1 - Content Ingestion)**: Can start after Foundational (Phase 2). No dependencies on other stories.
-   **User Story 2 (P2 - Question Answering API)**: Can start after Foundational (Phase 2). Integrates with `retrieve` function from Phase 2.

### Within Each User Story

-   Core utility functions (e.g., embedding, Qdrant interaction) are foundational.
-   Ingestion components (URL fetching, text extraction, chunking) precede the main `ingest_book` orchestration.
-   Retrieval function precedes agent definition.
-   Agent definition precedes API endpoint implementation.

## Parallel Opportunities

-   **Setup Phase**: All tasks (T001-T003) can theoretically run in parallel if environment/tooling allows, though typically performed sequentially by one developer.
-   **Foundational Phase**: T004, T005, T006 involve different files/components and could be tackled in parallel.
-   **User Story 1 (Content Ingestion)**: Tasks T007, T008, T009 can be implemented in parallel as they concern distinct functions. T010 and T011 depend on these.
-   **User Story 2 (Question Answering API)**: Tasks T012, T013 can be implemented in parallel. T014, T015, T016, T017 depend on these and each other sequentially.
-   **Polish Phase**: T018, T019, T020 are frontend-related and can be parallelized with backend tasks (T021, T022, T023).

## Parallel Example: Foundational Phase

```bash
# Developer 1: Implement get_embedding
- [ ] T004 Implement `get_embedding(text)` function in `backend/retrieving.py`

# Developer 2: Implement create_collection and save_chunk
- [ ] T005 Implement `create_collection()` function in `backend/ingestion.py`
- [ ] T006 Implement `save_chunk(chunk, chunk_id, url)` function in `backend/ingestion.py`
```

## Implementation Strategy

### MVP First (User Story 1 Only for Backend)

1.  Complete Phase 1: Setup (T001-T003)
2.  Complete Phase 2: Foundational (T004-T006)
3.  Complete Phase 3: User Story 1 (T007-T011)
4.  **STOP and VALIDATE**: Verify ingestion populates Qdrant. This provides a functional backend component.

### Incremental Delivery (Full Backend)

1.  Complete Setup + Foundational → Foundation ready (T001-T006)
2.  Add User Story 1 (T007-T011) → Test independently → Verify Qdrant population.
3.  Add User Story 2 (T012-T017) → Test independently → Verify API responsiveness and RAG answers.
4.  Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup (T001-T003) and Foundational (T004-T006) together.
2.  Once Foundational is done:
    *   Developer A: User Story 1 (T007-T011) - focuses on ingestion logic.
    *   Developer B: User Story 2 (T012-T017) - focuses on retrieval, agent, and API.
3.  Collaboration in Phase 5 for frontend integration (T018-T020) and overall testing (T021-T023).

---

## Notes

-   Tasks are explicitly linked to files and functions for direct action.
-   Interim commits after each task are recommended.
-   The frontend connection tasks (T018-T020) are placed in the polish phase as they involve a separate project, making the backend independently shippable after Phase 4.
