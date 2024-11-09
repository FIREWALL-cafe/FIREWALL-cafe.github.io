import React from "react";
import UsHeadlines from "../assets/images/subscribe-d-desktop.jpg";
import SubscribeMailchimp from "../assets/images/subscribe_mailchimp.jpg";

function NewsletterSection() {
  return (
    <section className="flex overflow-hidden relative justify-center items-start w-full bg-gray-800 border-0 border-black border-solid min-h-[500px] max-md:max-w-full">
      <div className="flex flex-col px-24 justify-center items-start self-stretch w-1/2 max-md:max-w-full">
        <div className="flex flex-col max-w-full border-0 border-white border-solid shadow-sm">
          <div className="flex flex-col w-full shadow-sm">
            <div className="chinese flex flex-col w-full text-5xl font-medium leading-tight max-md:text-4xl">
              <h2 className="text-white max-md:text-4xl">Subscribe</h2>
              <div className="text-red-600 max-md:text-4xl">订阅</div>
            </div>
            <div className="flex flex-col mt-5 w-full text-xl">
              <p className="leading-8 text-white w-3/4">
                Get newsletter updates about upcoming events, press releases, and expert editorial.
              </p>
              <div className="w-1/2">
                <img src={SubscribeMailchimp} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={UsHeadlines} />
      </div>
    </section>
  );
}

export default NewsletterSection;
