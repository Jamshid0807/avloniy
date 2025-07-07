import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="my-20">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
