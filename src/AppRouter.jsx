import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/DashboardLayout";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
