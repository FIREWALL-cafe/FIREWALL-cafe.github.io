import React from 'react';

function OffNyc() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/OFF17_1-1.jpg",
      description: "From left to right: Teng Biao, human rights activist and lawyer, Joyce Yu-Jean Lee, founder of FIREWALL, Lu Miaoqing, human rights laywer"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/OFF17_2-1.jpg",
      description: "A search session for \"Xi Jinping Winnie the Pooh\""
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/OFF17_3-1.jpg",
      description: "Professor Joyce Yu-Jean Lee with students from New Jersey City University"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/OFF17_4-1.jpg",
      description: "A search station at Alice Tully Hall, Lincoln Center"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-zinc-400">Oslo Freedom Forum</div>
            
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              2017 OFF New York Interactive Expo
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Sep. 19, 2017, 9 AM-5 PM
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-gray-700">
                Location: Alice Tully Hall, Lincoln Center, NYC
              </p>

              <p>
                A one-day "Search Session" at an Interactive Expo focusing on the 
                intersection of human rights with technology, media and politics. 
                Event held concurrent with the UN General Assembly in NYC.
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

export default OffNyc; 