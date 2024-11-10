import React from "react";
import UsHeadlines from "../assets/images/subscribe-d-desktop.jpg";
import SubscribeSection from "./SubscribeSection";

function NewsletterSection() {
  return (
    <section className="flex overflow-hidden relative justify-center items-start w-full bg-gray-800 border-0 border-black border-solid min-h-[500px] max-md:max-w-full">
      <SubscribeSection />
      <div className="w-1/2">
        <img src={UsHeadlines} />
      </div>
    </section>
  );
}

export default NewsletterSection;
