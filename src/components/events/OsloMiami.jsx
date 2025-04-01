import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function OsloMiami() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/2021_FIREWALL_OFF_MIA-31-copy.jpg',
      description: "People engage with the FIREWALL search engine comparison."
    },
    {
      src: process.env.PUBLIC_URL + '/images/2021_FIREWALL_OFF_MIA-31-copy-4.jpg',
      description: "FIREWALL Pop-up at OFF MIA."
    },
    {
      src: process.env.PUBLIC_URL + '/images/2021_FIREWALL_OFF_MIA-25-copy.jpg',
      description: "FIREWALL installation view"
    },
    {
      src: process.env.PUBLIC_URL + '/images/2021_FIREWALL_OFF_MIA-31-copy-1.jpg',
      description: "Gulchehra Hoja, a media personality, journalist and outspoken activist who speaks about China's violation, specifically the Uyghur culture genocide."
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-04 leading-[58px] text-black">
              2021 Oslo Freedom Forum Miami
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Oct. 4, 2021</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Miami, FL
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.description}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 italic">{image.description}</p>
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

export default OsloMiami; 