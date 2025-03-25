import React from "react";
import SubscribeSection from "./SubscribeSection";

function NewsletterSection({image}) {
  return (
    <section className="flex overflow-hidden relative flex-col md:flex-row justify-center items-start w-full 
      bg-black border-0 border-black border-solid max-md:max-w-full">
      <div className="max-w-[1080px] mx-auto w-full flex flex-col md:flex-row">
        <div className="h-full w-full order-1 md:order-2">
          {React.cloneElement(image, {
            className: `w-full h-full object-cover ${image.props.className || ''}`
          })}
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <SubscribeSection />
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
