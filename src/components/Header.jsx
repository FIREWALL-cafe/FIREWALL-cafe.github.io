import React from "react";
import { Link } from "react-router-dom";
import TimeDisplay from "./TimeDisplay";

function Header() {
  return (
    <header className="flex overflow-hidden justify-between px-8 w-full bg-red-600 min-h-[40px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between max-w-screen-xl basis-0 min-w-[240px] size-full max-md:max-w-full">
        <TimeDisplay />
      </div>
    </header>
  );
}

export default Header;
