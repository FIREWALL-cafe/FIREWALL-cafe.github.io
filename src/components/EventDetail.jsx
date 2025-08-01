import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function EventDetail({ event }) {
  if (!event) {
    return <p>No event data available.</p>;
  }

  return (
    <section className="flex overflow-hidden justify-center items-start pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              {event.title}
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="space-y-2">
                {event.exhibition && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <ClockIcon className="w-5 h-5" />
                    <span className="font-body-01">Exhibition: {event.exhibition}</span>
                  </div>
                )}
                {event.lecture && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="font-body-01 ml-7">Lecture: {event.lecture}</span>
                  </div>
                )}
                {event.date && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <ClockIcon className="w-5 h-5" />
                    <span className="font-body-01">{event.date}</span>
                  </div>
                )}
              </div>

              {event.location && (
                <div className="flex gap-2">
                  <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                  <div>
                    {event.location.mapLink ? (
                      <a 
                        href={event.location.mapLink}
                        className="text-red-600 hover:text-red-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.location.name}
                      </a>
                    ) : (
                      <span>{event.location.name}</span>
                    )}
                    {event.location.address && event.location.address.map((line, index) => (
                      <React.Fragment key={index}>
                        <br />
                        {line}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <hr className="my-6 border-gray-200" />

              {event.description && event.description.map((paragraph, index) => (
                <p key={index} className="mb-4 font-body-02">
                  {paragraph}
                </p>
              ))}

              {event.links && event.links.map((link, index) => (
                <p key={index} className="mb-8 font-body-02">
                  {link.publication && <><em>{link.publication}</em> article: </>}
                  <a href={link.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-red-600 hover:text-red-800">
                    <em>{link.text}</em>
                  </a>
                </p>
              ))}
            </div>

            {event.images && event.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    {image.caption && (
                      <p className="mt-2 text-sm text-gray-600 font-body-01">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetail;