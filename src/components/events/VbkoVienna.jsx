import React from 'react';

function VbkoVienna() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_1.jpg",
      description: "FIREWALL Pop-up at Austrian Association of Women Artists (VBKÖ). Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_2.jpg",
      description: "FIREWALL founder Joyce Yu-Jean Lee in conversation with a participant. Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_3.jpg",
      description: "FIREWALL Pop-up at Austrian Association of Women Artists (VBKÖ). In the background: LOOK AT HER, Digital Prints, by Hui Ye, Artist. Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_4.jpg",
      description: "Joyce Yu Jean-Lee in conversation with participants about FIREWALL. Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_5.jpg",
      description: "Search Session Instructions from the FIREWALL Pop-up at Austrian Association of Women Artists (VBKÖ). Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_6.jpg",
      description: "Stickers inspired by \"sensitive-term\" Search Votes alongside the Search for Feminism exhibition catalogue. Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_7.jpg",
      description: "Exhibition installation view"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-zinc-400">Vienna Exhibition</div>
            
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              "Search for Feminism" at VBKÖ, Vienna, Austria
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Jan. 10 - Feb. 1, 2020
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="mb-2">
                  Location:{' '}
                  <a 
                    href="https://www.vbkoe.org/"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VBKÖ – Vereinigung bildender Künstlerinnen Österreichs
                  </a>
                  {' '}(Austrian Association of Women Artists)
                </p>
                <p className="text-gray-700">
                  Maysedergasse 2 (4th floor), 1010 Vienna
                </p>
              </div>

              <p>
                Group exhibition Curated by Aline Rezende Lara & Julia Hartmann
              </p>

              <div className="space-y-2">
                <p>
                  <span className="underline">Opening</span>: Fri, Jan 10th, 2020, 7pm
                </p>
                <p>
                  <span className="underline">On View</span>: 2-6p Fri, and 11-4p Sat until Feb 1st
                </p>
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

export default VbkoVienna; 