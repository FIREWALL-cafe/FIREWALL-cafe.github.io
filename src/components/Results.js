import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { LayoutContext } from './Layout';

const containerClass = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const resultsContainerClass = css`
  width: 49%;
  border: 1px solid black;
  height: 70vh;
`;

const imgClass = css`
  max-width: 200px;
  max-height: 200px;
`;

const Translation = () => {
  const { imageResults: { googleResults, baiduResults } } = useContext(LayoutContext);

  return (
    <div css={containerClass}>
      <div css={resultsContainerClass}>
        {googleResults?.map(src => <img src={src} css={imgClass} key={src} />)}
      </div>
      <div css={resultsContainerClass}>
        {baiduResults?.map(src => <img src={src} css={imgClass} key={src} />)}
      </div>
    </div>
  );
};

export default Translation;
