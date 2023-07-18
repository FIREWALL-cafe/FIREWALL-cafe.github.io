import React, { useContext } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { LayoutContext } from './Layout';

/*
const containerClass = css`
  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "googleLogo baiduLogo"
    "googleResult baiduResult";
  padding: 3em 1em 1em 1em;
  width: 100%;
`;
*/

const containerClass = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 3em 1em 1em 1em;
`;

const resultsContainerClass = (gridArea) => css`
  width: 49%;
  min-height: 70vh;
  grid-area: ${gridArea};
`;

const imgClass = css`
  max-width: 200px;
  max-height: 200px;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const LogoImage = styled.img`
  width: 300px;
`;

const Translation = () => {
  const { imageResults: { googleResults, baiduResults } } = useContext(LayoutContext);

  return (
    <div css={containerClass}>
      <div css={resultsContainerClass("googleResults")}>
        <LogoContainer gridArea="googleLogo">
          <LogoImage src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        </LogoContainer>
        {googleResults?.map(src => <img src={src} css={imgClass} key={src} />)}
      </div>
      <hr/>
      <div css={resultsContainerClass("baiduResults")}>
        <LogoContainer gridArea="baiduLogo">
          <LogoImage src="https://logos-download.com/wp-content/uploads/2016/08/Baidu_logo.png" />
        </LogoContainer>
        {baiduResults?.map(src => <img src={src} css={imgClass} key={src} />)}
      </div>
    </div>
  );
};

export default Translation;
