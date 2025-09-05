import React from 'react';
import TimeDisplay from './TimeDisplay';
import useCookie from '../useCookie';

function Header() {
  const [username] = useCookie('username');

  return (
    <header className="bg-red-600 min-h-[56px] is-full-width-content">
      <div className=" mx-auto entry-content">
        <div className="flex justify-between items-center font-body-03-medium is-large-width-content">
          <TimeDisplay />
          <div className="hidden md:flex text-white items-center">
            <span className="font-bold mr-1">Username:</span> {username}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
