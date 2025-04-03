import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuLink from './MenuLink';
import Drawer from 'react-modern-drawer';
import { useMediaQuery } from 'react-responsive';
import 'react-modern-drawer/dist/index.css';

import logo from "../assets/icons/logo_name.svg";
import logoMobile from "../assets/icons/logo_only.svg";
import NavMenu from "../assets/icons/nav-menu.svg";
import Close from "../assets/icons/close_large.svg";
  
const menuLinks = [
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
  const isIphone = useMediaQuery({ maxWidth: 420 });
  
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <div id="navigation" className="w-full is-large-width-content">
      <div className="flex justify-between items-center mx-auto w-full">
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
              className='navDrawer'
              style={{
                transitionDuration: '500ms',
                top: '0px',
                right: '0px',
                transform: 'translate3d(100%, 0px, 0px)',
                height: '100vh',
                width: isIphone ? '100%' : '50%'
              }}
          >
            <nav className="flex flex-col h-full w-full bg-white">
              <div className="flex justify-between items-center p-4">
                <Link to="/" className="block md:hidden">
                  <img src={logoMobile} alt="Logo" className="h-8" />
                </Link>
                <button
                  className="w-8 h-8 flex items-center justify-center ml-auto"
                  aria-label="Close"
                  onClick={toggleDrawer}
                >
                  <img
                    src={Close}
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </button>
              </div>
              <div className="flex flex-col flex-1 mt-4 px-4">
                {menuLinks.map((link, index) => (
                  <MenuLink key={index} link={link} toggleDrawer={toggleDrawer} />
                ))}
              </div>
            </nav>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
