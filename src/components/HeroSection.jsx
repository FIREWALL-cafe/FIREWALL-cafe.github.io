import React, { useEffect, useRef } from 'react';
import SearchInput from './SearchInput';
import Typed from 'typed.js';

function HeroSection() {
  const el = useRef(null);
  const typed = useRef(null);
  
  const titles = [
    'What terms are banned on Baidu?',
    'What are sensitive political events in China?',
    'Do censorship levels vary?',
    'Does Google reveal banned truths?',
    'Does Google show the full truth?',
    "What's behind the wall?",
  ];

  useEffect(() => {
    const options = {
      strings: titles,
      typeSpeed: 75,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-16">
      <h1 
        aria-live="polite" 
        className="font-bitmap-song font-display-01 text-center min-h-[72px] md:min-h-[120px] lg:min-h-[144px]"
      >
        <span ref={el} />
      </h1>
      <div className="w-full max-w-[720px] mx-auto">
        <SearchInput searchMode="live" />
      </div>
    </section>
  );
}

export default HeroSection;
