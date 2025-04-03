import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-grow entry-content">
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
      </main>
      <TermsAndConditions />
    </div>
  );
}

export default Layout;
