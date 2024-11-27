import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import useCookie from '../useCookie';

import Archive from '../assets/icons/Archive_grayscale.png';
import Question from '../assets/icons/question.svg';
import ThumbUp from '../assets/icons/thumb_up.svg';
import ThumbDown from '../assets/icons/thumb_down.svg';
import VisibilityOff from '../assets/icons/visibility_off.svg';
import Visibility from '../assets/icons/visibility.svg';
import LostInTranslation from '../assets/icons/lost_in_translation.svg';
import ExpandDown from '../assets/icons/expand_circle_down.svg';
import ExpandUp from '../assets/icons/expand_circle_up.png';

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
/**
 * Wordpress vote endpoint
 * 
* endpoint: https://firewallcafe.com/wp-admin/admin-ajax.php
action: fwc_post_vote
meta_key: votes_uncensored
post_id: 310504
security: 83376c1e81
*/
function VoteButton({ voteCategory, searchId, setVote, isDisabled, setDisabled })  {
  useEffect(() => setDisabled(false), [searchId]);
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
      // await fetch(`/searches/votes/search_id/`)
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

function VotingSection({ query, searchId }) {
  const location = useLocation();
  const notArchive = location.pathname !== '/archive';
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex overflow-hidden flex-col w-full bg-gray-50 border border-red-600 border-solid max-md:max-w-full">
      <div className={`${isOpen ? 'visible' : 'hidden' }`}>
        <div className="flex overflow-hidden flex-wrap gap-10 justify-center p-12 w-full border-solid border-b-[1.28px] border-b-neutral-300 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col my-auto min-w-[240px] w-[601px] max-md:max-w-full">
            <div className="flex gap-2.5 items-start w-full text-2xl text-black min-h-[61px] max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-2.5 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
                <div className="self-stretch my-auto max-md:max-w-full">What do you think about these search results?</div>
                <img
                  src={Question}
                  className="object-contain shrink-0 self-stretch my-auto w-6 text-sm aspect-square"
                  alt="Tooltip"
                  data-tooltip-id="tooltip"
                  data-tooltip-content='Vote on if you think these results are censored or not, or if the search was mistranslated.'
                  data-tooltip-place="top"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-start mt-8 w-full rounded-md max-md:max-w-full">
              <div className="flex flex-col grow shrink justify-between items-center p-3 rounded border border-solid border-neutral-300 min-h-[124px] hover:bg-sky-700">
                <div className="flex gap-2.5 items-center w-full h-9">
                  <VoteButton voteCategory="votes_censored" setVote={() => {}} isDisabled={false} setDisabled={() => {}} searchId={searchId} />
                </div>
                <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-black">
                  Censored
                </div>
              </div>
              <div className="flex flex-col grow shrink justify-between items-center p-3 rounded border border-solid border-neutral-300 min-h-[124px]  hover:bg-sky-700">
                <div className="flex gap-2.5 items-center w-full h-9">
                  <VoteButton voteCategory="votes_uncensored" setVote={() => {}} isDisabled={false} setDisabled={() => {}} searchId={searchId} />
                </div>
                <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-black">
                  Not censored
                </div>
              </div>
              <div className="flex flex-col grow shrink justify-between items-center p-3 rounded border border-solid border-neutral-300 min-h-[124px]  hover:bg-sky-700">
                <div className="flex gap-2.5 items-center w-full h-9">
                  <VoteButton voteCategory="votes_lost_in_translation" setVote={() => {}} isDisabled={false} setDisabled={() => {}} searchId={searchId} />
                </div>
                <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-black">
                  Lost in translation
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden justify-center items-start h-full min-w-[240px] w-[395px]">
            <div className="flex flex-col min-w-[240px] w-[395px]">
              <div className="flex gap-2.5 items-start w-full text-2xl min-h-[61px] text-zinc-400">
                <div className="flex flex-1 shrink gap-2.5 items-center w-full basis-0 min-w-[240px]">
                  <div className="self-stretch my-auto">How is this translation?</div>
                  <img
                    src={Question}
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt=""
                    data-tooltip-id="tooltip"
                    data-tooltip-content='Bilingual users are invited to vote on the quality of the translation.'
                    data-tooltip-place="top"
                  />
                  <Tooltip id="tooltip" />
                </div>
              </div>
              <div className="flex gap-4 items-start mt-8 w-full rounded-md">
                <div className={`flex flex-col justify-between p-3 rounded border border-solid bg-slate-200 border-zinc-400 min-h-[124px]`}>
                  <div className="flex gap-2.5 items-center w-full h-9">
                    <img src={ThumbDown} className="object-contain self-stretch my-auto w-12 aspect-square" alt="" />
                  </div>
                  <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-zinc-400">
                    Bad translation
                  </div>
                </div>
                <div className="flex flex-col justify-between p-3 rounded border border-solid bg-slate-200 border-zinc-400 min-h-[124px]">
                  <div className="flex gap-2.5 items-center w-full h-9">
                    <img src={ThumbUp} className="object-contain self-stretch my-auto w-12 aspect-square" alt="" />
                  </div>
                  <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-zinc-400">
                    Good translation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-center px-8 py-5 w-full text-center bg-gray-50 border-solid border-b-[1.28px] border-b-neutral-300 max-md:px-5 max-md:max-w-full">
          <button disabled={true} className="gap-1 px-4 my-auto text-lg rounded border border-solid bg-slate-200 border-zinc-400 min-h-[56px]">
            Submit
          </button>
          <div className="flex gap-6 items-center self-stretch my-auto text-xl min-w-[240px] max-md:max-w-full">
            {notArchive && <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
              <div className="self-stretch my-auto text-black">See past results for this query in the</div>
              <div className="flex gap-2 items-center self-stretch my-auto text-red-600">
                <img src={Archive} className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="Archive" />
                <Link to={`/archive?q=${query}`}>
                  <div className="self-stretch my-auto underline">
                    <span className="font-bold text-red-600">Archive</span>
                    <span className="text-red-600">.</span>
                  </div>
                </Link>
              </div>
            </div>}
          </div>
        </div>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className="flex flex-wrap justify-between text-red-600 justify-between items-center px-8 py-5 bg-gray-50 max-md:px-5 max-md:max-w-full cursor-pointer">
        <div>{isOpen ? 'Hide voting' : 'Cast your vote'}</div>
        <div><img src={isOpen ? ExpandUp : ExpandDown} /></div>
      </div>
    </div>
  );
}

export default VotingSection;