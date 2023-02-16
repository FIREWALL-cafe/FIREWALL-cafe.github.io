import React from 'react';
import { css, cx } from '@emotion/react';

const containerClass = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const resultsContainerClass = css`
  width: 49%;
  border: 1px solid black;
`;

const imgClass = css`
  max-width: 200px;
  max-height: 200px;
`;

const Translation = () => {
  const googleResults = ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kellyskennels.co.uk%2Fwp-content%2Fuploads%2F2016%2F07%2FYorkiePoo-pups.jpg&f=1&nofb=1&ipt=dbcb2cd5543cce99cdc7abaed7824c34e43384fbbec4f4ead3bfe7dbe6e71c0d&ipo=images']
  const baiduResults = ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kellyskennels.co.uk%2Fwp-content%2Fuploads%2F2016%2F07%2FYorkiePoo-pups.jpg&f=1&nofb=1&ipt=dbcb2cd5543cce99cdc7abaed7824c34e43384fbbec4f4ead3bfe7dbe6e71c0d&ipo=images']

  return (
    <div css={containerClass}>
      <div css={resultsContainerClass}>
        {googleResults.map(src => <img src={src} css={imgClass} />)}
      </div>
      <div css={resultsContainerClass}>
        {baiduResults.map(src => <img src={src} css={imgClass} />)}
      </div>
    </div>
  );
};

export default Translation;
