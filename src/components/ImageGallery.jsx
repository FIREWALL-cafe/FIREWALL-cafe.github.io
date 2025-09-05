import React from 'react';

function ImageGallery() {
  const images = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a38041e636e294b76da34a9150443f7ce4cd235bda831a2cfea276637badc9cb?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99',
      date: '12/12/2023',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ffcab41c24179d6984eb927aa6b1e53a4c69526cd161e3350cdde31636914a59?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99',
      date: '12/12/2023',
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="flex flex-col w-full">
        <div className="flex overflow-hidden flex-col p-6 md:p-12 w-full rounded-lg border border-red-600 border-solid bg-slate-100 text-neutral-600">
          <div className="flex flex-col justify-center w-full rounded-lg">
            <p className="text-xl leading-8">
              June 4th, known as the Tiananmen Square Incident, is a collective trauma for a
              generation of people, yet it remains a taboo topic in China.
            </p>
            <p className="mt-5 text-base leading-6">
              The crackdown, where People's Liberation Army soldiers opened fire on unarmed
              pro-democracy protesters, killing hundreds, drove the CCP to implement strict
              censorship (and eventually create the Great Firewall).
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-[5/4] rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={image.src}
                  className="w-full h-full object-cover"
                  alt={`Gallery photo ${index + 1}`}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center p-1">
                  <img
                    loading="lazy"
                    src={`http://b.io/ext_${11 + index * 2}-`}
                    className="w-[18px] h-[18px] object-contain"
                    alt=""
                  />
                </div>
                <div className="text-base text-zinc-400">{image.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
