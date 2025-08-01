import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuLink from './MenuLink';
import SubscribeForm from './SubscribeForm';
import Drawer from 'react-modern-drawer';
import { useMediaQuery } from 'react-responsive';
import 'react-modern-drawer/dist/index.css';

import logo from "../assets/icons/logo_name.svg";
import logoMobile from "../assets/icons/logo_only.svg";
import NavMenu from "../assets/icons/nav-menu.svg";
import Close from "../assets/icons/close_large.svg";

import ArchiveIcon from "../assets/icons/Archive.png";
import CommentaryIcon from "../assets/icons/expert-commentary.png";
import EventsIcon from "../assets/icons/events.png";
import PressIcon from "../assets/icons/press.png";
import AboutIcon from "../assets/icons/logo_only.svg";
import SupportIcon from "../assets/icons/support.png";
import ContactIcon from "../assets/icons/question.svg";
  
const menuLinks = [
  { to: "/archive", title: "Query Archive", icon: ArchiveIcon },
  { to: "/editorial", title: "Expert Commentary", icon: CommentaryIcon },
  { to: "/events", title: "Events", icon: EventsIcon },
  { to: "/press", title: "Press", icon: PressIcon },
  { to: "/about", title: "About", icon: AboutIcon },
  { to: "/support", title: "Support Us", icon: SupportIcon },
  { to: "/contact", title: "Contact", icon: ContactIcon },
];
  
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isIphone = useMediaQuery({ maxWidth: 420 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 320 });
  
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsOpen(false); // Close the drawer
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(''); // Clear the search input
    }
  }

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  }

  return (
    <div id="navigation" className="w-full is-large-width-content">
      <div className="flex justify-between items-center mx-auto w-full">
        <div className="flex gap-3">
          <Link to="/">
            {isVerySmallScreen ? (
              <img src={logoMobile} alt="Logo" />
            ) : (
              <img src={logo} alt="Logo" />
            )}
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
              <div className="flex justify-between items-center p-6">
                <div className="flex items-center gap-3">
                  <Link to="/">
                    {isVerySmallScreen ? (
                      <img src={logoMobile} alt="Logo" />
                    ) : (
                      <img src={logo} alt="Logo" />
                    )}
                  </Link>
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center"
                  aria-label="Close"
                  onClick={toggleDrawer}
                >
                  <img
                    src={Close}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </button>
              </div>

              {/* Search Bar */}
              <div className="px-6 mb-4">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search Google + Baidu"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-400 hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col flex-1 px-6">
                {menuLinks.map((link, index) => (
                  <MenuLink key={index} link={link} toggleDrawer={toggleDrawer} />
                ))}
              </div>

              {/* Subscribe Form */}
              <div className="px-6 pb-8">
                <div className="mb-4">
                  <div className="text-lg font-medium text-black">Subscribe to our newsletter</div>
                  <div className="text-lg font-medium text-red-600">保持联系</div>
                </div>
                <SubscribeForm
                  inputClassName="flex-1 px-4 py-3 border border-gray-300 rounded-l bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-600"
                  buttonClassName="px-6 py-3 bg-white border border-l-0 border-red-600 text-red-600 rounded-r hover:bg-red-50 transition-colors"
                />
              </div>
            </nav>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
