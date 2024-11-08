import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuSection from './MenuSection';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import logo from "../assets/icons/logo_name.svg";
import NavMenu from "../assets/icons/nav-menu.svg";

const menuSections = [
    {
      title: 'Analysis',
      items: [<Link to="/archive">Query archive</Link>, <Link to="/timeline">Timeline</Link>, <Link to="/experts">Editorial</Link>],
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d56f8d62d9074d509de3faeb2651bd99/405ba1e178feb620f32f3df09aea26ed9eb080ba6cb4b555e946e0c55fcb8739?apiKey=d56f8d62d9074d509de3faeb2651bd99&'
    },
    {
      title: 'About',
      items: [<Link to="/about">Firewall Cafe</Link>, <Link to="/sponsors">Sponsors</Link>, <Link to="/events">Events</Link>, <Link to="/press">Press</Link>],
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d56f8d62d9074d509de3faeb2651bd99/33683d061f3f1aec6bb62f00876dd7c94d17c54cf2a0ff1719271fa07c97d162?apiKey=d56f8d62d9074d509de3faeb2651bd99&'
    },
    {
      title: 'Partner with us',
      items: [],
      iconSrc: ''
    },
    {
      title: 'Contact',
      items: [],
      iconSrc: ''
    }
  ];
  
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const drawerStyle = {
    transitionDuration: '500ms',
    top: '0px',
    right: '0px',
    transform: 'translate3d(100 %, 0px, 0px)',
    width: '450px',
    height: '100vh'
  }
  return (
    <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 max-md:max-w-full">
      <div className="flex gap-3 p-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="object-contain self-stretch my-auto" />
        </Link>
      </div>
      <div className="flex gap-3 relative">
        <button onClick={toggleDrawer} className="flex items-center justify-end w-full h-16 px-4 py-2 bg-white">
          <img src={NavMenu} alt="Menu" className="object-contain self-stretch my-auto" />
        </button>
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='navDrawer w-1/4'
            style={drawerStyle}
        >
          <nav className="flex flex-col absolute z-10 text-2xl w-full text-right bg-white text-black max-md:mt-10 max-md:max-w-full">
            <div className="flex self-end">
              <button
                className="overflow-hidden flex-col justify-center items-center self-stretch my-auto w-9 h-9 rounded border border-black border-solid min-h-[36px]"
                aria-label="Close"
                onClick={toggleDrawer}
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/d56f8d62d9074d509de3faeb2651bd99/f0e822ad99ddec163f1240be68b0385290164fb113b525dc888e7a23845af72f?apiKey=d56f8d62d9074d509de3faeb2651bd99&"
                  alt=""
                  className="object-contain w-full aspect-square"
                />
              </button>
            </div>
            {menuSections.map((section, index) => (
              <MenuSection
                key={index}
                title={section.title}
                items={section.items}
                iconSrc={section.iconSrc}
              />
            ))}
          </nav>
        </Drawer>
      </div>
    </div>
  );
}

export default Navigation;
