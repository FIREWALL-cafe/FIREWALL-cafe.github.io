import React, { useEffect, useRef } from 'react';
import SearchInput from './SearchInput';
import Typed from 'typed.js';

function HeroSection() {
  const el = useRef(null);
  const typed = useRef(null);
  
  useEffect(() => {
    const titles = [
      '墙后面是什么?',
      "What's behind the wall?",
    ];
    
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
        className="font-bitmap-song font-display-01 text-center h-[72px] md:h-[120px] lg:h-[144px] mb-24 ipad-portrait:mb-0"
      >
        <span ref={el} />
      </h1>
      <div className="w-full max-w-[720px] mx-auto mt-16 ipad-portrait:mt-0">
        <SearchInput searchMode="live" />
      </div>
    </section>
  );
}

export default HeroSection;
