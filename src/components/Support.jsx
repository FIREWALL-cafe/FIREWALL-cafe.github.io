import React from 'react';
import HeroSupport from './HeroSupport';
import Supporters from './Supporters';
import SupportOptions from './SupportOptions';

function Support() {
  return (
    <section className="flex flex-col justify-center max-w-[1080px] mx-auto bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <HeroSupport />
        <Supporters />
        <SupportOptions />
      </div>
    </section>
  );
}

export default Support;