import React from 'react';

function ImageGallery() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a38041e636e294b76da34a9150443f7ce4cd235bda831a2cfea276637badc9cb?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99", date: "12/12/2023" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffcab41c24179d6984eb927aa6b1e53a4c69526cd161e3350cdde31636914a59?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99", date: "12/12/2023" }
  ];

  return (
    <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-0 w-full max-md:mt-0 max-md:max-w-full">
        <div className="flex overflow-hidden gap-10 items-start p-12 w-full rounded-lg border border-red-600 border-solid bg-slate-100 text-neutral-600 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center w-full rounded-lg border-0 border-red-600 border-solid basis-0 min-w-[240px] max-md:max-w-full">
            <p className="text-xl leading-8 max-md:max-w-full">
              June 4th, known as the Tiananmen Square Incident, is a collective trauma for a generation of people, yet it remains a taboo topic in China.
            </p>
            <p className="mt-5 text-base leading-6 max-md:max-w-full">
              The crackdown, where People's Liberation Army soldiers opened fire on unarmed pro-democracy protesters, killing hundreds, drove the CCP to implement strict censorship (and eventually create the Great Firewall).
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-start mt-6 w-full max-md:max-w-full">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col grow shrink min-w-[240px] w-[234px]">
              <img loading="lazy" src={image.src} className="object-contain self-end max-w-full aspect-[1.25] w-[292px]" alt={`Gallery image ${index + 1}`} />
              <div className="flex gap-10 justify-between items-center mt-2 w-full">
                <div className="flex gap-2 justify-center items-center self-stretch p-1 my-auto w-6 min-h-[24px]">
                  <img loading="lazy" src={`http://b.io/ext_${11 + index * 2}-`} className="object-contain self-stretch my-auto aspect-square w-[18px]" alt="" />
                </div>
                <div className="self-stretch my-auto text-base text-zinc-400">{image.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;