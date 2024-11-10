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
  {
    image: Eventa,
    imageHover: EventaHover,
    title: "Pop-up with \"Inside China's Surveillance State\", a Lecture by Megha Rajagopalan",
    date: "Feb. 26, 2020, 5:00 PM - 10:00PM",
    location: "Marist College 3399 North Rd, Poughkeepsie, NY 12601",
    description: "Join us for a pop-up exhibition of the \"Inside China's Surveillance State\" project, a lecture by Megha Rajagopalan, and a panel discussion with the artist and experts in the field. The event is free and open to the public.",
    link: "https://firewallcafe.com/events/firewall-pop-up-with-inside-chinas-surveillance-state-a-lecture-by-megha-rajagopalan/"
  },
  {
    image: Evente,
    imageHover: EventeHover,
    title: "Marymount Manhattan \"Digital Media & Society\" Class Field Trip",
    date: "Feb. 29, 2016, 8-9:30 PM",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "https://firewallcafe.com/events/marymount-manhattan-digital-media-society-class-field-trip/"
  },
  {
    image: Eventi,
    imageHover: EventiHover,
    title: "Oslo Freedom Forum 2022 Taiwan Interactive Expo",
    date: "Nov. 3, 2022",
    location: "Grand Hyatt Taipei No.2, Songshou Rd, Xinyi District, Taipei City, Taiwan 110",
    link: "https://firewallcafe.com/events/oslo-freedom-forum-2022-taiwan-interactive-expo/"
  },
  {
    image: Eventb,
    imageHover: EventbHover,
    title: "Re(actions) to the Great Chinese Firewall",
    date: "Jan. 16, 2020, 6:00 PM",
    location: "VBKÖ – Maysedergasse 2 (4th floor), 1010 Vienna",
    link: "https://firewallcafe.com/events/reactions-to-the-great-chinese-firewall/"
  },
  {
    image: Eventc,
    imageHover: EventcHover,
    title: "FIREWALL Featured on BBC \"The Real Story\"",
    date: "Nov. 1, 2019",
    link: "https://firewallcafe.com/events/firewall-featured-on-bbc-the-real-story/"
  },
  {
    image: Eventd,
    imageHover: EventdHover,
    title: "Apex for Youth After-School Field Trip",
    date: "Feb. 25 & Mar. 3, 2016, 4-6 PM",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "https://firewallcafe.com/events/apex-for-youth-after-school-field-trip/"
  },
  {
    image: Eventf,
    imageHover: EventfHover,
    title: "Creative Hacktivism Roundtable",
    date: "Feb. 26, 2016, 7:30 PM",
    location: "Orbital, 155 Rivington Street, NYC 10002",
    link: "https://firewallcafe.com/events/creative-hacktivism-roundtable/"
  },
  {
    image: Eventg,
    imageHover: EventgHover,
    title: "Proxy Pals: Trial by FIREwall",
    date: "Feb. 25, 2016, 8 PM",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "https://firewallcafe.com/events/proxy-pals-trial-by-firewall/"
  },
  {
    image: Eventh,
    imageHover: EventhHover,
    title: "Networked Feminism in China",
    date: "Feb. 19, 2016, 7:30 PM",
    location: "Orbital, 155 Rivington Street, NYC 10002",
    link: "https://firewallcafe.com/events/networked-feminism-in-china/"
  },
  {
    image: Eventj,
    imageHover: EventjHover,
    title: "FIREWALL Pop-up Group Show in RVCC",
    date: "Aug. 31 - Sep. 30, 2022",
    location: "RVCC Art Gallery 118 Lamington Road, Branchburg, NJ 08876",
    link: "https://firewallcafe.com/events/firewall-pop-up-group-show-in-rvcc/"
  },
  {
    image: Eventk,
    imageHover: EventkHover,
    title: "Oslo Freedom Forum 2021 Miami Interactive Expo",
    date: "Oct. 4–5, 2021",
    location: "500 17th St, Miami Beach, FL 33139",
    link: "https://firewallcafe.com/events/oslo-freedom-forum-2021-miami-interactive-expo/"
  },
  {
    image: Eventl,
    imageHover: EventlHover,
    title: "Tiger Strikes Asteroid presents \"REDIRECT\"",
    date: "Jan. 24 - Feb. 24, 2020",
    location: "RAMP Gallery, 821 Riverside Drive, Asheville, NC",
    link: "https://firewallcafe.com/events/tiger-strikes-asteroid-presents-redirect/"
  },
  {
    image: Eventm,
    imageHover: EventmHover,
    title: "\"Search for Feminism\" at VBKÖ, Vienna, Austria",
    date: "Jan. 10 - Feb. 1, 2020",
    location: "VBKÖ – (Austrian Association of Women Artists) Maysedergasse 2, 1010 Vienna",
    link: "https://firewallcafe.com/events/search-for-feminism-at-vbko-vienna-austria/"
  },
  {
    image: Eventn,
    imageHover: EventnHover,
    title: "New Media Caucus \"Border Control\" Symposium",
    date: "Sep. 21, 2019, 10:45 AM to 12:15 PM",
    location: "Penny Stamps Gallery 2000 Bonisteel Boulevard, Ann Arbor, MI 48109",
    link: "https://firewallcafe.com/events/new-media-caucus-border-control-symposium/"
  },
  {
    image: EventoHover,
    imageHover: Evento,
    title: "\"NOT FOUND\" in Hong Kong",
    date: "Jan. 12-23, 2019",
    location: "Green Wave Art 404 Shanghai Street, Yau Ma Tei, Kowloon Two",
    link: "https://firewallcafe.com/events/not-found-in-hong-kong/"
  },
  {
    image: Eventp,
    imageHover: EventpHover,
    title: "10th Anniversary 2018 Oslo Freedom Forum",
    date: "JMay 28, 2018, 11 AM-5:30 PM",
    location: "Sentralen, Oslo, Norway",
    link: "https://firewallcafe.com/events/10th-anniversary-2018-oslo-freedom-forum/"
  },
  {
    image: Eventq,
    imageHover: EventqHover,
    title: "2017 OFF New York Interactive Expo",
    date: "Sep. 19, 2017, 9 AM-5 PM",
    location: "Alice Tully Hall, Lincoln Center, NYC",
    link: "https://firewallcafe.com/events/2017-off-new-york-interactive-expo/"
  },
  {
    image: Eventr,
    imageHover: EventrHover,
    title: "2017 Oslo Freedom Forum Pop-Up",
    date: "May 20-24, 2017",
    location: "Spikersuppa Square, Oslo, Norway",
    link: "https://firewallcafe.com/events/2017-oslo-freedom-forum-pop-up/"
  },
  {
    image: Events,
    imageHover: EventsHover,
    title: "\"Search for... Serendipity\" in Austria",
    date: "Dec. 3-31, 2016",
    location: "REDpoint, WeinerStr. 1300  St. Pölten, Austria",
    link: "https://firewallcafe.com/events/search-for-serendipity-in-austria/"
  },
  {
    image: Eventt,
    imageHover: EventtHover,
    title: "INAUGURAL New York 2016 Pop-up!",
    date: "Feb. 8 - Mar. 6, 2016",
    location: "Chinatown Soup, 16B Orchard Street, NYC, 10002",
    link: "https://firewallcafe.com/events/inaugural-new-york-2016-pop-up/"
  }
];

function PastEvents() {
  return (
    <section className="flex flex-col items-center px-14 pt-12 pb-16 w-full border-t border-solid bg-slate-100 border-t-neutral-300 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h2 className="self-center text-5xl font-medium leading-tight text-black max-md:text-4xl">
          Past events
        </h2>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {pastEvents.map((event, index) => (
            <EventCard key={1} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PastEvents;