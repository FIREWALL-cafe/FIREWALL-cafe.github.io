import React from 'react';

import FeatureCard from './FeatureCard';

function FeatureCards({ features }) {
  return (
    <section className="flex gap-4 justify-center px-6 pb-16 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-4 justify-center items-center max-w-screen-xl basis-0 min-w-[240px] size-full max-md:max-w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
