import React from "react";
import { Link } from "react-router-dom";
import TimeDisplay from "./TimeDisplay";

function Header() {
  return (
    <header className="flex overflow-hidden justify-between px-8 w-full bg-red-600 min-h-[40px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between max-w-screen-xl basis-0 min-w-[240px] size-full max-md:max-w-full">
        <TimeDisplay />
        <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          <li className="me-4 hover:underline md:me-6">
            <Link to="/">Home</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/timeline">Timeline</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/search">Search</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/archive">Archive</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/experts">Experts</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/events">Events</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/press">Press</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/about">About</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/support">Support</Link>
          </li>
          <li className="me-4 hover:underline md:me-6">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
