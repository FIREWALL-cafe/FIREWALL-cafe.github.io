import React from "react";
import SubscribeSection from "./SubscribeSection";

import UsHeadlines from "../assets/images/subscribe-d-desktop.jpg";
import UsHeadlinesMobile from "../assets/images/subscribe-d-mobile.jpg";

function NewsletterSection({image}) {
  return (
    <section className="flex overflow-hidden relative flex-col md:flex-row justify-center items-start w-full 
      bg-black border-0 max-md:max-w-full">
      <div className="mx-auto w-full flex flex-col md:flex-row">
        <div className="h-full w-full order-1 md:order-2">
          <picture>
            <source media="(max-width: 1079x)" srcSet={UsHeadlinesMobile} />
            <source media="(min-width: 1080px)" srcSet={UsHeadlines} />
            {React.cloneElement(image, {
              className: `w-full h-full object-cover`
            })}
          </picture>
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <SubscribeSection />
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
