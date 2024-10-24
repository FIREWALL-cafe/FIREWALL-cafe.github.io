import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col items-end px-20 max-md:pl-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
