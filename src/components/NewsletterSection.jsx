import React from "react";
import SubscribeSection from "./SubscribeSection";

function NewsletterSection({image}) {
  return (
    <section className="flex overflow-hidden relative flex-col md:flex-row justify-center items-start w-full 
      bg-black border-0 border-black border-solid md:max-h-[400px] max-md:max-w-full">
      <SubscribeSection />
      <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 border border-b-1 border-black border-solid">
        <div className="h-full w-full">
          {image}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
