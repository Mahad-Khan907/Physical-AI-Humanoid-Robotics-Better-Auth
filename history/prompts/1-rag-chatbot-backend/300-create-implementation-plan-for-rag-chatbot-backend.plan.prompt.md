---
id: 300
title: Create Implementation Plan for RAG Chatbot Backend
stage: plan
date: 2025-12-07
surface: agent
model: gemini
feature: 1-rag-chatbot-backend
branch: 1-rag-chatbot-backend
user: desktop-cph7uqc\mahad khan
command: /sp.plan
labels: [plan, implementation, rag, chatbot]
links:
  spec: specs/1-rag-chatbot-backend/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/1-rag-chatbot-backend/plan.md
 - specs/1-rag-chatbot-backend/research.md
 - specs/1-rag-chatbot-backend/data-model.md
 - specs/1-rag-chatbot-backend/contracts/api.md
 - specs/1-rag-chatbot-backend/quickstart.md
 - .gemini/context/gemini
tests:
 - "none"
---

## Prompt

/sp.plan just updted sp.plan # backend/.sp.plan

project_plan:
  name: AI Book RAG Chatbot Implementation Plan
  description: Step-by-step plan to implement, test, and connect backend RAG Chatbot to frontend.

phases:

  - phase: Setup Backend
    description: |
      Create backend folder, environment, and initial files using .sp.specify.
    steps:
      - Create folder "backend" inside "my-hackathon"
      - Open Gemini CLI and SpecifyPlus in "backend"
      - Use .sp.specify to generate all files (main.py, agent.py, retrieving.py, ingestion.py, .env, etc.)
      - Fill in environment variables in .env (GEMINI_API_KEY, COHERE_API_KEY, QDRANT_API_KEY, QDRANT_URL)

  - phase: Ingest Book Content
    description: |
      Extract book content from frontend (sitemap), chunk, embed, and store in Qdrant.
    steps:
      - Open terminal in "backend"
      - Run ingestion.py:
        ```bash
        python ingestion.py
        ```
      - This will:
        - Download book pages from the sitemap
        - Extract text from each page
        - Chunk the text into smaller pieces
        - Generate embeddings using Cohere
        - Upload chunks and embeddings into Qdrant collection "humanoid_ai_book"
      - Verify in Qdrant Cloud dashboard that data is uploaded successfully

  - phase: Test Retrieval
    description: |
      Ensure retrieval works correctly by testing queries against Qdrant.
    steps:
      - Open Python console in backend or run a quick test:
        ```python
        from retrieving import retrieve
        print(retrieve("What is Physical AI?"))
        ```
      - Check that it returns relevant book text from Qdrant
      - Fix any embedding or collection issues if needed

  - phase: Setup RAG Chatbot Agent
    description: |
      Create an Agent to answer user questions using retrieved content.
    steps:
      - Run agent.py to test agent with a sample question:
        ```bash
        python agent.py
        ```
      - Ensure it calls `retrieve()` first and uses only retrieved content to answer
      - Verify that unknown questions return "I don't know"
      - Debug if model calls fail or response is empty

  - phase: Setup FastAPI Backend
    description: |
      Create API endpoints for frontend to communicate with the chatbot.
    steps:
      - Open main.py
      - FastAPI endpoint `/ask` is ready to take `question` as query parameter
      - Run FastAPI server:
        ```bash
        uvicorn main:app --reload
        ```
      - Test API using browser or Postman:
        ```
        http://127.0.0.1:8000/ask?question=What%20is%20Physical%20AI?
        ```
      - Confirm that it returns chatbot answers in JSON

  - phase: Connect Backend to Frontend
    description: |
      Add floating chat widget to Docusaurus frontend to communicate with backend API.
    steps:
      - Go to frontend folder: `C:\Users\Mahad Khan\Desktop\my-hackathon\ai-book`
      - Add a floating blue chat icon on all pages using Docusaurus React component:
        - Create a file `ChatWidget.js` in `src/components`
        - Example JSX structure:
          ```jsx
          import React, { useState } from 'react';
          import axios from 'axios';
          import './ChatWidget.css';

          export default function ChatWidget() {
            const [open, setOpen] = useState(false);
            const [messages, setMessages] = useState([]);
            const [input, setInput] = useState("");

            const sendMessage = async () => {
              if (!input) return;
              setMessages([...messages, { sender: "user", text: input }]);
              const response = await axios.get(`http://127.0.0.1:8000/ask?question=${encodeURIComponent(input)}`);
              setMessages(prev => [...prev, { sender: "bot", text: response.data.answer }]);
              setInput("");
            };

            return (
              <>
                <div className="chat-icon" onClick={() => setOpen(!open)}>💬</div>
                {open && (
                  <div className="chat-window">
                    <div className="chat-messages">
                      {messages.map((msg, i) => <div key={i} className={msg.sender}>{msg.text}</div>)}
                    </div>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about book..." />
                    <button onClick={sendMessage}>Send</button>
                  </div>
                )}
              </>
            );
          }
          ```
        - Add CSS `ChatWidget.css` to style floating blue icon and chat box
        - Import `ChatWidget` in `src/theme/Layout.js` or appropriate layout wrapper
      - When user clicks the chat icon, chat window opens
      - User question is sent to `/ask` endpoint
      - Backend returns answers based only on book content

  - phase: Test Full Flow
    description: |
      Ensure everything works end-to-end.
    steps:
      - Run FastAPI backend
      - Open frontend in dev mode (`npm start`)
      - Click floating chat icon
      - Ask book-related questions
      - Check that chatbot answers using retrieved content
      - Confirm "I don't know" for unrelated questions
      - Debug frontend/backend connection if CORS or network issues arise

  - phase: Deployment (Optional)
    description: |
      Deploy backend and frontend so users can access chatbot online.
    steps:
      - Backend: Deploy on cloud (Vercel, Render, Railway, etc.)
      - Frontend: Deploy Docusaurus on Vercel
      - Update API URL in ChatWidget to deployed backend
      - Test live chat functionality

## Response snapshot

Implementation planning complete for feature 'AI Book RAG Chatbot Backend'.

- **Branch**: `1-rag-chatbot-backend`
- **Implementation Plan**: `specs/1-rag-chatbot-backend/plan.md`
- **Generated Artifacts**:
    - Research findings: `specs/1-rag-chatbot-backend/research.md`
    - Data model definition: `specs/1-rag-chatbot-backend/data-model.md`
    - API contracts: `specs/1-rag-chatbot-backend/contracts/api.md`
    - Quickstart guide: `specs/1-rag-chatbot-backend/quickstart.md`
- **Agent Context Updated**: The `.gemini/context/gemini` file has been updated with relevant technologies.

The feature is now ready for task breakdown and implementation.

## Outcome

- ✅ Impact: High. Provides a detailed plan for implementing the feature.
- 🧪 Tests: N/A.
- 📁 Files: `plan.md`, `research.md`, `data-model.md`, `contracts/api.md`, `quickstart.md`, `.gemini/context/gemini` were created/updated.
- 🔁 Next prompts: The user is now ready to proceed with `/sp.tasks`.
- 🧠 Reflection: The `bash` script for setup failed, requiring manual simulation. The process of generating documentation artifacts was successful, converting the user's detailed project plan into the required output files.

## Evaluation notes (flywheel)

- Failure modes observed: Shell command 'bash' not found during setup-plan.sh.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
