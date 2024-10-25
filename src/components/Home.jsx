import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";
import SearchTrendsSection from "./SearchTrendsSection";
import NewsletterSection from "./NewsletterSection";

function Home() {
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:py-24 max-md:max-w-full"></section>
        <div className="flex flex-col items-end px-20 max-md:pl-5">
          <div className="flex flex-col w-full max-md:max-w-full">
            <HeroSection />
            <AboutSection />
            <InfoSection />
            <SearchTrendsSection />
            <NewsletterSection />
          </div>
        </div>
    </main>
  );
}

export default Home;
