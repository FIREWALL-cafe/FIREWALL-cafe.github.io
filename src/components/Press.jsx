import React from 'react';
import HeroPress from './HeroPress';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';
import NewsletterSection from './NewsletterSection';

function MainContent() {
  const image = 'subscribeB';
  return (
    <>
      <HeroPress />
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterSection image={image} />
    </>
  );
}

export default MainContent;