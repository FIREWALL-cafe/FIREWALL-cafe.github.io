import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";

function Layout() {
  return (
    <div className="flex flex-col items-end w-full px:4">
      <div className="flex flex-col w-full max-md:max-w-full">
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
        <TermsAndConditions />
      </div>
    </div>
  );
}

export default Layout;
