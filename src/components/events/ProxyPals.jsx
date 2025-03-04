import React from 'react';

function ProxyPals() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLuProxy2.18-1.jpg",
      description: "uProxy team leader explains how proxy technology works"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLuProxy2.18-2.jpg",
      description: "Participants test out uProxy"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLuProxy2.18-3-1.jpg",
      description: "Participants test out uProxy"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-zinc-400">Proxy Pals</div>
            
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Proxy Pals: Trial by FIREwall
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Feb. 25, 2016, 8 PM
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location: Chinatown Soup, 16B Orchard Street, NYC, 10002
              </p>

              <p className="mb-4">
                <a 
                  href="https://www.uproxy.org/"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uProxy
                </a>
                {' '}is a free extension for Chrome and Firefox that allows people all over the world to share 
                Internet connections to get past repressive censorship, and also powers part of the FIREWALL 
                experience. Come to learn more about how this technology works directly from the uProxy team.
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

export default ProxyPals; 