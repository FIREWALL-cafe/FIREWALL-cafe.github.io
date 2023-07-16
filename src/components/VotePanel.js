import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const containerClass = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const buttonContainerClass = css`
  ${containerClass};
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;

const VoteButtonContainer = styled.button`
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  border: 3px solid transparent;
  cursor: pointer;

  &:hover {
    border: 3px solid #e60011;
  }
`;

const VoteButton = ({ imgSrc, voteId }) => {
  const handleVote = async voteId => {
  /**
     * endpoint: https://firewallcafe.com/wp-admin/admin-ajax.php
    action: fwc_post_vote
    meta_key: votes_uncensored
    post_id: 310504
    security: 83376c1e81
    */
    try {
      const response = await fetch('/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta_key: voteId, post_id: 310504 }),
      });
      const totalVotes = await response.json();
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <VoteButtonContainer onClick={() => handleVote(voteId)}>
      <img src={imgSrc}></img>
    </VoteButtonContainer>
  );
}

const VotePanel = () => {

  return (
    <div css={containerClass}>
      <h2>
        <span css={css`color: #e60011;`}>VOTE</span> by clicking buttons below that match what you think about this search result.
      </h2>
      <div css={buttonContainerClass}>
        {/* TODO: download svg files and package them in this repo */}
        <VoteButton voteId="votes_censored" imgSrc="https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-censored.svg" />
        <VoteButton voteId="votes_uncensored" imgSrc="https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-uncensored.svg" />
        <VoteButton voteId="votes_bad_translation" imgSrc="https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-bad-translation.svg" />
        <VoteButton voteId="votes_good_translation" imgSrc="https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-good-translation.svg" />
        <VoteButton voteId="votes_lost_in_translation" imgSrc="https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-lost-in-translation.svg" />
        <VoteButton voteId="votes_nsfw" imgSrc="https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-nsfw.svg" />
        <VoteButton voteId="votes_bad_result" imgSrc="https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-bad-result.svg"/>
      </div>
    </div>
  );
};

export default VotePanel;
