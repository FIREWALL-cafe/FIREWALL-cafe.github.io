import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuLink from './MenuLink';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import logo from "../assets/icons/logo_name.svg";
import logoMobile from "../assets/icons/logo_only.svg";
import NavMenu from "../assets/icons/nav-menu.svg";
import Close from "../assets/icons/close_large.svg";
  
const menuLinks = [
  { to: "/search", title: "Search" },
  { to: "/archive", title: "Archive" },
  { to: "editorial", title: "Editorial" },
  { to: "/about", title: "About" },
  { to: "/events", title: "Events" },
  { to: "/press", title: "Press" },
  { to: "/support", title: "Support" },
  { to: "/contact", title: "Contact" },
];
  
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const drawerStyle = {
    transitionDuration: '500ms',
    top: '0px',
    right: '0px',
    transform: 'translate3d(100 %, 0px, 0px)',
    width: 'none',
    height: '100vh'
  }
  return (
    <div id="navigation" className="w-full">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 w-full">
        <div className="flex gap-3">
          <Link to="/">
            <img src={logo} alt="Logo" className="hidden md:block" />
            <img src={logoMobile} alt="Logo" className="block md:hidden" />
          </Link>
        </div>
        <div className="flex relative">
          <button onClick={toggleDrawer} className="flex items-center justify-end w-full h-16 py-2 bg-white">
            <img src={NavMenu} alt="Menu" className="object-contain self-stretch my-auto" />
          </button>
          <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='navDrawer w-1/4'
              style={drawerStyle}
          >
            <nav className="flex flex-col absolute z-10 text-xl w-full text-right bg-white text-black max-md:mt-10 max-md:max-w-full">
              <div className="flex self-end">
                <button
                  className="overflow-hidden flex-col justify-center items-center self-stretch my-auto w-9 h-9 min-h-[36px]"
                  aria-label="Close"
                  onClick={toggleDrawer}
                >
                  <img
                    src={Close}
                    alt=""
                    className="object-contain w-full aspect-square"
                  />
                </button>
              </div>
              {menuLinks.map((link, index) => (
                <MenuLink key={index} link={link} toggleDrawer={toggleDrawer} />
              ))}
            </nav>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
