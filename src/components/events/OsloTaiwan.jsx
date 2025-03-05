import React from 'react';

function OsloTaiwan() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_OFF_TW-02.png",
      description: "Taiwanese visitors keying search terms into FIREWALL dual-search browser."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_OFF_TW-04.png",
      description: "People searching for the China-Taiwan specific topics on the FIREWALL system."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_OFF_TW-07.png",
      description: "FIREWALL Pop-up at OFF TW."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_OFF_TW-08.png",
      description: "A group of high school students understanding the influence of censorship from China."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_OFF_TW-05.png",
      description: "A picture of Joyce Yu-Jean Lee with Lingwei Li, who is known as \"Queer Lawyer\", advocating for LGBTQ+ and equality Justice in Taiwan."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_OFF_TW-06.jpg",
      description: "A picture of Joyce Yu-Jean Lee with Wu'erkaixi, one of the leaders of the Tiananmen protests."
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Oslo Freedom Forum 2022 Taiwan Interactive Expo
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Nov. 3, 2022
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location:{' '}
                <a 
                  href="https://www.google.com/maps/place/Murray+Student+Center/@41.7206041,-73.9355196,18.25z/data=!4m5!3m4!1s0x89dd3e077b997377:0xf1e3a80dd614c1f0!8m2!3d41.721027!4d-73.9355703"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grand Hyatt Taipei
                </a>
                <br />
                No.2, Songshou Rd, Xinyi District, Taipei City, Taiwan 110
              </p>

              <p className="mb-4">
                A one-day pop-up at an interactive expo focusing on the intersection of human rights with technology, media and politics. 
                The event was part of the Oslo Freedom Forum 2022, Taiwan.
              </p>

              <p className="mb-4">
                Click{' '}
                <a 
                  href="https://oslofreedomforum.com/offtw22/"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                {' '}to learn more!
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

export default OsloTaiwan; 