import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function OffEighteen() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/OFF18_expo1.jpg',
      description: "Artist Joyce Yu-Jean Lee giving participants a tour of FIREWALL"
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF18_expo2.jpg',
      description: "An audience member studies how the FIREWALL dual-search engine works."
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF18_expo3.jpg',
      description: "Co-founders of FIREWALL: Dan Phiffer, coder and Joyce Yu-Jean Lee, artist."
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF18_expo4.jpg',
      description: "Participants wrote their most interesting searches on a brick. Lucky winners would walk away with a raffle prize!"
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF18_expo5.jpg',
      description: "FIREWALL installation with raffle and bricks"
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF18_expo6.jpg',
      description: "A happy raffle winner with his prize – a book about Censorship!"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              10th Anniversary 2018 Oslo Freedom Forum
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">May 28, 2018, 11 AM-5:30 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Sentralen
                    <br />
                    Oslo, Norway
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <div className="space-y-4">
                <p>
                  Join us Monday at the Interactive Expo where we will run a "Best Search Session" 
                  Instagram contest! Come by for a search session, write your most interesting 
                  finding on a brick & add it to our FIREWALL in the expo.
                </p>

                <p>
                  Tag #FIREWALLcafe on Instagram… Top votes on{' '}
                  <a 
                    href="https://www.instagram.com/firewallcafe/" 
                    className="text-red-600 hover:text-red-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @firewallcafe Instagram poll
                  </a>
                  {' '}wins free Thule luggage & gifts!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.description}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 italic pl-4 border-l-2 border-red-600">
                      {image.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffEighteen; 