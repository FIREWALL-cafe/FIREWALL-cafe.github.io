import React from 'react';

function MenuSection({ title, items, iconSrc }) {
  return (
    <section className="flex flex-col py-3 px-5 w-full border-b border-solid border-b-black max-md:max-w-full">
      <div className="flex gap-10 justify-between items-center w-full text-4xl whitespace-nowrap max-md:max-w-full max-md:text-4xl">
        <h3 className="self-stretch my-auto max-md:text-4xl">{title}</h3>
        {iconSrc && (
          <img
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
          />
        )}
      </div>
      {items.map((item, index) => (
        <div key={index} className={`mt-4 ${item === 'Stats + data' ? 'line-through' : ''}`}>
          {item}
        </div>
      ))}
    </section>
  );
}

export default MenuSection;
