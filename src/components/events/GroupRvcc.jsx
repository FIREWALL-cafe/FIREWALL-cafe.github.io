import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function GroupRvcc() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/2022_FIREWALL_RVC-05.png',
      description: "From left to right: Joyce Yu-Jean Lee, artist and founder of FIREWALL, Lydia Grey, curator of 'The Future is'."
    },
    {
      src: process.env.PUBLIC_URL + '/images/2022_FIREWALL_RVC-04.png',
      description: "FIREWALL Pop-up at RVCC Art Gallery."
    },
    {
      src: process.env.PUBLIC_URL + '/images/2022_FIREWALL_RVC-07.png',
      description: "A group of students engaging in FIREWALL searching and discussing the results."
    },
    {
      src: process.env.PUBLIC_URL + '/images/2022_FIREWALL_RVC-08.png',
      description: "A group of students engaging in FIREWALL searching and discussing the results."
    },
    {
      src: process.env.PUBLIC_URL + '/images/2022_FIREWALL_RVC-06.png',
      description: "A visitor being surprised by the censored results on Baidu."
    },
    {
      src: process.env.PUBLIC_URL + '/images/2022_FIREWALL_RVC-01.png',
      description: "An artist sharing by Joyce Yu-Jean Lee about FIREWALL and internet censorship to a full room at Raritan Valley Community College."
    }
  ];

  const artists = [
    "Alisha B Wormsley",
    "Jim Jeffers",
    "Jonathan Leiter",
    "Joyce Yu-Jean Lee",
    "Lauren Rosenthal McManus",
    "Paul Rucker",
    "Rebekah Taussig",
    "Sonia Garcia",
    "Vivian Vassar",
    "Lydia Grey"
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              FIREWALL Pop-up Group Show in RVCC
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="text-xl">Aug. 31 - Sep. 30, 2022</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.google.com/maps/place/Murray+Student+Center/@41.7206041,-73.9355196,18.25z/data=!4m5!3m4!1s0x89dd3e077b997377:0xf1e3a80dd614c1f0!8m2!3d41.721027!4d-73.9355703"
                    className="text-red-600 hover:text-red-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Raritan Valley Community College Art Gallery
                  </a>
                  <br />
                  118 Lamington Road
                  <br />
                  Branchburg, NJ 08876
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700 font-body-02">
                FIREWALL Pops-Up in a Group exhibition, <em>The Future is</em>, curated by Lydia Grey Barnes 
                and coordinated by Darren McManus, featuring artists:
              </p>

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.description}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 font-body-04 pl-4 border-l-2 border-red-600">{image.description}</p>
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

export default GroupRvcc; 