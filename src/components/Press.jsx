import React from 'react';
import HeroPress from './HeroPress';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';
import NewsletterSection from './NewsletterSection';

import SubscribeHeadlines from '../assets/images/subscribe-b-desktop.jpg';

function MainContent() {
  const image = <img src={SubscribeHeadlines} />;
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <HeroPress />
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterSection image={image} />
    </main>
  );
}

export default MainContent;