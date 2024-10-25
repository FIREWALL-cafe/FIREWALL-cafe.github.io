import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';

function Typewriter({ text, speed }) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [currentIndex, speed, text]);

  return (
    <div>{typedText}</div>
  );
}

function HeroSection() {
  const titles = [
    "WHAT'S BEHIND THE WALL?",
    'What terms are banned on Baidu?',
    'What are sensitive political events in China?',
    'Do censorship levels vary?',
    'Does Google reveal banned truths?',
    'Does Google show the full truth?',
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-24 py-40 w-full bg-white min-h-[641px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <h1 aria-live="polite" className="chinese pt-0 text-6xl font-medium leading-tight text-center text-black border-black tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
        <Typewriter text={titles[Math.floor(Math.random() * titles.length)]} speed={100} />
      </h1>
      <SearchInput />
    </section>
  );
}

export default HeroSection;
