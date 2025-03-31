import React from "react";
import SubscribeSection from "./SubscribeSection";

import SubscribeA from "../assets/images/subscribe-a-desktop.jpg";
import SubscribeAMobile from "../assets/images/subscribe-a-mobile.jpg";
import SubscribeB from "../assets/images/subscribe-b-desktop.jpg";
import SubscribeBMobile from "../assets/images/subscribe-b-mobile.jpg";
import SubscribeC from "../assets/images/subscribe-c-desktop.jpg";
import SubscribeCMobile from "../assets/images/subscribe-c-mobile.jpg";
import SubscribeD from "../assets/images/subscribe-d-desktop.jpg";
import SubscribeDMobile from "../assets/images/subscribe-d-mobile.jpg";
import SubscribeE from "../assets/images/subscribe-e-desktop.jpg";
import SubscribeEMobile from "../assets/images/subscribe-e-mobile.jpg";

const images = {
  subscribeA: { desktop: SubscribeA, mobile: SubscribeAMobile },
  subscribeB: { desktop: SubscribeB, mobile: SubscribeBMobile },
  subscribeC: { desktop: SubscribeC, mobile: SubscribeCMobile },
  subscribeD: { desktop: SubscribeD, mobile: SubscribeDMobile },
  subscribeE: { desktop: SubscribeE, mobile: SubscribeEMobile },
  usHeadlines: { desktop: SubscribeD, mobile: SubscribeDMobile }
}

function NewsletterSection({image}) {
  return (
    <section className="flex overflow-hidden relative flex-col md:flex-row justify-center items-start w-full min-h-[600px]
      bg-newsletter border-0 max-md:max-w-full">
      <div className="mx-auto w-full h-full flex flex-col md:flex-row">
        <div className="h-full w-full order-1 md:order-2 relative min-h-[600px]">
          <picture className="absolute inset-0">
            <source media="(max-width: 1079px)" srcSet={images[image].mobile} />
            <source media="(min-width: 1080px)" srcSet={images[image].desktop} />
            <img src={images[image].desktop} alt="US Headlines" className="w-full h-full object-cover object-center" />
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
