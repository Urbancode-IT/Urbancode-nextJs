'use client';
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar/Navbar.jsx";
import "./styles/App.css";
import "./styles/index.css";

// Lazy load components for performance
const HtmlCompiler = lazy(() => import("./components/HtmlCompiler/HtmlCompiler.jsx"));
const ReactCompiler = lazy(() => import("./components/HtmlCompiler/ReactCompiler.jsx"));
const AngularCompiler = lazy(() => import("./components/HtmlCompiler/AngularCompiler.jsx"));
const CodeCompiler = lazy(() => import("./components/CodeCompiler/CodeCompiler.jsx"));
const SqlCompiler = lazy(() => import("./components/SqlCompiler/SqlCompiler.jsx"));
const QuizTopics = lazy(() => import("./components/Quiz/QuizTopics.jsx"));
const Quiz = lazy(() => import("./components/Quiz/Quiz.jsx"));
const ProblemsTopics = lazy(() => import("./components/Problems/ProblemsTopics.jsx"));
const ProblemsList = lazy(() => import("./components/Problems/ProblemsList.jsx"));
const ProblemDetail = lazy(() => import("./components/Problems/ProblemDetail.jsx"));
const AdminDashboard = lazy(() => import("./components/Admin/AdminDashboard.jsx"));
const EditProblem = lazy(() => import("./components/Admin/EditProblem.jsx"));

// Loading fallback component
const PageLoader = () => (
  <div className="loading-overlay">
    <div className="loader"></div>
    <p>Loading Component...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        containerStyle={{
          top: '90px',
          zIndex: 99999,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '14px',
            padding: '12px 24px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        }}
      />
      <div className="app-container">
        <Navbar />
        <div className="content-area">
          <div className="route-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Navigate to="/problems" replace />} />
                <Route path="/html" element={<HtmlCompiler />} />
                <Route path="/python" element={<CodeCompiler language="python" label="Python" />} />
                <Route path="/java" element={<CodeCompiler language="java" label="Java" />} />
                <Route path="/c++" element={<CodeCompiler language="c++" label="C++" />} />
                <Route path="/sql" element={<SqlCompiler />} />
                <Route path="/react" element={<ReactCompiler />} />
                <Route path="/angular" element={<AngularCompiler />} />
                <Route path="/quiz" element={<QuizTopics />} />
                <Route path="/quiz/:topic" element={<QuizTopics />} />
                <Route path="/quiz/:topic/:level" element={<Quiz />} />
                <Route path="/problems" element={<ProblemsTopics />} />
                <Route path="/problems/:topic" element={<ProblemsList />} />
                <Route path="/problems/:topic/:problemId" element={<ProblemDetail />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/edit/:problemId" element={<EditProblem />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}



export default App;
