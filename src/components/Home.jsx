import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";
import SearchTrendsSection from "./SearchTrendsSection";
import NewsletterSection from "./NewsletterSection";

import UsHeadlines from "../assets/images/subscribe-d-desktop.jpg";
import UsHeadlinesMobile from "../assets/images/subscribe-d-mobile.jpg";
function Home() {
  const image = <img src={UsHeadlines} alt="US Headlines" className="w-full h-full object-cover" />
  return (
    <main className="w-full">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <HeroSection />
        <AboutSection />
        <InfoSection />
        <SearchTrendsSection />
      </div>
      <NewsletterSection image={image} />
    </main>
  );
}

export default Home;
