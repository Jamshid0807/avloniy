// App.jsx yoki App.tsx
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Card from "./components/Card";
import CourseDetail from "./components/CourseDetail";
import Dashboard from "./layouts/DashboardLayout";
import Profil from "./pages/Dashboard/Profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="courses/:page" element={<Card />} />
          <Route path="courses/view/:slug" element={<CourseDetail />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profil />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
