import React from 'react';

function OffSeventeen() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2018/01/FirewallOFFoslo6_1920.jpg",
      description: "LED lights released in the Spikersuppa Square foundtain outside FIREWALL"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2018/01/FirewallOFFoslo3_1920.jpg",
      description: "Free wi-fi and Starbucks inside tent"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2018/01/FirewallOFFoslo5_1920.jpg",
      description: "Dan Phiffer & activist Maria Toorpakai Wazir search Pakistani conspiracy theory, \"Is Donald Trump Pakistani?\""
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2018/01/FirewallOFFoslo1_1920.jpg",
      description: "Searching Chinese political dissidents with Oslo Freedom Forum founder, Thor Halvorssen"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2018/01/FirewallOFFoslo_1920.jpg",
      description: "Inside pop-up at Spikersuppa Square, Oslo, Norway"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2018/01/FirewallOFFoslo5_1920-1.jpg",
      description: "FIREWALL pop-up in Spikersuppa Square, Oslo, Norway during Oslo Freedom Forum 2017"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              2017 Oslo Freedom Forum Pop-Up
            </h1>
            
            <h2 className="mt-6 text-2xl">
              May 20-24, 2017
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-gray-700">
                Location: Spikersuppa Square, Oslo, Norway
              </p>

              <p>
                Learn firsthand about online censorship through FIREWALL at the{' '}
                <a 
                  href="https://oslofreedomforum.com/events/2017-oslo-freedom-forum/program"
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oslo Freedom Forum
                </a>
                . This interactive pop-up internet cafe lets you experience how the 
                Great Firewall operates in China versus Google in Norway. The exhibit 
                will be open all day to the public in the park during the run of the 
                conference. Stop by for coffee and a search session!
              </p>

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

export default OffSeventeen; 