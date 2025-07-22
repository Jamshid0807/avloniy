import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidibar from "../components/Sidibar";
const DashboardLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container mx-auto flex items-center bg-red-500">
        <div className="w-[30%]">
          <Sidibar />
        </div>
        <main className="my-20 w-full">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayout;
