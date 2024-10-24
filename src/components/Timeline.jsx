import React from 'react';

function Timeline() {
  const timelineEvents = [
    {
      year: 1989,
      active: false,
    },
    {
      year: 1991, active: true,
      title: "June 4th, known as the Tiananmen Square Incident, is a collective trauma for a generation of people, yet it remains a taboo topic in China.",
      description: "The crackdown, where People's Liberation Army soldiers opened fire on unarmed pro-democracy protesters, killing hundreds, drove the CCP to implement strict censorship (and eventually create the Great Firewall).",
      images: [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a38041e636e294b76da34a9150443f7ce4cd235bda831a2cfea276637badc9cb?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99", date: "12/12/2023" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffcab41c24179d6984eb927aa6b1e53a4c69526cd161e3350cdde31636914a59?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99", date: "12/12/2023" },
      ]
     },
    { year: 1994, active: false, },
    { year: 1995, active: false, }
  ];

  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      {timelineEvents.map((event, index) => (
        <div key={event.year} className="flex gap-2 relative pl-8 sm:pl-32 py-6 group">
          <div className={`flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 ${event.active ? 'after:bg-red-600 after:w-4 after:h-4 ' : 'after:bg-gray-600 after:w-2 after:h-2 '}`}>
            <time classname={`sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ${event.active ? 'text-xl translate-y-1.5 ' : 'text-xs '}`}>
              {event.year}
            </time>
          </div>
          {event.active && (
            <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-0 w-full max-md:mt-0 max-md:max-w-full">
              <div className="flex overflow-hidden gap-10 items-start p-3 w-full rounded-lg border border-red-600 border-solid bg-slate-100 text-neutral-600 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center w-full rounded-lg border-0 border-red-600 border-solid basis-0 max-md:max-w-full">
                  <p className="text-xl leading-8 max-md:max-w-full">
                    {event.title}
                  </p>
                  <p className="mt-5 text-base leading-6 text-zinc-400">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-start mt-6 w-full">
              {event.images?.map((image, index) => (
                <div key={index} className="flex flex-col grow shrink">
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
          )}
        </div>
      ))}
    </div>
  );
}

export default Timeline;