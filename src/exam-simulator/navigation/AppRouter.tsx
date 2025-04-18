import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AIExaminerPage from "../pages/AIExaminerPage";
import Dashboard from "../pages/Dashboard";
import ExamEditor from "../pages/ExamEditor";
import { ExamSimulatorProvider } from "../contexts/ExamSimulatorContext";

export function AppRouter() {
  return (
    <ExamSimulatorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/live" element={<AIExaminerPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<ExamEditor />} />
          <Route path="/exam" element={<ExamEditor />} />
        </Routes>
      </BrowserRouter>
    </ExamSimulatorProvider>
  );
}
