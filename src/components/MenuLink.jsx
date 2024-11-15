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
    <section className="flex flex-col py-3 px-5 w-full max-md:max-w-full">
      {/* <div className="flex gap-10 justify-between items-center w-full text-4xl whitespace-nowrap max-md:max-w-full max-md:text-4xl">
        <h3 className="self-stretch my-auto max-md:text-4xl">{title}</h3>
        {iconSrc && (
          <img
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
          />
        )}
      </div> */}
      <div className="mt-4">
        <Link to={link.to} onClick={handleClick} className="text-medium">{link.title}</Link>
      </div>
    </section>
  );
}

export default MenuLink;