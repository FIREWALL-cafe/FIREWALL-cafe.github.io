import React from 'react';
import ContactForm from './ContactForm';
import logoMobile from "../assets/icons/logo_only.svg";

const GetInTouch = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32 w-full bg-gray-100 max-md:py-24">
      <div className="chinese flex flex-col px-2 md:px-0 md:pr-20 max-w-full w-[692px]">
        <div className="flex gap-4 md:gap-10 items-start md:items-center justify-center md:justify-start">
          <img loading="lazy" src={logoMobile} className="object-contain aspect-square w-[52px]" alt="Logo" />
          <div className="flex flex-col md:block">
            <h1 className="font-display-04 font-bitmap-song md:font-display-02 leading-tight tracking-[2.16px]">
              Get in touch
            </h1>
            <div className="font-display-04 font-bitmap-song md:font-display-02 leading-tight tracking-[2.16px] text-red-600 md:hidden">
              联系我们
            </div>
          </div>
        </div>
        
        {/* Desktop: Chinese text vertical beside form */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-10 mt-6 md:mt-2 items-start">
          <div className="hidden md:block text-[56px] font-medium leading-tight tracking-[2.16px] text-red-600">
            联<br />系<br />我<br />们
          </div>
          <div className="w-full md:flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;