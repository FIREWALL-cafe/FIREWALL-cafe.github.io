import React from "react";

function timeInShanghai() {
  return new Date().toLocaleTimeString('en-us', {
    timeStyle: 'short',
    timeZone: 'Asia/Shanghai',
  })
}

const currentTime = new Date().toLocaleTimeString('en-us', { timeStyle: 'short' });

function TimeDisplay() {
  return (
    <div className="flex gap-5 items-center font-medium text-center h-[56px] min-w-[240px] text-slate-100">
      <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
        <div className="self-stretch my-auto max-md:min-w-0 max-md:hidden">Your time: {currentTime}</div>
        <div className="self-stretch my-auto">Beijing: {timeInShanghai()}</div>
      </div>
    </div>
  );
}

export default TimeDisplay;
