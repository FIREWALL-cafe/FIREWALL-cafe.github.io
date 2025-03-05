import React from 'react';

function OsloMiami() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2021/10/2021_FIREWALL_OFF_MIA-31-copy.jpg",
      description: "People engage with the FIREWALL search engine comparison."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2021/10/2021_FIREWALL_OFF_MIA-31-copy-4.jpg",
      description: "FIREWALL Pop-up at OFF MIA."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2021/10/2021_FIREWALL_OFF_MIA-25-copy.jpg",
      description: "FIREWALL installation view"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2021/10/2021_FIREWALL_OFF_MIA-31-copy-1.jpg",
      description: "Gulchehra Hoja, a media personality, journalist and outspoken activist who speaks about China's violation, specifically the Uyghur culture genocide."
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Oslo Freedom Forum 2021 Miami Interactive Expo
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Oct. 4–5, 2021
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
                  New World Center, Miami, Florida
                </a>
                <br />
                500 17th St, Miami Beach, FL 33139
              </p>

              <p className="mb-4">
                A two-day pop-up at an interactive expo focusing on fake news, censorship and encryption. 
                The event was part of the Oslo Freedom Forum 2021, Miami.
              </p>

              <p className="mb-8">
                Click{' '}
                <a 
                  href="https://oslofreedomforum.com/off21/#2021interactive"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                {' '}to learn more!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}

export default OsloMiami; 