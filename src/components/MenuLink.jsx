import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MenuLink({ link, toggleDrawer }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    toggleDrawer();
    navigate(link.to);
  };

  return (
    <div className="py-2">
      <Link
        to={link.to}
        onClick={handleClick}
        className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-colors group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          {link.icon && (
            <img
              src={link.icon}
              alt={link.title}
              className={`w-6 h-6 object-contain transition-all duration-200 ${
                isHovered ? 'filter-none' : 'grayscale'
              }`}
            />
          )}
        </div>
        <span className="text-lg font-medium flex-1">{link.title}</span>
        <div className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default MenuLink;
