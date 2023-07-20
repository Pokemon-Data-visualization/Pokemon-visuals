import React, { useState } from 'react';
import Image from "next/image";
import { TopWrap, ButtonWrap } from '@/assets/Images';

const GraphCard = ({ name, number, story, toggleExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandStory = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full lg:w-[40rem] mx-auto relative">
      <Image src={TopWrap} alt="top" />
      <div className="relative -top-5 py-4 px-3 bg-white">
        <p className="text-center">Graph Name: {name}</p>
        <div className="w-full h-80 bg-gray-100 relative">
          <img
            src={`/images/pokemon-cards/${number}.png`}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className={`fcc space-x-2 ${isExpanded ? "block" : "hidden"}`}>
          <p>{story}</p>
        </div>
        <div className="card-actions justify-center">
          <button
            className="font-semibold uppercase text-xs rounded-full px-4 py-1 border border-[#00000040]"
            onClick={toggleExpandStory}
          >
            {isExpanded ? 'Hide Story' : 'Show Story'}
          </button>
        </div>
      </div>
      <Image className="z-[1] relative -top-7" src={ButtonWrap} alt="bottom" />
    </div>
  );
};

export default GraphCard;
