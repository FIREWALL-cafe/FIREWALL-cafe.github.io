import React from 'react';
import { css } from '@emotion/react';
import { Layout } from './components';

const containerClass = css`
  text-align: center;
`;

const App = () => (
  <>
    <link rel="canonical" href="index.css"/>
    <meta name="description" content="FIREWALL is a pop-up computer kiosk that simultaneously SURFs the Internet locally and in China using a customized Google Chrome extension."/>
    <meta property="og:title" content="Firewall Cafe"/>
    <meta property="og:type" content="article"/>
    <meta property="og:url" content="https://firewallcafe.com"/>
    <meta property="og:description" content="FIREWALL is a pop-up computer kiosk that simultaneously SURFs the Internet locally and in China using a customized Google Chrome extension."/>
    {/* <meta property="og:image" content="{{seo.image}}"/> */}
    <meta name="twitter:card" content="FIREWALL is a pop-up computer kiosk that simultaneously SURFs the Internet locally and in China using a customized Google Chrome extension."/>
    <div css={containerClass}>
      <h1>Firewall 2.0</h1>
      <Layout />
    </div>
  </>
);

export default App;
