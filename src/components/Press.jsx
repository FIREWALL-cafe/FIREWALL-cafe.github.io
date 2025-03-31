import React from 'react';
import HeroPress from './HeroPress';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';
import NewsletterSection from './NewsletterSection';

function MainContent() {
  const image = 'subscribeB';
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <div className="max-w-[1080px] mx-auto w-full px-5 md:px-0">
        <HeroPress />
        <FeaturedArticle />
      </div>
      <ArticleGrid />
      <div className="max-w-[1080px] mx-auto w-full">
        <NewsletterSection image={image} />
      </div>
    </main>
  );
}

export default MainContent;