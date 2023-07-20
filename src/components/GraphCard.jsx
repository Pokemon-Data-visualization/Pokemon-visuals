import React, { useState } from 'react';

const GraphCard = ({ name, number, story }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-80 md:w-auto bg-white rounded-lg overflow-hidden shadow-lg">
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
          <p className="text-gray-800 text-lg max-w-full overflow-hidden">
            {story}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="font-semibold uppercase text-sm rounded-full px-4 py-1 border border-[#00000040] text-blue-500"
            onClick={toggleExpand}
          >
            {isExpanded ? 'Hide Story' : 'Show Story'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
