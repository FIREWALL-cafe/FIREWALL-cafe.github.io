import React from "react";
import SubscribeSection from "./SubscribeSection";

function NewsletterSection({image}) {
  return (
    <section className="flex overflow-hidden relative justify-center items-start w-full bg-gray-800 border-0 border-black border-solid min-h-[500px] max-md:max-w-full">
      <SubscribeSection />
      <div className="w-1/2 border border-b-1 border-black border-solid">
        {image}
      </div>
    </section>
  );
}

export default NewsletterSection;
