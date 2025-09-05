import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../assets/icons/arrow_right_alt.svg';
import Logo from '../assets/icons/logo_name.svg';

function CallToAction() {
  return (
    <section className="flex flex-col overflow-hidden items-center w-full bg-rose-100 py-36 is-full-width-content">
      <div className="container mx-auto flex flex-col items-center">
        <div className="font-bitmap-song text-center">
          <div className="max-w-[600px] mx-auto">
            <img src={Logo} alt="FIREWALL Cafe Logo" className="w-full h-[65px] mb-4" />
          </div>
          <h2 className="font-display-02 leading-tight">Become a FIREWALL Cafe supporter</h2>
          <div className="mt-2 font-display-02 leading-tight text-red-600 tracking-[2.16px]">
            成为赞助商
          </div>
        </div>
        <p className="mt-6 font-body-02 text-center max-w-[600px]">
          Learn how you can support FIREWALL Cafe and fight for the freedom of information in China
          and worldwide.
        </p>
        <Link
          to="/support"
          className="flex gap-2 items-center px-6 py-3 mt-6 text-center text-black rounded border border-black border-solid hover:bg-black hover:text-white transition-colors"
        >
          <span>Learn more</span>
          <img src={ArrowRight} alt="" className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
