import React from 'react';

function HongKongNotFound() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/06/Firewall_HK_1920.jpg",
      description: "Participants keying search terms into FIREWALL dual-search browser"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Firewall_HK5_1920-1.jpg",
      description: "Artist Joyce Yu-Jean Lee explains the concept of FIREWALL to participants"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Firewall_HK6_1920-950x629-1.jpg",
      description: "Discussion group after \"Not Found\", a performance by artist Ying Ting"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-zinc-400">Hong Kong</div>
            
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              "NOT FOUND" in Hong Kong
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Jan. 12-23, 2019
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location:{' '}
                <a 
                  href="https://www.facebook.com/greenwaveart/photos/a.934648293318071/1977824189000471/?type=3&theater"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Center for Community Cultural Development – Green Wave Art
                </a>
                <br />
                404 Shanghai Street, Yau Ma Tei, Kowloon
              </p>

              <p className="mb-4">
                Two-person exhibition with artist, Ying Ting; curated by Iago
              </p>

              <p className="mb-4">
                <span className="underline">Opening</span>: Sat, Jan 12th, 2019 1-8pm
              </p>

              <p className="mb-4">
                <span className="underline">On view</span>: 1-8p Tues-Sun until Jan 23rd
              </p>

              <p className="mb-4">
                <span className="underline">Ying Ting Performances</span>: 3 & 7p on Sat, Jan 12th & Sun, the 13th
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
                  <p className="mt-2 text-sm text-gray-600">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HongKongNotFound; 