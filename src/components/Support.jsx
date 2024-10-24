import React from 'react';
import HeroSupport from './HeroSupport';
import SupportOptions from './SupportOptions';

function Support() {
  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <main>
        <HeroSupport />
        <SupportOptions />
      </main>
    </div>
  );
}

export default Support;