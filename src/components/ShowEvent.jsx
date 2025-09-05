import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowLeft from './icons/ArrowLeft';
import EventDetail from './EventDetail';
import { eventsData } from '../data/eventsData';

function ShowEvent() {
  const { eventId } = useParams();

  // Get event data from the eventsData structure
  const eventData = eventsData[eventId];

  return (
    <div className="w-full">
      {eventData ? (
        <>
          <div className="mx-auto px-14 pt-14 max-md:px-5 text-red-600">
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

export default ShowEvent;
