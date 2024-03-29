import React from 'react';
import { Layout } from './components';
import './style.css';

const App = () => (
  <>
    <link rel="canonical" href="index.css"/>
    <meta name="description" content="FIREWALL juxtaposes Google and Baidu image searches and allows users to vote if images are censored" />
    <meta property="og:title" content="Firewall Cafe"/>
    <meta property="og:type" content="article"/>
    <meta property="og:url" content="https://firewallcafe.com"/>
    <meta property="og:description" content="FIREWALL juxtaposes Google and Baidu image searches and allows users to vote if images are censored" />
    <meta property="og:image" content="%PUBLIC_URL%/favicon.ico" />
    <meta name="twitter:card" content="FIREWALL juxtaposes Google and Baidu image searches and allows users to vote if images are censored" />
    <div className="app__container">
      <h1>Firewall 2.0</h1>
      <Layout />
    </div>
  </>
);

export default App;
