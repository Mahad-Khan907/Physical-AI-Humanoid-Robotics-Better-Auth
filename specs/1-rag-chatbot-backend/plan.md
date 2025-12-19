# Implementation Plan: AI Book RAG Chatbot Backend

**Branch**: `1-rag-chatbot-backend` | **Date**: 2025-12-07 | **Spec**: [./spec.md](./spec.md)
**Input**: Feature specification from `specs/1-rag-chatbot-backend/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the implementation steps for a RAG chatbot backend for the "Physical AI & Humanoid Robotics" textbook. The primary goal is to provide an API endpoint that answers user questions by retrieving relevant content from the textbook and generating responses based solely on that content. The plan covers content ingestion, retrieval mechanisms, agent integration, API exposure, frontend connection, and testing.

## Technical Context

**Language/Version**: Python 3.12 (from .python-version and pyproject.toml)
**Primary Dependencies**: FastAPI, Uvicorn, Cohere (for embeddings), Qdrant (vector database), Requests (for web scraping), Trafilatura (for text extraction), python-dotenv
**Storage**: Qdrant (vector database) for storing text chunks and embeddings.
**Testing**: `pytest` (standard for Python projects, though not explicitly mentioned in user input, it's a reasonable default for core modules).
**Target Platform**: Linux server (standard for Python web backends).
**Project Type**: Web application (backend component).
**Performance Goals**:
    - Ingestion: Process 100 textbook pages in under 5 minutes.
    - API Endpoint (`/ask`): p99 latency under 3 seconds.
**Constraints**:
    - Must use provided sitemap URL for content ingestion.
    - AI agent must only answer based on retrieved content.
    - All sensitive information must be loaded from environment variables (`.env`).
    - Responses must be in JSON format.
**Scale/Scope**:
    - Textbook content (hundreds of pages, potentially thousands of chunks).
    - API usage for a single textbook's RAG chatbot.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**I. Modular Design**: The plan adheres to modular design by separating ingestion, retrieval, agent, and API logic into distinct Python files/modules (`ingestion.py`, `retrieving.py`, `agent.py`, `main.py`). This aligns with the constitution's emphasis on organizing into separate modules. (✅ Pass)

**II. RAG Chatbot Integration**: The plan explicitly states that the AI agent must only answer based on retrieved text and use tools to fetch relevant content from Qdrant. This directly implements the constitution's principle. (✅ Pass)

**III. Task-Based Development**: The user's input itself is structured into phases and steps, mirroring a task-based approach. The plan will further detail these into specific tasks. This aligns with the constitution. (✅ Pass)

**IV. API Exposure**: The plan includes setting up FastAPI endpoints, specifically an `/ask` endpoint for frontend interaction, which directly satisfies this constitution principle. (✅ Pass)

**V. Security & Environment**: The plan mandates storing API keys and sensitive data in `.env` and explicitly avoids hardcoding them, aligning perfectly with the constitution's security principle. (✅ Pass)

**VI. Testing**: The plan includes phases for testing retrieval, the RAG agent, and the full end-to-end flow. While `pytest` is assumed for unit tests, the overall approach to verification aligns with the constitution's emphasis on testing core modules. (✅ Pass)

**VII. Documentation**: The plan implies the existence of a `README.md` (from the user's initial project structure) and will ensure instructions for setup, running, and testing are present. (✅ Pass)

## Project Structure

### Documentation (this feature)

```text
specs/1-rag-chatbot-backend/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
backend/
├── .env                 # Environment variables for API keys
├── .python-version      # Python version for pyenv / environment
├── main.py              # FastAPI app to serve the chatbot API
├── agent.py             # RAG Chatbot agent logic
├── retrieving.py        # Module to retrieve relevant text from Qdrant
├── ingestion.py         # Module to ingest book content
├── requirements.txt     # Python dependencies
└── pyproject.toml       # Optional pyproject.toml for package info

# Frontend folder structure for reference, as it's part of the plan
# (located outside of the current 'backend' directory)
# C:\Users\Mahad Khan\Desktop\my-hackathon\ai-book (Docusaurus frontend)
# ├── src/
# │   └── components/
# │       └── ChatWidget.js
# └── src/theme/
#     └── Layout.js

```

**Structure Decision**: The project uses a single `backend/` directory for Python services and an external `ai-book` (Docusaurus) directory for the frontend. The backend modules are logically separated into `main.py` (API entry), `agent.py` (RAG logic), `retrieving.py` (vector DB interaction), and `ingestion.py` (data loading). This aligns with a modular web application structure.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

N/A. All constitution principles are met by the proposed plan.
