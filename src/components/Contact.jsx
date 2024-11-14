import React from 'react';
import GetInTouch from './GetInTouch';
import SubscribeSection from './SubscribeSection';
import SocialFollow from './SocialFollow';

const Contact = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <GetInTouch />
      <div className="flex overflow-hidden flex-wrap w-full max-md:max-w-full">
        <SubscribeSection />
        <SocialFollow />
      </div>
    </main>
  );
};

export default Contact;