import React from 'react';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import Newsletter from './Newsletter';

function Events() {
  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <main>
        <UpcomingEvents />
        <PastEvents />
        <Newsletter />
      </main>
    </div>
  );
}

export default Events;