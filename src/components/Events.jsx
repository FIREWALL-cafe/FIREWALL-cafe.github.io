import React, { useState, useEffect, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import NewsletterSection from './NewsletterSection';
import ArrowLeft from './icons/ArrowLeft';

// Import all event components
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

// Map URLs to component types instead of pre-rendered components
const EventComponents = {
  "marymount-manhattan-digital-media-society-class-field-trip": Marymount, 
  "oslo-freedom-forum-2022-taiwan-interactive-expo": OsloTaiwan,
  "reactions-to-the-great-chinese-firewall": Reactions,
  "firewall-featured-on-bbc-the-real-story": FeaturedBbc,
  "apex-for-youth-after-school-field-trip": ApexYouth,
  "creative-hacktivism-roundtable": CreativeHack,
  "proxy-pals-trial-by-firewall": ProxyPals,
  "networked-feminism-in-china": NetworkedFem,
  "firewall-pop-up-group-show-in-rvcc": GroupRvcc,
  "oslo-freedom-forum-2021-miami-interactive-expo": OsloMiami,
  "redirect-at-ramp-gallery-asheville-nc": RampGallery,
  "search-for-feminism-at-vbko-vienna-austria": VbkoVienna,
  "new-media-caucus-border-control-symposium": BorderControl,
  "hknotfound": HongKongNotFound,
  "off-2018": OffEighteen,
  "off-nyc-2017": OffNyc,
  "off2017": OffSeventeen,
  "search-for-serendipity-in-austria": SerendipityAus,
  "inaugural-new-york-2016-pop-up": Inaugural
};

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Event component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading this event.</div>;
    }

    return this.props.children;
  }
}

// Event component wrapper
function EventWrapper({ Component }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading event...</div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}

function Events() {
  const { eventId } = useParams();
  const image = 'subscribeE';

  if (eventId) {
    const EventComponent = EventComponents[eventId];
    
    return (
      <div className="w-full">
        {EventComponent ? (
          <>
            <div className="mx-auto px-2 md:px-14 pt-14 text-red-600">
              <Link to="/events" className="flex items-center gap-2">
                <ArrowLeft color="currentColor" className="object-contain shrink-0 w-6 aspect-square" /> 
                Back to Events
              </Link>
            </div>
            <div className="mx-auto">
              <EventWrapper Component={EventComponent} />
            </div>
          </>
        ) : (
          <p>No event data available.</p>
        )}
      </div>
    );
  }

  return (
    <>
      <UpcomingEvents />
      <PastEvents />
      <NewsletterSection image={image} />
    </>
  );
}

export default Events;