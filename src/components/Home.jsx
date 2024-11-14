import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";
import SearchTrendsSection from "./SearchTrendsSection";
import NewsletterSection from "./NewsletterSection";

import UsHeadlines from "../assets/images/subscribe-d-desktop.jpg";

function Home() {
  const image = <img src={UsHeadlines} />
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:max-w-full"></section>
        <div className="flex flex-col items-end px-20 max-md:px-5">
          <div className="flex flex-col w-full max-md:max-w-full">
            <HeroSection />
            <AboutSection />
            <InfoSection />
            <SearchTrendsSection />
          </div>
        </div>
      <NewsletterSection image={image} />
    </main>
  );
}

export default Home;
