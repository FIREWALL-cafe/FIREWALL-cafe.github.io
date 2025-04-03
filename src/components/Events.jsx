import React from 'react';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import NewsletterSection from './NewsletterSection';

function Events() {
  const image = 'subscribeE';
  return (
    <>
      <UpcomingEvents />
      <PastEvents />
      <NewsletterSection image={image} />
    </>
  );
}

export default Events;