# Research Findings: AI Book RAG Chatbot Backend

**Feature Branch**: `1-rag-chatbot-backend`
**Date**: 2025-12-07
**Plan**: [./plan.md](./plan.md)

## Decisions and Rationale

Based on the detailed project description provided, the following technical decisions are adopted. The clarity and specificity of the initial input minimized the need for further research into core technology choices.

---

### Decision: Python 3.12 as the primary development language.
**Rationale**: Explicitly stated in `.python-version` and implied by `requirements.txt` and `pyproject.toml`. Python is well-suited for AI/ML tasks, web services (FastAPI), and data processing.
**Alternatives Considered**: None, as Python was clearly specified.

---

### Decision: FastAPI for the backend API framework.
**Rationale**: Explicitly stated in `main.py` and `requirements.txt`. FastAPI provides high performance, automatic OpenAPI documentation, and a modern developer experience, which aligns with building efficient web services.
**Alternatives Considered**: Flask, Django. FastAPI was chosen for its performance benefits and asynchronous capabilities, which are advantageous for I/O-bound tasks like external API calls and database interactions.

---

### Decision: Uvicorn as the ASGI server for FastAPI.
**Rationale**: Explicitly stated in `main.py`'s `if __name__ == "__main__":` block. Uvicorn is a fast ASGI server, recommended for production deployments of FastAPI applications.
**Alternatives Considered**: Gunicorn (often used with Uvicorn workers), Hypercorn. Uvicorn was implicitly chosen by the project structure.

---

### Decision: Cohere (embed-english-v3.0) for generating text embeddings.
**Rationale**: Explicitly stated and used in `ingestion.py` and `retrieving.py`. Cohere's embedding models are highly capable for semantic search and retrieval tasks, which are central to the RAG system.
**Alternatives Considered**: OpenAI embeddings, Sentence Transformers (Hugging Face). Cohere was the chosen provider in the initial project setup.

---

### Decision: Qdrant for the vector database.
**Rationale**: Explicitly stated and used in `ingestion.py` and `retrieving.py`. Qdrant is a robust and scalable vector database suitable for storing and querying large collections of vector embeddings efficiently.
**Alternatives Considered**: Pinecone, Weaviate, ChromaDB. Qdrant was the specified choice in the project setup.

---

### Decision: Trafilatura for text extraction from HTML.
**Rationale**: Explicitly stated and used in `ingestion.py`. Trafilatura is a powerful library for extracting clean main text and metadata from web pages, crucial for reliable content ingestion.
**Alternatives Considered**: BeautifulSoup, custom HTML parsing. Trafilatura was the specified choice.

---

### Decision: Python-dotenv for environment variable management.
**Rationale**: Explicitly used for loading `.env` in `agent.py`, `retrieving.py`, and `ingestion.py`. This is a standard and secure practice for managing API keys and other sensitive configuration, aligning with the "Security & Environment" constitution principle.
**Alternatives Considered**: OS environment variables directly. Python-dotenv provides a convenient way to manage local development environment variables.

---

### Decision: OpenAI Agents / ChatKit framework for the RAG agent.
**Rationale**: Explicitly stated in `agent.py`. This framework provides a structured approach to building agents that can utilize tools (like the `retrieve` function) and manage conversational flow, which is ideal for the RAG chatbot's requirements.
**Alternatives Considered**: LangChain, LlamaIndex. The provided `agent.py` already uses `agents` (presumably referring to the OpenAI Agents framework as specified in the context).

---

### Decision: Gemini 2.0 Flash as the large language model.
**Rationale**: Explicitly stated as `model="gemini-2.0-flash"` in `agent.py`. This model provides a balance of performance and cost-effectiveness suitable for interactive chatbot applications.
**Alternatives Considered**: Other Gemini models, GPT models. Gemini 2.0 Flash was the specified model.

## Conclusion

The initial project description was sufficiently detailed to inform the core technical stack without requiring extensive exploratory research. The chosen technologies are well-suited for building a performant and scalable RAG chatbot backend. All critical dependencies and tools are aligned with the project's functional requirements.
