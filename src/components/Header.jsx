import React from "react";
import TimeDisplay from "./TimeDisplay";
import useCookie from '../useCookie';

function Header() {
  const [username] = useCookie("username");

  return (
    <header className="w-full bg-red-600 min-h-[56px]">
      <div className="max-w-[1280px] mx-auto px-8 w-full">
        <div className="flex justify-between items-center font-body-03-medium">
          <TimeDisplay />
          <div className="hidden md:flex text-white items-center">
            <span className="font-bold">Username:</span> {username || 'anonymous'}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
