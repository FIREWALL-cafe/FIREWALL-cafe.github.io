import React from 'react';
import SupportHero from '../assets/images/support-hero.png';

function HeroSupport() {
  return (
    <section className="flex flex-col items-center w-full py-8 md:py-16">
      <div className="chinese flex flex-col items-center w-full px-4">
        <h1 className="text-3xl md:text-[56px] font-medium text-center">
          Support the frontline of internet freedom advocates
        </h1>
        <div className="mt-2 text-3xl md:text-[56px] font-medium leading-tight text-red-600 tracking-[2.16px] text-center">
          支持互联网自由战士的前线。
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-12 md:mt-24 w-full max-w-[1080px] px-4">
        <div className="flex flex-col text-lg md:text-2xl leading-relaxed md:leading-9 text-black">
          <p className="w-full">
            FIREWALL Cafe is sustained through individual donations, corporate sponsorships, and foundation grants. Your contributions help maintain our dual-image browser and enable us to continue our growth internationally.
          </p>
          <p className="mt-5">
            Donate to our cause through <a href="https://www.nyfa.org/#button=45138" className="underline" target="_blank" rel="noopener noreferrer">NYFA</a>, a 501(c)3 supporting the arts in NY.
          </p>
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <img src={SupportHero} className="object-contain w-full max-w-[500px]" alt="Donation illustration" />
        </div>
      </div>
    </section>
  );
}

export default HeroSupport;