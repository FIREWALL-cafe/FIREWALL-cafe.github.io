import React, { useState } from 'react';
import Timeline from './Timeline';
import TimelineAlternate from './TimelineAlternate';

function TimelineComparison() {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex justify-center gap-4 p-4 bg-gray-100 sticky top-0 z-10">
        <button
          onClick={() => setShowAlternate(false)}
          className={`px-4 py-2 rounded ${
            !showAlternate 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Original Timeline
        </button>
        <button
          onClick={() => setShowAlternate(true)}
          className={`px-4 py-2 rounded ${
            showAlternate 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Figma Timeline
        </button>
      </div>
      
      <div className="p-8">
        {showAlternate ? <TimelineAlternate /> : <Timeline />}
      </div>
    </div>
  );
}

export default TimelineComparison;