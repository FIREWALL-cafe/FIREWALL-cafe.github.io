import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuSection from './MenuSection';

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

  return (
    <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full max-w-screen-xl basis-0 max-md:max-w-full">
      <div className="flex gap-3">
        <Link to="/">
          <img src={logo} alt="Logo" className="object-contain self-stretch my-auto" />
        </Link>
      </div>
      <div className="flex gap-3 relative">
        <button onClick={toggleMenu} className="flex items-center justify-end w-full h-16 px-4 py-2 bg-white max-md:hidden">
          <img src={NavMenu} alt="Menu" className="object-contain self-stretch my-auto" />
        </button>
        {isMenuOpen && (
          <nav className="flex flex-col absolute z-10 w-full text-2xl text-right bg-white text-black max-md:mt-10 max-md:max-w-full">
            {menuSections.map((section, index) => (
              <MenuSection
                key={index}
                title={section.title}
                items={section.items}
                iconSrc={section.iconSrc}
              />
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

    {/* 
    const links = [
      { href: "/", label: "Home" },
      { href: "/timeline", label: "Timeline" },
      { href: "/search", label: "Search" },
      { href: "/archive", label: "Archive" },
      { href: "/experts", label: "Experts" },
      { href: "/events", label: "Events" },
      { href: "/press", label: "Press" },
      { href: "/about", label: "About" },
      { href: "/support", label: "Support" },
      { href: "/contact", label: "Contact" },
    ];
    <nav className="flex overflow-hidden gap-10 justify-center items-center px-8 py-5 w-full bg-white min-h-[80px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full max-w-screen-xl basis-0 max-md:max-w-full">
        <div className="flex gap-3">
          <Link to="/">
            <img src={logo} alt="Logo" className="object-contain self-stretch my-auto" />
          </Link>
        </div>
        <Menu>
          <MenuButton className="data-[active]:bg-blue-200">
            <img src={NavMenu} alt="Menu" className="object-contain self-stretch my-auto" />
          </MenuButton>
          <MenuItems anchor="bottom" className={`border border-solid border-red-600 bg-pink-50 rounded`}>
            {links.map((link) => (
              pathname === link.href ? <span key={link.href} className="block mt-1 py-1 px-2 bg-white">{link.label}</span> : (
              <MenuItem key={link.href} className="block mt-1 py-1 px-2 data-[focus]:bg-red-600">
                <a href={link.href}>{link.label}</a>
              </MenuItem>
              )
            ))}
          </MenuItems>
        </Menu>
      </div>
    </nav> */}
export default Navigation;
