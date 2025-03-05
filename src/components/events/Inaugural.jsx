import React from 'react';

function Inaugural() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_3948.jpg",
      description: "View from main Search Station inside gallery"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_3814.jpg",
      description: "Title Wall at Entrance of Exhibition"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_3774-1.jpg",
      description: "Exterior View of Internet Cafe"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_3864-2.jpg",
      description: "Search Stations"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_3960crop-1.jpeg",
      description: "FIREWALL Cafe paraphernalia"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_4230crop.jpeg",
      description: "FIREWALL Cafe Special Events"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_4212crop.jpeg",
      description: "Exhibition view"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_4248.jpg",
      description: "FIREWALL Cafe Tea Menu"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/04/IMG_3973.jpg",
      description: "TenRen Tea served at FIREWALL Cafe"
    }
  ];

  const supporters = [
    "Franklin Furnace Fund",
    "Asian Women Giving Circle",
    "Lower Manhattan Cultural Council"
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
                INAUGURAL New York 2016 Pop-up!
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Feb. 8 - Mar. 6, 2016
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-gray-700">
                  Location: Chinatown Soup, 16B Orchard Street, NYC, 10002
                </p>
                <p className="mt-4 font-semibold">
                  ARTIST RECEPTION: Sun, Feb 21, 2016, 6–9pm
                </p>
              </div>

              <div>
                <p>
                  Please join{' '}
                  {supporters.map((supporter, index) => (
                    <React.Fragment key={index}>
                      <span className="font-medium">{supporter}</span>
                      {index < supporters.length - 1 && index === supporters.length - 2 ? ' and ' : index < supporters.length - 1 ? ', ' : ' '}
                    </React.Fragment>
                  ))}
                  for the opening reception of FIREWALL Internet Cafe, created by 
                  Joyce Yu-Jean Lee in collaboration with Dan Phiffer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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

export default Inaugural; 