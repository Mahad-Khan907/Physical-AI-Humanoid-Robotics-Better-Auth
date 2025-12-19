# API Contracts: AI Book RAG Chatbot Backend

**Feature Branch**: `1-rag-chatbot-backend`
**Date**: 2025-12-07
**Plan**: [../plan.md](../plan.md)
**Spec**: [../spec.md](../spec.md)

## Endpoints

---

### GET /ask

**Description**: Provides an interface for users to query the RAG chatbot and receive answers based on the textbook content.

**Functional Requirements Addressed**: FR-006, FR-007, FR-008, FR-009, FR-010, FR-011, FR-012

**Request**:

*   **Method**: `GET`
*   **Path**: `/ask`
*   **Query Parameters**:
    *   `question` (Type: `string`, Required: `true`): The user's question to the RAG chatbot.

**Example Request**:

```
GET /ask?question=What%20are%20the%20main%20principles%20of%20Physical%20AI%3F
```

**Response**:

*   **Content Type**: `application/json`
*   **Success (200 OK)**:
    ```json
    {
        "answer": "The main principles of Physical AI are ..."
    }
    ```
    *   **Attributes**:
        *   `answer` (Type: `string`): The synthesized answer from the RAG chatbot based on retrieved content.
*   **Error (400 Bad Request)**: If the `question` parameter is missing or empty.
    ```json
    {
        "detail": "Question parameter is required."
    }
    ```
*   **Error (500 Internal Server Error)**: For unexpected server-side errors during processing or external service failures.
    ```json
    {
        "detail": "An unexpected error occurred. Please try again later."
    }
    ```

**Example Response**:

```json
{
    "answer": "Physical AI refers to artificial intelligence systems that interact directly with the physical world through sensors and actuators, often embodied in robots or other physical agents. Key principles include embodiment, interaction, and learning through physical experience."
}
```

---

### POST /ingest (Optional)

**Description**: *This endpoint is optional based on the user's input. The primary plan suggests running `ingestion.py` directly. However, for a more robust system, an API trigger for ingestion can be considered.*

**Functional Requirements Addressed**: FR-001 (if implemented via API)

**Request**:

*   **Method**: `POST`
*   **Path**: `/ingest`
*   **Body**: (Optional) Could include parameters like `sitemap_url` if not hardcoded, or `force_reingest` flags.

**Example Request**:

```
POST /ingest
```

**Response**:

*   **Content Type**: `application/json`
*   **Success (202 Accepted)**:
    ```json
    {
        "message": "Ingestion process initiated successfully."
    }
    ```
*   **Error (500 Internal Server Error)**: For unexpected server-side errors.
    ```json
    {
        "detail": "Failed to initiate ingestion process."
    }
    ```
