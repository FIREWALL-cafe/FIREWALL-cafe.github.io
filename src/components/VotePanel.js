import React from 'react';
import '../style.css';

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
      const { data } = await fetch('https://fwc-2023.ue.r.appspot.com/vote', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
        // body: JSON.stringify({ meta_key: voteId, post_id: 310504 }),
        body: JSON.stringify({ meta_key: voteId, search_id: currentSeachId }),
      });

      console.log(data);
      // await fetch(`/searches/votes/search_id/`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <button className="vote__button" onClick={() => handleVote(voteId)}>
      <img src={imgSrc}></img>
    </button>
  );
}

// TODO: disable panel until search returns
const VotePanel = () => (
  <div className="vote__container">
    <h2>
      <span style={{ color: '#e60011' }}>VOTE</span> by clicking buttons below that match what you think about this search result.
    </h2>
    <div className="vote__container vote__button_container">
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

export default VotePanel;
