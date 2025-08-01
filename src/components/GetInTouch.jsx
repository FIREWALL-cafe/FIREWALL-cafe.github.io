import React from 'react';
import ContactForm from './ContactForm';
import logoMobile from "../assets/icons/logo_only.svg";

const GetInTouch = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32 w-full bg-gray-100 max-md:py-24">
      <div className="chinese flex flex-col px-2 md:px-0 md:pr-20 max-w-full w-[692px]">
        <h1 className="flex gap-10 items-center md:text-[56px] text-3xl font-medium leading-tight text-black tracking-[2.16px]">
          <img loading="lazy" src={logoMobile} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" alt="" />
          <span className="self-stretch my-auto max-md:text-4xl">Get in touch</span>
        </h1>
        <div className="flex z-10 flex-wrap gap-10 mt-2 text-red-600 items-start">
          <div className="text-3xl md:text-[56px] font-medium leading-tight tracking-[2.16px]">
            联<br />系<br />我<br />们
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;