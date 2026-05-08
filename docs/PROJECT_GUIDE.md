# 🚀 Urbancode Project Guide

Welcome to the **Urbancode Next.js** project! This document is designed to help every team member—from developers to designers—understand the project structure, features, and coding standards.

---

## 📖 1. Project Overview
Urbancode is a premium IT education and services platform built with **Next.js 15**. It integrates an advanced learning management system (LMS), an online coding compiler, and an AI-driven student assistant.

### Key Pillars:
- **Education**: Courses for all ages, including specialized tracks for kids.
- **Technology**: Real-time coding practice with a built-in compiler.
- **Innovation**: AI-powered features for automated support.
- **Business**: Portfolio and client service showcases.

---

## 🛠 2. Technical Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **State/Logic**: React 19 (Hooks & Context API)
- **Database**: MongoDB via [Mongoose](https://mongoosejs.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS + Bootstrap 5 (Responsive Layouts)
- **AI**: Google Gemini Pro API (@google/generative-ai)
- **Editor**: Monaco Editor (The engine behind VS Code)

---

## 📂 3. Directory Structure
Understanding where everything lives is crucial for efficient development.

```text
urbancode-nextjs/
├── app/                  # Next.js App Router (Routes & Pages)
│   ├── api/              # Backend API endpoints (Mongoose routes)
│   ├── compiler/         # Online Compiler module
│   ├── components/       # Core UI components (Buttons, Modals, Forms)
│   ├── data/             # Static JSON data (Course info, FAQs)
│   ├── kids-courses/     # Specialized UI for young learners
│   └── globals.css       # Global styles and design tokens
├── components/           # Shared reusable components
├── compiler/             # Logic and engines for the code execution
├── docs/                 # Documentation (BRD, Project Guide)
├── lib/                  # Utility functions and DB connection logic
├── public/               # Static assets (Images, SVGs, Fonts)
└── scripts/              # Maintenance and data migration scripts
```

---

## 💡 4. Core Modules

### 4.1. The Online Compiler (`/compiler`)
- **How it works**: Uses `@monaco-editor/react` for the UI.
- **Execution**: Logic handles Python, SQL, and other languages.
- **Database**: `sql.js` is used for in-browser SQL practice without a backend overhead.

### 4.2. AI Chatbot (`ChatbotWidget.jsx`)
- **Integration**: Uses Google's Gemini Pro model.
- **Context**: Trained on `courseFaqData.json` to provide accurate answers about Urbancode's offerings.

### 4.3. Kids Learning Space (`/kids-courses`)
- **Aesthetics**: Vibrant colors, rounded corners, and mascot animations.
- **Tech**: High use of GSAP for interactive "pop-and-play" elements.

---

## 🎨 5. Design & Styling Standards
We aim for a **Premium & Modern** look.

1.  **Color Palette**: Primarily "Luxury Black" with "Vibrant Green" accents.
2.  **Animations**: Every major section should have a subtle entry animation. Use `framer-motion` for simple transitions and `GSAP` for complex timelines.
3.  **Typography**: Consistent use of modern sans-serif fonts (defined in `globals.css`).
4.  **Responsive First**: Always test components on mobile, tablet, and desktop.

---

## 🚀 6. Getting Started

### Development Environment
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Environment Variables**:
    Create a `.env.local` file (Refer to `.env.example`). You will need:
    - `MONGODB_URI`
    - `NEXT_PUBLIC_GEMINI_API_KEY`
3.  **Run Locally**:
    ```bash
    npm run dev
    ```

### Production Build
```bash
npm run build
npm start
```

---

## ✅ 7. Best Practices for the Team
- **Components**: Before creating a new component, check `app/components/` to see if a similar one exists.
- **Data**: Keep course content and static text in `app/data/` files instead of hardcoding into JSX.
- **Performance**: Use Next.js `<Image />` component for all assets to ensure optimization.
- **Commit Messages**: Use clear, descriptive messages (e.g., `feat: add star rating to testimonials`).

---

## 📞 8. Support & Feedback
If you encounter bugs or have architectural questions, please document them in the `issues` or contact the lead developer.

---
*Created by the Urbancode Team | 2026*
