import React from 'react';
import HeroSupport from './HeroSupport';
import SupportOptions from './SupportOptions';

function Support() {
  return (
    <section className="flex overflow-hidden flex-col justify-center py-16 w-full bg-white max-md:py-24 max-md:max-w-full">
      <HeroSupport />
      <SupportOptions />
    </section>
  );
}

export default Support;