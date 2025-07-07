import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Card from "./components/Card";
import CourseDetail from "./components/CourseDetail";
import Test from "./components/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/courses/:page" element={<Card />} />
            <Route path="/courses/view/:slug" element={<CourseDetail />} />
            {/* <Route path="/test" element={<Test />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
