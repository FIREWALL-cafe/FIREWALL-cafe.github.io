import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function VbkoVienna() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/VBKO_1.jpg',
      description: "FIREWALL Pop-up at Austrian Association of Women Artists (VBKÖ). Photo by Claudia Romero."
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/VBKO_2.jpg',
      description: "FIREWALL founder Joyce Yu-Jean Lee in conversation with a participant. Photo by Claudia Romero."
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/VBKO_3.jpg',
      description: "FIREWALL Pop-up at Austrian Association of Women Artists (VBKÖ). In the background: LOOK AT HER, Digital Prints, by Hui Ye, Artist. Photo by Claudia Romero."
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/VBKO_4.jpg',
      description: "Joyce Yu Jean-Lee in conversation with participants about FIREWALL. Photo by Claudia Romero."
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/VBKO_5.jpg',
      description: "Search Session Instructions from the FIREWALL Pop-up at Austrian Association of Women Artists (VBKÖ). Photo by Claudia Romero."
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/VBKO_6.jpg',
      description: "Stickers inspired by \"sensitive-term\" Search Votes alongside the Search for Feminism exhibition catalogue. Photo by Claudia Romero."
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/VBKO_7.jpg',
      description: "Exhibition installation view"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              "Search for Feminism" at VBKÖ, Vienna, Austria
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClockIcon className="w-5 h-5" />
                  <div>
                    <p className="text-xl">Exhibition: Jan. 10 - Feb. 1, 2020</p>
                    <p className="text-gray-600">Opening Reception: Jan. 10, 2020, 7 PM</p>
                    <p className="text-gray-600">Gallery Hours: Fri 2-6 PM, Sat 11 AM-4 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.vbkoe.org/"
                    className="text-red-600 hover:text-red-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VBKÖ – Vereinigung bildender Künstlerinnen Österreichs
                  </a>
                  {' '}(Austrian Association of Women Artists)
                  <br />
                  Maysedergasse 2 (4th floor)
                  <br />
                  1010 Vienna
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700">
                Group exhibition Curated by Aline Rezende Lara & Julia Hartmann
              </p>

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

export default VbkoVienna; 