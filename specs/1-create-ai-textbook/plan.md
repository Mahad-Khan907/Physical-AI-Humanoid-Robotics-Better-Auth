# /sp.plan — Architecture & Design Plan
**Project:** Physical AI & Humanoid Robotics — AI-Native Textbook
**Goal:** Build a fully customized, professional Docusaurus textbook using Spec-Kit Plus & Claude Code.

---

## 1. **High-Level Architecture**

### **1.1 Book Technology Stack**
- **Docusaurus v3** (Docs theme, fully customized)
- **Custom UI Components**
- **Tailwind-like styling or custom CSS**
- **Spec-Kit Plus** for structured book creation
- **Claude Code** for chapter writing automation
- **GitHub Pages / Vercel** deployment

---

## 2. **Book Structure (Chapters + Subsections)**
Chapters are based strictly on course details.
Every chapter will have collapsible sidebar + sliding navigation.

### **Chapter 1 — Introduction to Physical AI**
- What is Physical AI?
- Embodied Intelligence
- Digital AI vs Real-World AI
- Sensor Systems Overview (LiDAR, IMU, Cameras)

### **Chapter 2 — ROS 2 Fundamentals (Robotic Nervous System)**
- ROS 2 Architecture
- Nodes, Topics, Services
- ROS 2 Workspaces & Packages


### **Chapter 3 — Robot Simulation with Gazebo & Unity**
- Gazebo Physics Simulation
- SDF / URDF Robot Descriptions
- Gravity, Collisions, Joint Physics


### **Chapter 4 — NVIDIA Isaac Platform**
- Isaac Sim Overview
- AI-Powered Perception
- Synthetic Data Generation


### **Chapter 5 — Humanoid Robotics Development**
- Robot Kinematics & Dynamics
- Bipedal Locomotion
- Balancing Algorithms
- Human-Robot Interaction

### **Chapter 6 — Vision-Language-Action (VLA) Systems**
- What is VLA?
- Using Whisper (Voice-to-Action)
- LLM-Driven Planning

## 3. **UI / UX Customization Plan**

### **3.1 Remove Docusaurus Default Content**
- Remove default **Getting Started**, **Tutorial**, **Blog**, **Markdown pages**
- Replace sidebar with **only your 7 chapters**
- Remove default footer text & navbar items

### **3.2 Add Professional Book Styling**
- Modern academic layout
- Dark/Light mode toggle
- Custom hero section with book title
- Professional sidebar with chapter numbering
- Clean typography (Inter, Roboto, etc.)
- Custom CSS for:
  - Chapter headers
  - Callout boxes
  - Code blocks
  - Tables

### **3.3 Interactive Sliding Sidebar**
- Each chapter expands → its subsections slide out
- Smooth transitions
- Persistent navigation

---

## 4. **Directory Layout**

/docs
/chapter1
/chapter2
/chapter3
/chapter4
/chapter5
/chapter6
/src
/components/custom-ui
/css/custom.css
sidebars.ts
docusaurus.config.js


---

## 5. **AI/Spec-Driven Workflow**

### **5.1 Use Spec-Kit Plus Commands**
- `/sp.constitution` → sets quality rules
- `/sp.specify` → defines structure
- `/sp.plan` → this file
- `/sp.tasks` → break into atomic tasks
- `/sp.implement` → automatically generate chapters

### **5.2 Claude Code Integration**
- Generate each chapter via Claude Code
- Use prompts like:
  **“Expand subsection ‘URDF Basics’ into a full textbook-style explanation with diagrams in Markdown.”**

---

## 6. **Deployment Plan**
- Host on **GitHub Pages**
- Continuous updates via GitHub Actions
- Custom domain optional (e.g., ai-robotics-book.vercel.app)

---

## 7. **Success Criteria**
- Clean, professional UI
- Fully custom Docusaurus theme
- 7 complete chapters
- No default content
- High-quality textbook writing
- Deployable and readable online

---

**End of `/sp.plan`**