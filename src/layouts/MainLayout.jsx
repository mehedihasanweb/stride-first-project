import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
