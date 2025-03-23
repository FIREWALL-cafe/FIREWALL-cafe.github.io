import React from "react";
import TimeDisplay from "./TimeDisplay";
import useCookie from '../useCookie';

function Header() {
  const [username] = useCookie("username");

  return (
    <header className="w-full bg-red-600 min-h-[40px]">
      <div className="max-w-[1280px] mx-auto px-8 w-full">
        <div className="flex justify-between items-center py-4">
          <TimeDisplay />
          <div className="text-white">
            <span className="font-bold">Username:</span> {username || 'anonymous'}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
