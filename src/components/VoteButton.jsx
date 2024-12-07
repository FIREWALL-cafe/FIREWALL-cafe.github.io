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


function VoteButton({ voteCategory, voteHandler, searchId, setDisabled }) {
  useEffect(() => setDisabled(false), [searchId]);
  const [isSelected, setSelected] = useState(false);

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
  const imgSrc = voteMeta[voteCategory].img;
  const vote = (e) => {
    e.preventDefault();
    setSelected(!isSelected);
    voteHandler(voteCategory);
  }

  return (
    <button
      className={`flex gap-2.5 items-center w-full rounded border border-solid hover:bg-sky-700 ${isSelected ? 'bg-sky-700' : ''}`}
      onClick={vote}
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