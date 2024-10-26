import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import logo from "../assets/icons/logo_name.svg";
import NavMenu from "../assets/icons/nav-menu.svg";

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
]

function Navigation() {
  const location = useLocation();
  const { pathname } = location;

  return (
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
    </nav>
  );
}

export default Navigation;
