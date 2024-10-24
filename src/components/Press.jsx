import React from 'react';
import HeroPress from './HeroPress';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';
import ContactSection from './ContactSection';

function MainContent() {
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <HeroPress />
      <FeaturedArticle />
      <ArticleGrid />
      <ContactSection />
    </main>
  );
}

export default MainContent;