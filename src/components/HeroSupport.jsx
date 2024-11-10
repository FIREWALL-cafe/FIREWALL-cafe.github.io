import React from 'react';
import SupportHero from '../assets/images/support-hero.png';

function HeroSupport() {
  return (
    <section className="flex overflow-hidden flex-col items-center py-16 w-full bg-white max-md:py-24 max-md:max-w-full">
      <div className="chinese flex flex-col items-center max-w-full min-w-[388px]">
        <h1 className="flex flex-col justify-center items-center self-stretch w-full text-5xl font-medium text-center max-md:max-w-full max-md:text-4xl">
          Support the frontline of internet freedom advocates
        </h1>
        <div className="mt-2 text-5xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          支持互联网自由战士的前线。
        </div>
      </div>
      <div className="flex gap-10 mt-24 max-w-full w-[1080px] max-md:mt-10">
        <div className="flex flex-col flex-1 shrink text-2xl leading-9 text-black basis-0 min-w-[240px] max-md:max-w-full">
          <p className="w-full max-md:max-w-full">
            FIREWALL Cafe is sustained through individual donations, corporate sponsorships, and foundation grants. Your contributions help maintain our dual-image browser and enable us to continue our growth internationally.</p>
          <p className="mt-5">Donate to our cause through <a href="https://www.nyfa.org/#button=45138" className="underline" target="_blank">NYFA</a>, a 501(c)3 supporting the arts in NY.</p>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center items-center basis-0 w-1/2 max-md:max-w-full">
          <img src={SupportHero} className="object-contain max-w-full aspect-[1.47]" alt="Donation illustration" />
        </div>
      </div>
    </section>
  );
}

export default HeroSupport;