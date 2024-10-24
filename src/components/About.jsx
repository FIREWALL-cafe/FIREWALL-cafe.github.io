import React from 'react';
import Hero from './Hero';
import Consequences from './Consequences';
import Artist from './Artist';
import Supporters from './Supporters';
import CallToAction from './CallToAction';

function About() {
  return (
    <div className="flex overflow-hidden flex-col min-h-[200px]">
      <main>
        <Hero />
        <Consequences />
        <Artist />
        <Supporters />
        <CallToAction />
      </main>
    </div>
  );
}

export default About;