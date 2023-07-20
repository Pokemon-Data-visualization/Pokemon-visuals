import React, { useState } from 'react';
import Image from "next/image";
const GraphCard = ({ name, number, story, toggleExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Set it to true to show expanded by default

  const toggleExpandStory = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-4xl w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg mb-4">
      {/* Card Header */}
      <div className="px-6 py-4 bg-gray-800 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>

      {/* Card Image */}
      <div className="w-full h-80 bg-gray-100 relative">
        <img
          src={`/images/pokemon-cards/${number}.png`}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Card Body */}
      <div className="px-6 py-4">
        <div className={`${isExpanded ? 'block' : 'hidden'}`}>
          <p className="text-gray-800 text-lg">{story}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="font-semibold uppercase text-sm rounded-full px-4 py-1 border border-[#00000040] text-blue-500"
            onClick={toggleExpandStory}
          >
            {isExpanded ? 'Hide Story' : 'Show Story'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;

