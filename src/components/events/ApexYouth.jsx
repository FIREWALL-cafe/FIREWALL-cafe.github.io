import React from 'react';

function ApexYouth() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLApex-49.jpg",
      description: "Middle schoolers from PS 184 trying out the FIREWALL plugin"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLApex-47.jpg",
      description: "Students interacting with FIREWALL"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLApex-41.jpg",
      description: "Roundtable conversation with students from PS 184"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLApex-25.jpg",
      description: "Artist Joyce Yu-Jean Lee talking to youths about internet censorship"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLApex-22.jpg",
      description: "Artist Joyce Yu-Jean Lee talking to youths about internet censorship"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Apex for Youth After-School Field Trip
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Feb. 25 & Mar. 3, 2016, 4-6 PM
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location: Chinatown Soup, 16B Orchard Street, NYC, 10002
              </p>

              <p className="mb-4">
                60 local middle schoolers from the{' '}
                <a 
                  href="http://www.apexforyouth.org/"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apex for Youth
                </a>
                {' '}program at PS 184 in the Two Trees, Chinatown neighborhood visit FIREWALL cafe to experience 
                the installation. Representatives from FIREWALL and uProxy led discussions about information 
                freedom and Internet censorship.
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

export default ApexYouth; 