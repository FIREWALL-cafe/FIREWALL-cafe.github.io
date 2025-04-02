import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MenuLink({ link, toggleDrawer }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    toggleDrawer();
    navigate(e.target.getAttribute('href'));
  }
  
  return (
    <div className="py-4 border-b border-black">
      <Link 
        to={link.to} 
        onClick={handleClick} 
        className="font-header-04 text-gray-900 hover:text-gray-600 transition-colors block w-full"
      >
        {link.title}
      </Link>
    </div>
  );
}

export default MenuLink;