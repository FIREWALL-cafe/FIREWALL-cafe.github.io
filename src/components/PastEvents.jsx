import React from 'react';
import EventCard from './EventCard';
import Eventa from '../assets/images/events/Event-a-default.jpg';
import EventaHover from '../assets/images/events/event-a-hover.jpg';
import Eventb from '../assets/images/events/event-b-default.jpg';
import EventbHover from '../assets/images/events/event-b-hover.jpg';
import Eventc from '../assets/images/events/event-c-default.jpg';
import EventcHover from '../assets/images/events/event-c-hover.jpg';
import Eventd from '../assets/images/events/event-d-default.jpg';
import EventdHover from '../assets/images/events/event-d-hover.jpg';
import Evente from '../assets/images/events/event-e-default.jpg';
import EventeHover from '../assets/images/events/event-e-hover.jpg';
import Eventf from '../assets/images/events/event-f-default.jpg';
import EventfHover from '../assets/images/events/event-f-hover.jpg';
import Eventg from '../assets/images/events/event-g-default.jpg';
import EventgHover from '../assets/images/events/event-g-hover.jpg';
import Eventh from '../assets/images/events/event-h-default.jpg';
import EventhHover from '../assets/images/events/event-h-hover.jpg';
import Eventi from '../assets/images/events/event-i-default.jpg';
import EventiHover from '../assets/images/events/event-i-hover.jpg';
import Eventj from '../assets/images/events/event-j-default.jpg';
import EventjHover from '../assets/images/events/event-j-hover.jpg';
import Eventk from '../assets/images/events/event-k-default.jpg';
import EventkHover from '../assets/images/events/event-k-hover.jpg';
import Eventl from '../assets/images/events/event-l-default.jpg';
import EventlHover from '../assets/images/events/event-l-hover.jpg';
import Eventm from '../assets/images/events/event-m-default.jpg';
import EventmHover from '../assets/images/events/event-m-hover.jpg';
import Eventn from '../assets/images/events/event-n-default.jpg';
import EventnHover from '../assets/images/events/event-n-hover.jpg';
import Evento from '../assets/images/events/event-o-default.jpg';
import EventoHover from '../assets/images/events/event-o-hover.jpg';
import Eventp from '../assets/images/events/event-p-default.jpg';
import EventpHover from '../assets/images/events/event-p-hover.jpg';
import Eventq from '../assets/images/events/event-q-default.jpg';
import EventqHover from '../assets/images/events/event-q-hover.jpg';
import Eventr from '../assets/images/events/event-r-default.jpg';
import EventrHover from '../assets/images/events/event-r-hover.jpg';
import Events from '../assets/images/events/event-s-default.jpg';
import EventsHover from '../assets/images/events/event-s-hover.jpg';
import Eventt from '../assets/images/events/event-t-default.jpg';
import EventtHover from '../assets/images/events/event-t-hover.jpg';

const pastEvents = [
  // 2022 events
  {
    image: Eventi,
    imageHover: EventiHover,
    title: "Oslo Freedom Forum 2022 Taiwan Interactive Expo",
    date: "Nov. 3, 2022",
    location: "Grand Hyatt Taipei No.2, Songshou Rd, Xinyi District, Taipei City, Taiwan 110",
    link: "/events/oslo-freedom-forum-2022-taiwan-interactive-expo"
  },
  {
    image: Eventj,
    imageHover: EventjHover,
    title: "FIREWALL Pop-up Group Show in RVCC",
    date: "Aug. 31 - Sep. 30, 2022",
    location: "RVCC Art Gallery 118 Lamington Road, Branchburg, NJ 08876",
    link: "/events/firewall-pop-up-group-show-in-rvcc"
  },
  // 2021 events
  {
    image: Eventk,
    imageHover: EventkHover,
    title: "Oslo Freedom Forum 2021 Miami Interactive Expo",
    date: "Oct. 4–5, 2021",
    location: "500 17th St, Miami Beach, FL 33139",
    link: "/events/oslo-freedom-forum-2021-miami-interactive-expo"
  },
  // 2020 events
  {
    image: Eventl,
    imageHover: EventlHover,
    title: "Tiger Strikes Asteroid presents \"REDIRECT\"",
    date: "Jan. 24 - Feb. 24, 2020",
    location: "RAMP Gallery, 821 Riverside Drive, Asheville, NC",
    link: "/events/redirect-at-ramp-gallery-asheville-nc"
  },
  {
    image: Eventa,
    imageHover: EventaHover,
    title: "Pop-up with \"Inside China's Surveillance State\", a Lecture by Megha Rajagopalan",
    date: "Feb. 26, 2020, 5:00 PM - 10:00PM",
    location: "Marist College 3399 North Rd, Poughkeepsie, NY 12601",
    description: "Join us for a pop-up exhibition of the \"Inside China's Surveillance State\" project, a lecture by Megha Rajagopalan, and a panel discussion with the artist and experts in the field. The event is free and open to the public.",
    link: "/events/firewall-pop-up-with-inside-chinas-surveillance-state-a-lecture-by-megha-rajagopalan"
  },
  {
    image: Eventm,
    imageHover: EventmHover,
    title: "\"Search for Feminism\" at VBKÖ, Vienna, Austria",
    date: "Jan. 10 - Feb. 1, 2020",
    location: "VBKÖ – (Austrian Association of Women Artists) Maysedergasse 2, 1010 Vienna",
    link: "/events/search-for-feminism-at-vbko-vienna-austria"
  },
  {
    image: Eventb,
    imageHover: EventbHover,
    title: "Re(actions) to the Great Chinese Firewall",
    date: "Jan. 16, 2020, 6:00 PM",
    location: "VBKÖ – Maysedergasse 2 (4th floor), 1010 Vienna",
    link: "/events/reactions-to-the-great-chinese-firewall"
  },
  // 2019 events
  {
    image: Eventc,
    imageHover: EventcHover,
    title: "FIREWALL Featured on BBC \"The Real Story\"",
    date: "Nov. 1, 2019",
    link: "/events/firewall-featured-on-bbc-the-real-story"
  },
  {
    image: Eventn,
    imageHover: EventnHover,
    title: "New Media Caucus \"Border Control\" Symposium",
    date: "Sep. 21, 2019, 10:45 AM to 12:15 PM",
    location: "Penny Stamps Gallery 2000 Bonisteel Boulevard, Ann Arbor, MI 48109",
    link: "/events/new-media-caucus-border-control-symposium"
  },
  {
    image: EventoHover,
    imageHover: Evento,
    title: "\"NOT FOUND\" in Hong Kong",
    date: "Jan. 12-23, 2019",
    location: "Green Wave Art 404 Shanghai Street, Yau Ma Tei, Kowloon Two",
    link: "/events/hknotfound"
  },
  // 2018 events
  {
    image: Eventp,
    imageHover: EventpHover,
    title: "10th Anniversary 2018 Oslo Freedom Forum",
    date: "May 28, 2018, 11 AM-5:30 PM",
    location: "Sentralen, Oslo, Norway",
    link: "/events/off-2018"
  },
  // 2017 events
  {
    image: Eventq,
    imageHover: EventqHover,
    title: "2017 OFF New York Interactive Expo",
    date: "Sep. 19, 2017, 9 AM-5 PM",
    location: "Alice Tully Hall, Lincoln Center, NYC",
    link: "/events/off-nyc-2017"
  },
  {
    image: Eventr,
    imageHover: EventrHover,
    title: "2017 Oslo Freedom Forum Pop-Up",
    date: "May 20-24, 2017",
    location: "Spikersuppa Square, Oslo, Norway",
    link: "/events/off2017"
  },
  // 2016 events
  {
    image: Events,
    imageHover: EventsHover,
    title: "\"Search for... Serendipity\" in Austria",
    date: "Dec. 3-31, 2016",
    location: "REDpoint, WeinerStr. 1300  St. Pölten, Austria",
    link: "/events/search-for-serendipity-in-austria"
  },
  {
    image: Evente,
    imageHover: EventeHover,
    title: "Marymount Manhattan \"Digital Media & Society\" Class Field Trip",
    date: "Feb. 29, 2016, 8-9:30 PM",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "/events/marymount-manhattan-digital-media-society-class-field-trip"
  },
  {
    image: Eventf,
    imageHover: EventfHover,
    title: "Creative Hacktivism Roundtable",
    date: "Feb. 26, 2016, 7:30 PM",
    location: "Orbital, 155 Rivington Street, NYC 10002",
    link: "/events/creative-hacktivism-roundtable"
  },
  {
    image: Eventd,
    imageHover: EventdHover,
    title: "Apex for Youth After-School Field Trip",
    date: "Feb. 25 & Mar. 3, 2016, 4-6 PM",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "/events/apex-for-youth-after-school-field-trip"
  },
  {
    image: Eventg,
    imageHover: EventgHover,
    title: "Proxy Pals: Trial by FIREwall",
    date: "Feb. 25, 2016, 8 PM",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "/events/proxy-pals-trial-by-firewall"
  },
  {
    image: Eventh,
    imageHover: EventhHover,
    title: "Networked Feminism in China",
    date: "Feb. 19, 2016, 7:30 PM",
    location: "Orbital, 155 Rivington Street, NYC 10002",
    link: "/events/networked-feminism-in-china"
  },
  {
    image: Eventt,
    imageHover: EventtHover,
    title: "INAUGURAL New York 2016 Pop-up!",
    date: "Feb. 8 - Mar. 6, 2016",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "/events/inaugural-new-york-2016-pop-up"
  }
];

function PastEvents() {
  return (
    <section className="flex flex-col items-center px-2 md:px-14 pt-12 pb-16 w-full border-t border-solid bg-slate-100 border-t-neutral-300 max-md:pb-24 is-full-width-content">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto">
        <h2 className="self-center font-display-04 font-bitmap-song leading-tight text-black max-md:text-4xl">
          Past events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 w-full max-md:mt-10 justify-items-center">
          {pastEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PastEvents;