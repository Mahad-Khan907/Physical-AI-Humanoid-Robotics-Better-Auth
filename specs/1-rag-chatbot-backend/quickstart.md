# Quickstart Guide: AI Book RAG Chatbot Backend

**Feature Branch**: `1-rag-chatbot-backend`
**Date**: 2025-12-07
**Plan**: [./plan.md](./plan.md)
**Spec**: [./spec.md](./spec.md)

## Overview

This guide provides quick steps to set up, run, and test the AI Book RAG Chatbot backend.

## Prerequisites

*   Python 3.12 installed (check with `python --version`)
*   `pip` (Python package installer)
*   Access to Cohere and Qdrant services, with API keys and Qdrant URL.

## Setup

1.  **Clone the repository and navigate to the `backend` directory**:

    ```bash
    git clone <repository_url>
    cd <repository_name>/backend
    ```

2.  **Create a Python virtual environment and activate it**:

    ```bash
    python -m venv .venv
    # On Windows:
    # .venv\Scripts\activate
    # On macOS/Linux:
    # source .venv/bin/activate
    ```

3.  **Install dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure environment variables**:
    Create a `.env` file in the `backend` directory with your API keys and Qdrant URL:

    ```
    GEMINI_API_KEY="your_gemini_api_key_here"
    COHERE_API_KEY="your_cohere_api_key_here"
    QDRANT_API_KEY="your_qdrant_api_key_here"
    QDRANT_URL="your_qdrant_url_here"
    ```
    *Replace placeholders with your actual keys and URL.*

## Running Ingestion

This step populates your Qdrant instance with content from the textbook.

1.  **Run the ingestion script**:

    ```bash
    python ingestion.py
    ```
    This script will:
    *   Fetch URLs from the sitemap defined in `ingestion.py`.
    *   Extract text from each page.
    *   Chunk the text and generate embeddings using Cohere.
    *   Store the chunks and embeddings in the `humanoid_ai_book` collection in Qdrant.

2.  **Verify Data**: Optionally, check your Qdrant Cloud dashboard (if applicable) to ensure the `humanoid_ai_book` collection is created and populated with data.

## Starting the API Server

1.  **Run the FastAPI application**:

    ```bash
    uvicorn main:app --reload
    ```
    The `--reload` flag enables auto-reloading of the server on code changes, useful for development.

2.  The API will be accessible at `http://127.0.0.1:8000`.

## Testing the Chatbot API

Once the API server is running and Qdrant is populated, you can test the `/ask` endpoint.

1.  **Open your web browser or a tool like Postman/Insomnia**:

2.  **Send a GET request to the `/ask` endpoint**:
    For example:
    ```
    http://127.00.1:8000/ask?question=What%20is%20Physical%20AI%3F
    ```
    *Replace the question with any query related to the textbook content.*

3.  **Verify the response**:
    You should receive a JSON response similar to this:
    ```json
    {
        "answer": "Physical AI refers to artificial intelligence systems that interact directly with the physical world through sensors and actuators..."
    }
    ```
    If the question is out of scope, you might get a response like:
    ```json
    {
        "answer": "I don't know."
    }
    ```

## Connecting with Frontend

If you are using the companion Docusaurus frontend, ensure you update the API URL in its `ChatWidget.js` component to point to your running backend (e.g., `http://127.0.0.1:8000`).
