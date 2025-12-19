# Data Model for "Create AI Textbook Site"

## Entities

### Chapter

-   **Fields**:
    -   `id`: string (e.g., "chapter-1")
    -   `title`: string (e.g., "Introduction to Physical AI")
    -   `sections`: array of Section
-   **Relationships**: A Chapter has many Sections.

### Section

-   **Fields**:
    -   `id`: string (e.g., "what-is-physical-ai")
    -   `title`: string (e.g., "What is Physical AI?")
    -   `content`: Markdown string
-   **Relationships**: A Section belongs to one Chapter.

### Textbook Site

-   **Fields**:
    -   `title`: string (e.g., "Physical AI & Humanoid Robotics — Course Book")
    -   `subtitle`: string (e.g., "AI-Native Technical Textbook (Spec-Driven)")
    -   `chapters`: array of Chapter
-   **Relationships**: The Textbook Site has many Chapters.
