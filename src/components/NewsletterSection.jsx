import React from "react";
import SubscribeSection from "./SubscribeSection";

function NewsletterSection({image}) {
  return (
    <section className="flex overflow-hidden relative flex-col md:flex-row justify-center items-start w-full 
      bg-black border-0 border-black border-solid max-md:max-w-full">
      <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 border border-b-1 border-black border-solid h-full order-1 md:order-2 p-4 md:p-8 lg:p-12">
        <div className="h-full w-full">
          {React.cloneElement(image, {
            className: `w-full h-full object-cover ${image.props.className || ''}`
          })}
        </div>
      </div>
      <div className="order-2 md:order-1 w-full md:w-1/2">
        <SubscribeSection />
      </div>
    </section>
  );
}

export default NewsletterSection;
