import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowLeft from './icons/ArrowLeft';
import EventDetail from './EventDetail';
import { eventsData } from '../data/eventsData';

// Legacy components - to be migrated
import Marymount from './Marymount';
import OsloTaiwan from './OsloTaiwan';
import Reactions from './Reactions';
import FeaturedBbc from './FeaturedBbc';
import ApexYouth from './ApexYouth';
import CreativeHack from './CreativeHack';
import ProxyPals from './ProxyPals';
import NetworkedFem from './NetworkedFem';
import GroupRvcc from './GroupRvcc';
import OsloMiami from './OsloMiami';
import RampGallery from './RampGallery';
import VbkoVienna from './VbkoVienna';
import BorderControl from './BorderControl';
import HongKongNotFound from './HongKongNotFound';
import OffEighteen from './OffEighteen';
import OffNyc from './OffNyc';
import OffSeventeen from './OffSeventeen';
import SerendipityAus from './SerendipityAus';
import Inaugural from './Inaugural';

// Legacy event mappings - will be removed once all events are migrated
const LegacyEventUrls = {
  "marymount-manhattan-digital-media-society-class-field-trip": <Marymount />, 
  "oslo-freedom-forum-2022-taiwan-interactive-expo": <OsloTaiwan />,
  "reactions-to-the-great-chinese-firewall": <Reactions />,
  "firewall-featured-on-bbc-the-real-story": <FeaturedBbc />,
  "apex-for-youth-after-school-field-trip": <ApexYouth />,
  "creative-hacktivism-roundtable": <CreativeHack />,
  "proxy-pals-trial-by-firewall": <ProxyPals />,
  "networked-feminism-in-china": <NetworkedFem />,
  "firewall-pop-up-group-show-in-rvcc": <GroupRvcc />,
  "oslo-freedom-forum-2021-miami-interactive-expo": <OsloMiami />,
  "redirect-at-ramp-gallery-asheville-nc": <RampGallery />,
  "search-for-feminism-at-vbko-vienna-austria": <VbkoVienna />,
  "new-media-caucus-border-control-symposium": <BorderControl />,
  "hknotfound": <HongKongNotFound />,
  "off-2018": <OffEighteen />,
  "off-nyc-2017": <OffNyc />,
  "off2017": <OffSeventeen />,
  "search-for-serendipity-in-austria": <SerendipityAus />,
  "inaugural-new-york-2016-pop-up": <Inaugural />
};

function ShowEvent() {
  const { eventId } = useParams();
  
  // Check if event exists in new data structure
  const eventData = eventsData[eventId];
  
  // Use new EventDetail component if data exists, otherwise fall back to legacy
  const eventComponent = eventData 
    ? <EventDetail event={eventData} />
    : LegacyEventUrls[eventId];

  return (
    <div className="w-full">
      {eventComponent ? (
        <>
          <div className="mx-auto px-14 pt-14 max-md:px-5 text-red-600">
            <Link to="/events" className="flex items-center gap-2">
              <ArrowLeft color="currentColor" className="object-contain shrink-0 w-6 aspect-square" /> 
              Back to Events
            </Link>
          </div>
          <div className="mx-auto">
            {eventComponent}
          </div>
        </>
      ) : (
        <p className="p-14 text-center">No event data available.</p>
      )}
    </div>
  );
}

export default ShowEvent;