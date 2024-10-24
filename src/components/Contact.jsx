import React from 'react';
import GetInTouch from './GetInTouch';
import Newsletter from './Newsletter';
import SocialFollow from './SocialFollow';

const Contact = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <GetInTouch />
      <div className="flex overflow-hidden flex-wrap w-full border-b border-solid border-b-red-600 max-md:max-w-full">
        <Newsletter />
        <SocialFollow />
      </div>
    </main>
  );
};

export default Contact;