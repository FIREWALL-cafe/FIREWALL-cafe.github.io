import React from 'react';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import NewsletterSection from './NewsletterSection';

function Events() {
  const image = 'subscribeE';
  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <main>
        <UpcomingEvents />
        <PastEvents />
        <NewsletterSection image={image} />
      </main>
    </div>
  );
}

export default Events;