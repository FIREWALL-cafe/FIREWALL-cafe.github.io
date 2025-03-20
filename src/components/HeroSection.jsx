import React, { useState, useEffect, useRef } from 'react';
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
    "WHAT'S BEHIND THE WALL?",
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
    <section className="flex overflow-hidden flex-col justify-center items-center py-16 w-full bg-white max-md:py-16 max-md:max-w-full">
      <h1 aria-live="polite" className="chinese pt-0 text-6xl font-medium leading-tight text-center text-black border-black tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
        <span ref={el} />
      </h1>
      <SearchInput searchMode="live" />
    </section>
  );
}

export default HeroSection;
