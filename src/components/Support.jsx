import React from 'react';
import HeroSupport from './HeroSupport';
import SupportOptions from './SupportOptions';

function Support() {
  return (
    <section className="flex flex-col justify-center w-full bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <HeroSupport />
        <SupportOptions />
      </div>
    </section>
  );
}

export default Support;