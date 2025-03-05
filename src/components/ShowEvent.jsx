import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Megha from './events/Megha';
import Marymount from './events/Marymount';
import OsloTaiwan from './events/OsloTaiwan';
import Reactions from './events/Reactions';
import FeaturedBbc from './events/FeaturedBbc';
import ApexYouth from './events/ApexYouth';
import CreativeHack from './events/CreativeHack';
import ProxyPals from './events/ProxyPals';
import NetworkedFem from './events/NetworkedFem';
import GroupRvcc from './events/GroupRvcc';
import OsloMiami from './events/OsloMiami';
import RampGallery from './events/RampGallery';
import VbkoVienna from './events/VbkoVienna';
import BorderControl from './events/BorderControl';
import HongKongNotFound from './events/HongKongNotFound';
import OffEighteen from './events/OffEighteen';
import OffNyc from './events/OffNyc';
import OffSeventeen from './events/OffSeventeen';
import SerendipityAus from './events/SerendipityAus';
import Inaugural from './events/Inaugural';

    
const EventUrls = {
  "firewall-pop-up-with-inside-chinas-surveillance-state-a-lecture-by-megha-rajagopalan": <Megha />,
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
}
function ShowEvent() {
  const { eventId } = useParams();
  console.log('eventData:', eventId)
  return (
    <div>
      {EventUrls[eventId] ? (
        <>
          <div>IMAGINE THIS WORKING</div>
        </>
      ) : (
        <p>No event data available.</p>
      )}
    </div>
  );
}

export default ShowEvent;