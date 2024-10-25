import React from 'react';
import ContactForm from './ContactForm';

const GetInTouch = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32 w-full bg-gray-100 border-b border-solid border-b-red-600 max-md:py-24 max-md:max-w-full">
      <div className="chinese flex flex-col items-start pr-20 max-w-full w-[692px] max-md:pr-5">
        <h1 className="flex gap-10 items-center text-7xl font-medium leading-tight text-black tracking-[2.16px] max-md:text-4xl">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c15b618ad2d727f699efbb100c0b696857b4d04895014c58b5bdc803f264ff20?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" alt="" />
          <span className="self-stretch my-auto max-md:text-4xl">Get in touch</span>
        </h1>
        <div className="flex z-10 flex-wrap gap-10 mt-2 text-red-600">
          <div className="self-start text-7xl font-medium leading-[86px] tracking-[2.16px] max-md:text-4xl max-md:leading-[53px]">
            联<br />系<br />我<br />们
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;