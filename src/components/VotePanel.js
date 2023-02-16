import React from 'react';
import { css } from '@emotion/react';

const containerClass = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const buttonContainerClass = css`
  ${containerClass};
  flex-direction: row;
`;

const VotePanel = () => {

  return (
    <div css={containerClass}>
      <h2>
        Vote
      </h2>
      <div css={buttonContainerClass}>
        <button>
          censored
        </button>
        <button>
          uncensored
        </button>
        <button>
          lol
        </button>
        <button>
          wtf
        </button>
      </div>
    </div>
  );
};

export default VotePanel;
