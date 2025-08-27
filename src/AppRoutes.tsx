import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import TaskDetail from "./components/TaskDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task/:id" element={<TaskDetail />} />
    </Routes>
  );
}
