import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import InfoSection from './InfoSection';
import SearchTrendsSection from './SearchTrendsSection';
import NewsletterSection from './NewsletterSection';

function Home() {
  const image = 'usHeadlines';
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InfoSection />
      <SearchTrendsSection />
      <NewsletterSection image={image} />
    </>
  );
}

export default Home;
