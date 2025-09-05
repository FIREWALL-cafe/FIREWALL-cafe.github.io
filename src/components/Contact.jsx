import React from 'react';
import GetInTouch from './GetInTouch';
import SubscribeSection from './SubscribeSection';
import SocialFollow from './SocialFollow';

const Contact = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px] is-full-width-content">
      <GetInTouch />
      <div className="flex overflow-hidden flex-col md:flex-row w-full border-t border-b border-solid border-red-600">
        <SubscribeSection />
        <SocialFollow />
      </div>
    </main>
  );
};

export default Contact;
