import React, { useState } from 'react';

function TimelineAlternate() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timelineEvents = [
    {
      year: 1989,
      title: "June 4th, known as the Tiananmen Square Incident, is a collective trauma for a generation of people, yet it remains a taboo topic in China.",
      description: "The crackdown, where People's Liberation Army soldiers opened fire on unarmed pro-democracy protesters, killing hundreds, drove the CCP to implement strict censorship (and eventually create the Great Firewall).",
      images: [
        { type: 'google', date: '06/04/1989', placeholder: 'Tiananmen Square protests' },
        { type: 'baidu', date: '06/04/1989', placeholder: 'Limited results' }
      ],
    },
    {
      year: 1991,
      title: "The World Wide Web, developed by British computer scientist Tim Berners-Lee, was launched to the public, signifying the birth of the internet.",
      description: "At that time, Berners-Lee was working at the European Council for Nuclear Research(CERN), founded in 1954.",
      images: [],
    },
    {
      year: 1994,
      title: "Chinese Academy of Sciences (CAS) Institute of High Energy Physics (IHEP) built the first cable connected to the World Wide Web, marking China's first connection with the Internet.",
      description: "The connection was established through the University of Karlsruhe in Germany.",
      images: [],
    },
    {
      year: 1995,
      title: "The U.S. Supreme Court case McIntyre v. Ohio Elections Commission reinforced the right to anonymous political speech, a key aspect of the First Amendment.",
      description: "The case involved McIntyre, who distributed anonymous leaflets criticizing a school tax levy.",
      images: [],
    },
    {
      year: 1996,
      title: "China issued 'Temporary Regulations Governing Computer Information Networks and the Internet' in order to ban unauthorized network access. The U.S. enacted the Communications Decency Act (CDA) to regulate online content.",
      description: "The CDA aimed to protect minors from harmful content, but it was struck down by the Supreme Court in Reno v. ACLU.",
      images: [],
    },
    {
      year: 1997,
      title: "In the case of Reno vs. American Civil Liberties Union case, the U.S. Supreme Court affirmed that the internet is entitled to the same level of First Amendment protection as print media.",
      description: "The case involved the Communications Decency Act, which sought to regulate online content.",
      images: [],
    },
    {
      year: 1998,
      title: "China had approximately 2.1 million internet users, and the U.S. boasted over 75 million. The U.S. had a 3.5% internet penetration rate, while China had a 0.2% penetration rate.",
      description: null,
      images: [],
    },
    {
      year: 2001,
      title: "Following the 9/11 terrorist attacks, the U.S. government took a direct legislative approach to increase surveillance capabilities.",
      description: "The Electronic Communication Transactional Records Act of 1996 and the USA PATRIOT Act of 2001 expanded governmental powers under the guise of national security.",
      images: [],
    },
    {
      year: 2003,
      title: "The Golden Shield project, known as the 'Great Firewall of China' was launched. A significant blockade of Google occurred following the activation.",
      description: null,
      images: [
        { type: 'google', date: '01/15/2003', placeholder: 'Great Firewall news' },
        { type: 'baidu', date: '01/15/2003', placeholder: 'Filtered results' }
      ],
    },
    {
      year: 2005,
      title: "Journalist Shi Tao was sentenced to 10 years in prison after Yahoo shared his information with Chinese authorities.",
      description: "A year earlier, he had used his Yahoo email to send details of a government directive to downplay the 15th anniversary of the Tiananmen Square crackdown.",
      images: [],
    },
    {
      year: 2009,
      title: "Following violent clashes in Xinjiang, the Chinese government responded by shutting down internet access in the region for several months.",
      description: "The violence was a turning point that led to increased security measures and tighter information controls in Xinjiang.",
      images: [],
    },
    {
      year: 2010,
      title: "Google effectively withdrew its search engine from mainland China.",
      description: "This withdrawal happened after Google discovered that Chinese hackers had attacked the company's infrastructure to access Gmail accounts of human rights activists.",
      images: [
        { type: 'google', date: '03/23/2010', placeholder: 'Google exits China' },
        { type: 'baidu', date: '03/23/2010', placeholder: 'Baidu dominance' }
      ],
    },
    {
      year: 2011,
      title: "The Wenzhou high-speed rail crash was a turning point for China's internet censorship and media control.",
      description: "It sparked one of the boldest public online challenges to authority, leading to increased suppression of news outlets.",
      images: [],
    },
    {
      year: 2020,
      title: "Beijing passed the Hong Kong National Security Law in response to the previous year's protests.",
      description: "The law effectively criminalizes dissent by broadening definitions of crimes like terrorism and subversion.",
      images: [],
    },
    {
      year: 2022,
      title: "The White Paper movement in China emerged as a powerful protest against the suppression of free speech and the harsh Zero-COVID policy.",
      description: "Protesters held up blank sheets of paper, symbolizing what they were forbidden to express.",
      images: [],
    },
    {
      year: 2023,
      title: "The Anti-espionage Law was enacted in mainland China.",
      description: "The law broadens the definition of espionage, granting authorities greater power to punish perceived threats to national security.",
      images: [],
    },
    {
      year: 2024,
      title: "U.S. Congress passed the TikTok sell-or-ban bill, signaling tighter government control over social media.",
      description: "France arrested the Telegram CEO Pavel Durov for refusing to provide user information tied to suspected cyber crime.",
      images: [
        { type: 'google', date: '04/24/2024', placeholder: 'TikTok ban news' },
        { type: 'baidu', date: '04/24/2024', placeholder: 'Social media control' }
      ],
    },
  ];

  const currentEvent = timelineEvents[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? timelineEvents.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === timelineEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getAllYears = () => {
    return timelineEvents.map((event, index) => ({
      index,
      year: event.year
    }));
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center px-8 py-[120px] w-full">
      <div className="max-w-[928px] w-full relative">
        {/* Vertical line - continuous timeline connecting both arrows */}
        <div className="absolute left-[104px] top-[108px] h-[420px] w-[1px] bg-gray-300" />
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-[92px] top-[96px] w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transform rotate-180 z-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute left-[92px] top-[504px] w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center z-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Main content area */}
        <div className="flex relative">
          {/* Years sidebar with fixed height */}
          <div className="w-[105px] flex flex-col relative overflow-hidden h-[480px] top-[120px]">
            <div 
              className="flex flex-col transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateY(${180 - (currentIndex * 72)}px)`
              }}
            >
              {getAllYears().map((item) => (
                <div
                  key={item.index}
                  className="flex items-center justify-end relative h-[72px]"
                >
                  <button
                    onClick={() => setCurrentIndex(item.index)}
                    className={`pr-2 transition-all flex items-center justify-end h-full ${
                      item.index === currentIndex 
                        ? 'text-[44px] font-bold text-black leading-none' 
                        : 'text-[24px] text-gray-500 leading-none'
                    }`}
                  >
                    {item.year}
                  </button>
                  {/* Red dot for selected year, gray dot for non-selected */}
                  {item.index === currentIndex ? (
                    <div className="absolute right-[-9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-600 border-2 border-white z-20" />
                  ) : (
                    <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[2px] h-[2px] rounded-full bg-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Event content */}
          <div className="flex-1 pl-[42px] pt-[120px]">
            <div className="w-[600px]">
              {/* Event card */}
              <div className="bg-gray-50 border border-red-600 rounded-lg p-12">
                <h2 className="text-xl leading-[30px] text-black mb-5">
                  {currentEvent.title}
                </h2>
                {currentEvent.description && (
                  <p className="text-[15px] leading-[22.5px] text-black">
                    {currentEvent.description}
                  </p>
                )}
              </div>

              {/* Image gallery */}
              {currentEvent.images.length > 0 && (
                <div className="flex gap-4 mt-6">
                  {currentEvent.images.map((image, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className={`w-[292px] h-[233px] rounded-[5px] border-2 ${
                        image.type === 'google' 
                          ? 'bg-blue-50 border-blue-400' 
                          : 'bg-red-50 border-red-400'
                      } flex items-center justify-center overflow-hidden`}>
                        <div className="w-[270px] h-[211px] bg-gradient-to-br from-gray-100 to-gray-200 rounded flex flex-col items-center justify-center">
                          <div className={`text-6xl mb-2 ${
                            image.type === 'google' ? 'text-blue-400' : 'text-red-400'
                          }`}>
                            {image.type === 'google' ? '🔍' : '🚫'}
                          </div>
                          <p className="text-sm text-gray-600 px-4 text-center">
                            {image.placeholder}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            image.type === 'google' 
                              ? 'bg-blue-100 text-blue-600' 
                              : 'bg-red-100 text-red-600'
                          }`}>
                            {image.type === 'google' ? (
                              <span className="font-bold text-xs">G</span>
                            ) : (
                              <span className="font-bold text-xs">百</span>
                            )}
                          </div>
                          <span className="text-xs text-gray-600">
                            {image.type === 'google' ? 'Google' : 'Baidu'}
                          </span>
                        </div>
                        <span className="text-[13px] text-gray-500">{image.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gradient overlay at bottom of years list - positioned to not affect timeline */}
        <div className="absolute left-0 bottom-[200px] w-[100px] h-[68px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default TimelineAlternate;