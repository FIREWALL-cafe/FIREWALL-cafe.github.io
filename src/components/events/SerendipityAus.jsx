import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

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
    <section className="flex overflow-hidden justify-center items-start px-4 md:px-8 pb-16 w-full bg-white max-md:pb-24">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full max-w-[1080px]">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px]">
          <div className="flex flex-col w-full">
            <h1 className="mt-10 text-[56px] font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              "Search for... Serendipity" in Austria
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="text-xl">Dec. 3-31, 2016</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">
                    REDpoint
                    <br />
                    WeinerStr. 1300
                    <br />
                    St. Pölten, Austria
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    curated by Julia Hartmann and Magdalena Stöger
                    <br />
                    photos by Magdalena Stöger
                  </p>
                </div>
              </div>

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
                  className="text-blue-600 hover:text-blue-800 underline"
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
                    <p className="mt-2 text-sm text-gray-600 italic">
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