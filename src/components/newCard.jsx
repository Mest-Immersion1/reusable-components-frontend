import React, { useState } from 'react';
import { EllipsisVertical, Bookmark, Share2, ThumbsUp, ThumbsDown, Link2, EyeOff, BookmarkIcon } from 'lucide-react';

const menuItems = [
  { icon: Bookmark, label: 'Save for later' },
  { icon: Share2, label: 'Share' },
  { icon: Link2, label: 'Go to Bloomberg' },
  { icon: Link2, label: 'Go to Ekow Dontoh' },
  { icon: EyeOff, label: 'Hide all stories from Bloomberg' },
  { icon: ThumbsUp, label: 'More stories like this' },
  { icon: ThumbsDown, label: 'Fewer stories like this' }
];

const NewCard = ({ imageSrc, newsOutletName, newsOutletIcon, title, time, link }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="bg-transparent flex flex-col w-full md:w-[50%] p-2 gap-y-1 relative">
      <a href={link}>
        <img src={imageSrc} alt={title} className="rounded-[15px] w-full" />
      </a>

      <div className="flex justify-between mt-2 relative group">
        <a href={link}>
          <div className="flex items-center gap-[3px]">
            <img src={newsOutletIcon} alt={newsOutletName} className="w-6 h-5" />
            <span className="text-gray-800 text-[15px]">{newsOutletName}</span>
          </div>
        </a>

        {/* Ellipsis Menu */}
        <div className="relative flex items-center">
          <button
            className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={() => setShowCard(!showCard)}
          >
            <EllipsisVertical />
          </button>
          {showCard && (
            <div 
              className={`absolute ${window.innerWidth >= 640 ? 'bottom-full mb-2 right-0 transform translate-x-1/2' : 'top-full mt-2 right-0'} 
              border rounded-lg shadow-lg p-4 w-56 sm:w-64 md:w-80 bg-white z-50`}
            >
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setShowCard(false)}
                >
                  <item.icon className="mr-4 text-gray-500" size={20} />
                  <span className="text-gray-500 whitespace-normal break-words text-xs sm:text-sm md:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          )}
          {!showCard && (
            <span className="absolute top-12 left-0 transform -translate-y-1/2 bg-gray-700 text-sm opacity-0 group-hover:opacity-100 text-white p-1 z-10">
              More
            </span>
          )}
        </div>
      </div>

      <a href={link}>
        <span className="text-[20px] hover:underline text-gray-900 w-full font-medium">{title}</span>
        <span className="text-[14px] text-gray-500 pt-4">{time}</span>
      </a>
    </div>
  );
};

export default NewCard;
