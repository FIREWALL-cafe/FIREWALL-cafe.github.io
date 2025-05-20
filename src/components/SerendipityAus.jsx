import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function SerendipityAus() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/StPolten3.jpg',
      description: "Pop-up exhibition at REDpoint, St. Pölten"
    },
    {
      src: process.env.PUBLIC_URL + '/images/StPolten1.jpg',
      description: "Participants conducting \"search session\" at exhibition, St. Pölten"
    },
    {
      src: process.env.PUBLIC_URL + '/images/StPolten2.jpg',
      description: "\"Search session\" at exhibition, St. Pölten"
    },
    {
      src: process.env.PUBLIC_URL + '/images/StPolten5.jpg',
      description: "Exterior View of Internet Cafe pop-up in St.Pölten"
    }
  ];

  const artists = [
    "Sarah Abu Abdallah",
    "Paolo Cirio",
    "Constant Dullart",
    "Brendan Howell",
    "Julian Palacz",
    "Suzanne Treister",
    "Joyce Yu-Jean Lee",
    "Dan Phiffer"
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              "Search for... Serendipity" in Austria
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Dec. 3-31, 2016</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    REDpoint
                    <br />
                    WeinerStr. 1300
                    <br />
                    St. Pölten, Austria
                  </p>
                  <p className="mt-2 font-body-01 text-gray-600">
                    curated by Julia Hartmann and Magdalena Stöger
                    <br />
                    photos by Magdalena Stöger
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <div>
                <h3 className="text-xl font-semibold mb-4 underline">ARTISTS</h3>
                <div className="flex flex-wrap gap-2">
                  {artists.map((artist, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a 
                  href="https://juleshart.wordpress.com/2016/12/06/594/"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Exhibition WEBSITE
                </a>
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

export default SerendipityAus; 