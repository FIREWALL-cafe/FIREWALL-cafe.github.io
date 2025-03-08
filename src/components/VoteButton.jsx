import React, { useState, useEffect } from 'react';

import VisibilityOff from '../assets/icons/visibility_off.svg';
import Visibility from '../assets/icons/visibility.svg';
import ThumbDown from '../assets/icons/thumb_down.svg';
import ThumbUp from '../assets/icons/thumb_up.svg';
import LostInTranslation from '../assets/icons/lost_in_translation.svg';

/**
 * Wordpress vote endpoint
 * 
* endpoint: https://firewallcafe.com/wp-admin/admin-ajax.php
action: fwc_post_vote
meta_key: votes_uncensored
post_id: 310504
security: 83376c1e81
*/


function VoteButton({ voteCategory, voteHandler, disabled, shouldReset }) {
  const [isSelected, setSelected] = useState(false);
  const [isDisabled, setDisabled] = useState(disabled);

  // Reset state when shouldReset changes
  useEffect(() => {
    if (shouldReset) {
      setSelected(false);
      setDisabled(false);
      // Reset the hidden input value
      const votebtn = document.getElementById(voteCategory);
      if (votebtn) votebtn.value = '';
    }
  }, [shouldReset, voteCategory]);

  const metaKeyToId = {
    votes_censored: 1,
    votes_uncensored: 2,
    votes_bad_translation: 3,
    votes_good_translation: 4,
    votes_lost_in_translation: 5,
    votes_bad_result: 6,
    votes_nsfw: 7,
  }
  
  const voteMeta = {
    votes_censored: {
      id: metaKeyToId['votes_censored'],
      name: 'Censored',
      img: VisibilityOff
    },
    votes_uncensored: {
      id: metaKeyToId['votes_uncensored'],
      name: 'Uncensored',
      img: Visibility
    },
    votes_bad_translation: {
      id: metaKeyToId['votes_bad_translation'],
      name: 'Bad Translation',
      img: ThumbDown
    },
    votes_good_translation: {
      id: metaKeyToId['votes_good_translation'],
      name: 'Good Translation',
      img: ThumbUp
    },
    votes_lost_in_translation: {
      id: metaKeyToId['votes_lost_in_translation'],
      name: 'Lost in Translation',
      img: LostInTranslation
    },
    votes_nsfw: {
      id: metaKeyToId['votes_nsfw'],
      name: 'NSFW',
      img: 'https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-nsfw.svg'
    },
    votes_bad_result: {
      id: metaKeyToId['votes_bad_result'],
      name: 'WTF',
      img: 'https://firewallcafe.com/wp-content/themes/fwc/img/vote-buttons-bad-result.svg'
    },
  }

  const imgSrc = voteMeta[voteCategory].img;
  const vote = (e) => {
    e.preventDefault();
    setSelected(true);
    setDisabled(true);
    voteHandler(voteCategory);
    if (voteCategory === 'votes_lost_in_translation') {
      console.log('votes_lost_in_translation');
    }
  }

  return (
    <button
      className={`flex items-center px-2 py-1 rounded border border-solid text-sm ${isDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-red-50'} ${isSelected ? 'bg-red-50' : ''}`}
      onClick={vote}
      disabled={isDisabled}
    >
      <img src={imgSrc} className="w-4 h-4 mr-1" />
      <input type="hidden" id={voteCategory} name={voteCategory} />
      <div className="text-sm font-medium text-gray-700">
        {voteMeta[voteCategory].name}
      </div>
    </button>
  );
}

export default VoteButton;