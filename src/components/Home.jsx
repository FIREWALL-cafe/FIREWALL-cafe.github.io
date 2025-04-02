import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";
import SearchTrendsSection from "./SearchTrendsSection";
import NewsletterSection from "./NewsletterSection";

function Home() {
  const image = 'usHeadlines'
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
