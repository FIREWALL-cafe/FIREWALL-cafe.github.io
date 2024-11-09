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
    'What terms are banned on Baidu?',
    'What are sensitive political events in China?',
    'Do censorship levels vary?',
    'Does Google reveal banned truths?',
    'Does Google show the full truth?',
    "WHAT'S BEHIND THE WALL?",
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-16 w-full bg-white max-md:py-16 max-md:max-w-full">
      <h1 aria-live="polite" className="chinese pt-0 text-6xl font-medium leading-tight text-center text-black border-black tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
        <Typewriter text={titles[Math.floor(Math.random() * titles.length)]} speed={50} />
      </h1>
      <SearchInput searchMode="live" />
    </section>
  );
}

export default HeroSection;
