import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import NewsletterSection from './NewsletterSection';
import ArrowLeft from './icons/ArrowLeft';
import EventDetail from './EventDetail';
import { eventsData } from '../data/eventsData';

function Events() {
  const { eventId } = useParams();
  const image = 'subscribeE';

  if (eventId) {
    // Get event data from the eventsData structure
    const eventData = eventsData[eventId];

    return (
      <div className="w-full">
        {eventData ? (
          <>
            <div className="mx-auto px-2 md:px-14 pt-14 text-red-600">
              <Link to="/events" className="flex items-center gap-2">
                <ArrowLeft
                  color="currentColor"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                Back to Events
              </Link>
            </div>
            <div className="mx-auto">
              <EventDetail event={eventData} />
            </div>
          </>
        ) : (
          <p className="p-14 text-center">Event not found.</p>
        )}
      </div>
    );
  }

  return (
    <>
      <UpcomingEvents />
      <PastEvents />
      <NewsletterSection image={image} />
    </>
  );
}

export default Events;
