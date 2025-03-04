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


function VoteButton({ voteCategory, voteHandler, disabled }) {
  const [isSelected, setSelected] = useState(false);
  const [isDisabled, setDisabled] = useState(disabled);

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
      className={`flex gap-2.5 items-center w-full rounded border border-solid ${ isDisabled ? 'cursor-not-allowed' : 'hover:bg-sky-700' } ${isSelected ? 'bg-sky-700' : ''}`}
      onClick={vote}
      disabled={isDisabled}
    >
      <img src={imgSrc} className="object-contain self-stretch my-auto w-12 aspect-square" />
      <input type="hidden" id={voteCategory} name={voteCategory} />
      <div className="flex-1 shrink gap-2 self-stretch mt-2 w-full text-xl font-semibold text-black">
        {voteMeta[voteCategory].name}
      </div>
    </button>
  );
}

export default VoteButton;