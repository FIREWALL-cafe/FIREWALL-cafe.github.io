import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { LayoutContext } from './Layout';

const containerClass = css`
  height: 2rem;
  padding: 1em 0;
`;

const Translation = () => {
  const { translation } = useContext(LayoutContext);

  return (
    <div css={containerClass}>{translation && (<>Translation: <strong>{translation}</strong></>)}</div>
  );
};

export default Translation;
