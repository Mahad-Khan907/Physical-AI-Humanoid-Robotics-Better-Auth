# Data Model: AI Book RAG Chatbot Backend

**Feature Branch**: `1-rag-chatbot-backend`
**Date**: 2025-12-07
**Plan**: [./plan.md](./plan.md)
**Spec**: [./spec.md](./spec.md)

## Entities

### Content Chunk

Represents a segment of text extracted from the textbook content. This is the atomic unit stored in the vector database for retrieval.

**Attributes**:

*   `id`: A unique identifier for the chunk (e.g., integer).
*   `text`: The actual textual content of the chunk (string).
*   `url`: The source URL from which the text chunk was extracted (string). This allows tracing back to the original document.
*   `embedding`: A vector representation of the `text` attribute, used for semantic similarity search (list of floats).

**Relationships**:

*   None directly within the application's data model, but conceptually linked to the source document (via `url`).

**Validation Rules (from FR-002, FR-003, FR-004, FR-005)**:

*   `text` must not be empty after extraction.
*   `embedding` must be a valid vector of a predefined dimension (e.g., 1024 as implied by Cohere's `embed-english-v3.0` model).
*   `url` must be a valid URL string.

---

### Query

Represents a user's question submitted to the RAG system. While not persistently stored as a primary entity in the same way as `Content Chunk`, it's a crucial transient data structure.

**Attributes**:

*   `text`: The user's original question (string).
*   `embedding`: A vector representation of the `text` attribute, used to query the vector database (list of floats).

**Relationships**:

*   Used to retrieve `Content Chunk` entities.

**Validation Rules (from FR-007, FR-008)**:

*   `text` must not be empty.
*   `embedding` must be a valid vector of the same dimension as `Content Chunk` embeddings.
