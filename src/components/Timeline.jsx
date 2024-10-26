import React, { useState } from 'react';

function TimelineDisplay({ index }) {
  const timelineEvents = [
    {
      title: "June 4th, known as the Tiananmen Square Incident, is a collective trauma for a generation of people, yet it remains a taboo topic in China.",
      description: "The crackdown, where People’s Liberation Army soldiers opened fire on unarmed pro-democracy protesters, killing hundreds, drove the CCP to implement strict censorship (and eventually create the Great Firewall).",
      images: [],
    },
    {
      title: "The World Wide Web, developed by British computer scientist Tim Berners-Lee, was launched to the public, signifying the birth of the internet.",
      description: "At that time, Berners- Lee was working at the European Council for Nuclear Research(CERN), founded in 1954.",
      images: [],
    },
    {
      title: "Chinese Academy of Sciences (CAS) Institute of High Energy Physics (IHEP) built the first cable connected to the World Wide Web, marking China’s first connection with the Internet.",
      description: "The connection was established through the University of Karlsruhe in Germany.",
      images: [],
    },
    {
      title: "The U.S. Supreme Court case McIntyre v. Ohio Elections Commission reinforced the right to anonymous political speech, a key aspect of the First Amendment.",
      description: "The case involved McIntyre, who distributed anonymous leaflets criticizing a school tax levy.",
      images: [],
    },
    {
      title: "China issued “Temporary Regulations Governing Computer Information Networks and the Internet” in order to ban unauthorized network access. The U.S. enacted the Communications Decency Act (CDA) to regulate online content.",
      description: "The CDA aimed to protect minors from harmful content, but it was struck down by the Supreme Court in Reno v. ACLU.",
      images: [],
    },
    {
      title: "In the case of Reno vs. American Civil Liberties Union case, the U.S. Supreme Court affirmed that the internet is entitled to the same level of First Amendment protection as print media. The case involved the Communications Decency Act, which sought to regulate online content.",
      description: null,
      images: [],
    },
    {
      title: "China had approximately 2.1 million internet users, and the U.S. boasted over 75 million. The U.S. had a 3.5% internet penetration rate, while China had a 0.2% penetration rate.",
      description: null,
      images: [],
    },
    {
      title: "Following the 9/11 terrorist attacks, the U.S. government took a direct legislative approach to increase surveillance capabilities. The Electronic Communication Transactional Records Act of 1996 and the USA PATRIOT Act of 2001 expanded governmental powers under the guise of national security.",
      description: null,
      images: [],
    },
    {
      title: "The Golden Shield project, known as the “Great Firewall of China” was launched. A significant blockade of Google occurred following the activation.",
      description: null,
      images: [],
    },
    {
      title: "Journalist Shi Tao was sentenced to 10 years in prison after Yahoo shared his information with Chinese authorities. A year earlier, he had used his Yahoo email to send details of a government directive to downplay the 15th anniversary of the Tiananmen Square crackdown to Cary S. Hung, the co-founder of Taiwan Revolutionary Party.",
      description: null,
      images: [],
    },
    {
      title: "Following violent clashes in Xinjiang between Uyghur and Han Chinese populations, the Chinese government responded by shutting down internet access in the region for several months. The violence was a turning point that led to increased security measures and tighter information controls in Xinjiang.",
      description: null,
      images: [],
    },
    {
      title: "Google effectively withdrew its search engine from mainland China.  This withdrawal happened after Google discovered that Chinese hackers had attacked the company’s corporate infrastructure in an attempt to access the Gmail accounts of human rights activists.",
      description: null,
      images: [],
    },
    {
      title: "The Wenzhou high-speed rail crash was a turning point for China’s internet censorship and media control, as it sparked one of the boldest public online challenges to authority. In the following years, China’s most daring news outlets questioning public power faced increasing suppression and censorship.",
      description: null,
      images: [],
    },
    {
      title: "Beijing passed the Hong Kong National Security Law in response to the previous year’s protests. The law effectively criminalizes dissent by broadening the definitions of crimes like terrorism, subversion, secession, and collusion with foreign powers, creating a strong incentive for self-censorship.",
      description: null,
      images: [],
    },
    {
      title: "The White Paper movement in China emerged as a powerful protest against the suppression of free speech and the harsh Zero-COVID policy. Sparked by the tragic Urumqi fire, seen as a consequence of strict lockdowns, protesters across the country held up blank sheets of paper, symbolizing what they were forbidden to express, even calling for President Xi to step down.",
      description: null,
      images: [],
    },
    {
      title: "The Anti-espionage Law was enacted in mainland China. The law broadens the definition of “espionage”, granting authorities greater power to punish perceived threats to national security. Its vague terms, including “relying on espionage organizations” and unauthorized access to \“documents, data, and materials,\” create a chilling effect on Chinese citizens who engage with foreigners or foreign organizations.",
      description: null,
      images: [],
    },
    {
      title: "U.S. Congress passed the TikTok sell-or-ban bill, signaling tighter government control over social media amid rising concerns about data security and foreign influence. France arrested the Telegram CEO Pavel Durov for refusing to provide user information tied to suspected cyber crime.",
      description: null,
      images: [],
    },
  ];
  const event = timelineEvents[index];

  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full mt-10">
      <div className="flex overflow-hidden items-start p-3 w-full rounded-lg border border-red-600 border-solid bg-slate-100 text-neutral-600 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center w-full rounded-lg border-0 border-red-600 border-solid basis-0 max-md:max-w-full">
          <p className="text-xl leading-8 max-md:max-w-full">
            {event.title}
          </p>
          {event.description && <p className="mt-5 text-base leading-6 text-zinc-400">
            {event.description}
          </p>}
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
  );
}


function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? timelineYears.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === timelineYears.length - 1 ? 0 : prevIndex + 1
    );
  };

  const timelineYears = [
    1989,
    1991,
    1994,
    1995,
    1996,
    1997,
    1998,
    2001,
    2003,
    2005,
    2009,
    2010,
    2011,
    2020,
    2022,
    2023,
    2024,
  ];

  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex text-xl max-w-full max-md:max-w-full">
        This timeline offers a comparative analysis of internet development and governance in both China and the United States. It explores how these two nations have shaped digital communication and information control through historical events and policies.
      </div>
      <div className="flex flex-row max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:ml-0 max-md:w-full">
          <div className="flex gap-2 relative pl-8 sm:pl-32 py-4 group">
            <div onClick={goToPrevious} className={`flex flex-col sm:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 after:absolute sm:after:left-0 text-xs after:h-0 after:w-0 after:border-x-8 after:border-x-transparent after:border-b-8 after:border-b-red-600 '}`}>
            </div>
          </div>
          {timelineYears.map((year, index) => (
            <div key={index} onClick={() => setCurrentIndex(index)} className="flex gap-2 relative pl-8 sm:pl-32 py-4 group">
              <div className={`flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 ${index === currentIndex ? 'after:bg-red-600 after:w-4 after:h-4 text-xl ' : 'after:bg-gray-600 after:w-2 after:h-2 text-xs '}`}>
                <time className={`sm:absolute left-0 ${index === currentIndex ? 'translate-y-1.5 ' : 'translate-y-0.5 '} inline-flex items-center justify-center font-semibold uppercase w-20 h-6 mb-3 sm:mb-0`}>
                  {year}
                </time>
              </div>
            </div>
          ))}
          <div className="flex gap-2 relative pl-8 sm:pl-32 py-4 group">
            <div onClick={goToNext} className={`flex flex-col sm:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 after:absolute sm:after:left-0 text-xs after:h-0 after:w-0 after:border-x-8 after:border-x-transparent after:border-b-8 after:border-b-red-600 '}`}>
            </div>
          </div>
        </div>
        <TimelineDisplay index={currentIndex} />
      </div>
    </div>
  );
}

export default Timeline;