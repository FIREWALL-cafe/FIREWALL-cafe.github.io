import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import VoteButton from './VoteButton';
import useCookie from '../useCookie';
import QuestionIcon from './icons/QuestionIcon';

import Archive from '../assets/icons/Archive_grayscale.png';
import ExpandDown from '../assets/icons/expand_circle_down.svg';
import ExpandUp from '../assets/icons/expand_circle_up.png';

function VotingSection({ query, searchId }) {
  const location = useLocation();
  const notArchive = location.pathname !== '/archive';
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername, deleteUsername] = useCookie("username");
  const [translationDisabled, setTranslationDisabled] = useState(true);

  const handleVote = async(voteCategory) => {
    try {
      const { data } = await fetch('/vote', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ meta_key: voteCategory, search_id: searchId, vote_client_name: username }),
      });
      if (voteCategory === 'votes_lost_in_translation') {
        setTranslationDisabled(false);
      }
      console.log('handleVote:', data);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex overflow-hidden flex-col w-full bg-gray-50 border border-red-600 border-solid max-md:max-w-full">
      <div className={`${isOpen ? 'visible' : 'hidden' }`}>
        <div className="flex overflow-hidden flex-wrap gap-10 justify-center p-12 w-full border-solid border-b-[1.28px] border-b-neutral-300 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col my-auto min-w-[240px] w-[601px] max-md:max-w-full">
            <div className="flex gap-2.5 items-start w-full text-2xl text-black min-h-[61px] max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-2.5 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
                <div className="self-stretch my-auto max-md:max-w-full">What do you think about these search results?</div>
                <QuestionIcon
                  fill="#000000"
                  className="w-6 h-6"
                  data-tooltip-id="tooltip-think"
                  data-tooltip-content='Vote on if you think these results are censored or not, or if the search was mistranslated.'
                  data-tooltip-place="top"
                />
                <Tooltip id="tooltip-think" noArrow={true} />
              </div>
            </div>
            <div className="flex gap-4 items-stretch mt-8 w-full rounded-md max-md:max-w-full">
              <VoteButton voteCategory="votes_censored" voteHandler={handleVote} disabled={false} />
              <VoteButton voteCategory="votes_uncensored" voteHandler={handleVote} disabled={false} />
              <VoteButton voteCategory="votes_lost_in_translation" voteHandler={handleVote} disabled={false} />
            </div>
          </div>
          <div className="flex overflow-hidden justify-center items-start h-full min-w-[240px] w-[395px]">
            <div className="flex flex-col min-w-[240px] w-[395px]">
              <div className="flex gap-2.5 items-start w-full text-2xl min-h-[61px] text-zinc-400">
                <div className="flex flex-1 shrink gap-2.5 items-center w-full basis-0 min-w-[240px]">
                  <div className="self-stretch my-auto">How is this translation?</div>
                  <QuestionIcon
                    fill="#000000"
                    className="w-6 h-6"
                    data-tooltip-id="tooltip-how"
                    data-tooltip-content='Bilingual users are invited to vote on the quality of the translation.'
                    data-tooltip-place="top"
                  />
                  <Tooltip id="tooltip-how" noArrow={true} />
                </div>
              </div>
              <div className="flex gap-4 items-start mt-8 w-full rounded-md">
                <VoteButton voteCategory="votes_bad_translation" voteHandler={handleVote} disabled={translationDisabled} />
                <VoteButton voteCategory="votes_good_translation" voteHandler={handleVote} disabled={translationDisabled} />
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