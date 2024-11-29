import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import useCookie from '../useCookie';
/**
 * Wordpress vote endpoint
 * 
* endpoint: https://firewallcafe.com/wp-admin/admin-ajax.php
action: fwc_post_vote
meta_key: votes_uncensored
post_id: 310504
security: 83376c1e81
*/

import VisibilityOff from '../assets/icons/visibility_off.svg';
import Visibility from '../assets/icons/visibility.svg';
import ThumbDown from '../assets/icons/thumb_down.svg';
import ThumbUp from '../assets/icons/thumb_up.svg';
import LostInTranslation from '../assets/icons/lost_in_translation.svg';

function VoteButton({ voteCategory, searchId, setVote, isDisabled, setDisabled }) {
  useEffect(() => setDisabled(false), [searchId]);
  
  const voteMeta = {
    votes_censored: {
      name: 'Censored',
      img: VisibilityOff
    },
    votes_uncensored: {
      name: 'Uncensored', 
      img: Visibility
    },
    votes_bad_translation: {
      name: 'Bad Translation', 
      img: ThumbDown
    },
    votes_good_translation: {
      name: 'Good Translation', 
      img: ThumbUp
    },
    votes_lost_in_translation: {
      name: 'Lost in Translation', 
      img: LostInTranslation
    },
    votes_nsfw: {
      name: 'NSFW', 
      img: 'https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-nsfw.svg'
    },
    votes_bad_result: {
      name: 'WTF', 
      img: 'https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-bad-result.svg'
    },
  }

  const convertToMetaKey = (key) => 'votes_' + key.toLowerCase().replace(' ', '_');
  const [username, setUsername, deleteUsername] = useCookie("username");
  const imgSrc = voteMeta[voteCategory].img;
  const voteId = voteMeta[voteCategory].name;
  
  const handleVote = async voteId => {
    // Disable vote buttons until another search has completed
    setDisabled(true);
    setVote(voteId);

    try {
      const { data } = await fetch('/vote', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ meta_key: convertToMetaKey(voteId), search_id: searchId, vote_client_name: username }),
      });

      console.log('handleVote:', data);
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <button className="vote__button" disabled={isDisabled} onClick={() => handleVote(voteId)}>
      <img src={imgSrc} className="object-contain self-stretch my-auto w-12 aspect-square" />
    </button>
  );
}

export default VoteButton;