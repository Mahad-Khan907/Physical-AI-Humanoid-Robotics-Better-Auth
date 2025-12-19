## /sp.constitution — Project: Physical AI & Humanoid Robotics — AI-Native Textbook + AI Tutor Platform

**Version:** 1.1.0  
**Updated Date:** 2025-12-09  
**Owner:** Mahad Khan  
**CLI Tooling:** ✅ Gemini CLI (Official)  
**History:** Previous versions of constitution, specs, tasks, and plans are preserved. This is an update.

---

## 1. SYSTEM COMPLETION STATUS

The following systems are **COMPLETED and LOCKED**:

- ✅ Frontend AI-Native Textbook (Docusaurus) — 7 chapters completed  
- ✅ Backend AI Tutor / RAG Chatbot (FastAPI + Qdrant + Neon) — COMPLETED  
- ✅ Existing chapters & content — COMPLETED  
- ✅ RAG ingestion pipeline — COMPLETED  

🚨 **NO SPEC, TASK, OR AGENT MAY MODIFY THESE COMPLETED SYSTEMS.**  

All remaining work is **BONUS FEATURE IMPLEMENTATION ONLY**.

---

## 2. BONUS FEATURES (NEW HACKATHON RULES)

Participants can earn **up to 50 extra points per feature**. These are **optional but required for full points**:

### 2.1 Better Auth / Signup & Signin

**Objective:** Implement full authentication via [Better Auth](https://www.better-auth.com/).  

**Requirements:**

- Signup, Signin, Logout  
- Persistent session handling  
- Protected routes  
- During signup, collect user profile:  
  - Software Background — Beginner / Intermediate / Advanced  
  - Hardware Background — Beginner / Intermediate / Advanced  
  - Experience Level — Student / Developer / Engineer  
- Data securely stored, token-based sessions, readable by backend  
- No plaintext passwords  

---

### 2.2 Content Personalization

**Objective:** Enable users to personalize content **at the start of each chapter** using their profile data.  

**Requirements:**

- Button-triggered personalization  
- Frontend-only implementation  
- Original content remains unchanged  
- Chapter structure unchanged  
- AI chatbot tone may adapt  
- Facts remain consistent  

---

### 2.3 Urdu Translation

**Objective:** Logged-in users can translate chapters into Urdu via a button.  

**Requirements:**

- Dynamic translation without overwriting original English content  
- Toggle between English ↔ Urdu  
- No duplicate chapters  

---

### 2.4 Reusable Intelligence (Agents)

**Objective:** Implement reusable agents for **content generation, validation, QA, and knowledge extraction**.  

**Requirements:**

- Gemini CLI sub-agents only  
- Must be reusable and documented  
- Callable via CLI  
- Must NOT modify locked frontend or backend systems  

---

## 3. CHAPTER & COURSE SCOPE

**Completed Chapters (Locked):**

1. Physical AI Foundations & Embodied Intelligence  
2. ROS 2 Fundamentals  
3. Robot Simulation (Gazebo + Unity)  
4. NVIDIA Isaac Platform  
5. Humanoid Kinematics, Dynamics & Locomotion  
6. Vision-Language-Action Robotics  
7. Capstone: Autonomous Humanoid Pipeline  

**Additional Notes:**  

- Each chapter must have 3–6 subsections/slides  
- All chapters are connected in Docusaurus sidebar  
- Base content complete; only bonus features may modify behavior dynamically  

---

## 4. GOVERNANCE & SPEC HISTORY

- Previous constitution, specs, tasks, and plans are **preserved**  
- This document is an **update** only  
- Gemini CLI is the only allowed tool for implementing bonus features  
- No Github automation required; manual push permitted  

---

## 5. COMPLETENESS & ACCEPTANCE CRITERIA

**For Base System (100 points):**

- ✅ 7 chapters completed (frontend)  
- ✅ Backend RAG Chatbot operational  
- ✅ RAG ingestion pipeline complete  

**For Bonus Points (50 points each):**

- Better Auth / Signup & Signin — optional  
- Content Personalization — optional  
- Urdu Translation — optional  
- Reusable Agents — optional  

**Total possible points:** 100 (base) + 200 (bonus) = 300  

---

## 6. FINAL NOTES

- Only bonus features may be implemented  
- All locked systems remain untouched  
- Spec history maintained; no new directories created  
- This constitution is **version 1.1.0** reflecting bonus feature update for the new hackathon

---

**END OF UPDATED `/sp.constitution`**