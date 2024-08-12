import React, { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';

const More = ({ menuItem }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="relative flex items-center group">
      {/* The Ellipsis button */}
      <button
        className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={() => setShowCard(!showCard)}
      >
        <EllipsisVertical />
      </button>

      {/* The MenuCard */}
      {showCard && (
        <div className="absolute bottom-0 left-0">
          <div className="absolute bottom-0 left-0 border rounded-lg shadow-lg p-4 w-64 sm:w-80 bg-white z-50">
            {menuItem.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setShowCard(false)}
              >
                <item.icon className="mr-4 text-gray-500" size={20} />
                <span className="text-gray-500 whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* The "More" label (shown on hover) */}
      {!showCard && (
        <span className="absolute top-12 transform -translate-y-1/2 bg-gray-700 text-sm opacity-0 group-hover:opacity-100 text-white p-1 rounded">
          More
        </span>
      )}
    </div>
  );
};

export default More;
