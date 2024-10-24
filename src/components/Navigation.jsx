import React from "react";
import logo from "../assets/icons/logo.svg";

function Navigation() {
  return (
    <nav className="flex overflow-hidden gap-10 justify-center items-center px-8 py-5 w-full bg-white min-h-[80px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full max-w-screen-xl basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="Logo" className="object-contain self-stretch my-auto" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
