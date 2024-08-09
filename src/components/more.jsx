import React, { useState } from 'react';
import { EllipsisVertical, Bookmark, Share2, ThumbsUp, ThumbsDown, Link2, EyeOff } from 'lucide-react';

const menuItems = [
  { icon: Bookmark, label: 'Save for later' },
  { icon: Share2, label: 'Share' },
  { icon: Link2, label: 'Go to Bloomberg' },
  { icon: Link2, label: 'Go to Ekow Dontoh' },
  { icon: EyeOff, label: 'Hide all stories from Bloomberg' },
  { icon: ThumbsUp, label: 'More stories like this' },
  { icon: ThumbsDown, label: 'Fewer stories like this' }
];

const MenuCard = ({ onClose }) => {
  return (
    <div className="absolute bottom-0 left-0 border rounded-lg shadow-lg p-4 w-64 sm:w-80 bg-white z-50">
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          onClick={onClose}
        >
          <item.icon className="mr-4 text-gray-500" size={20} />
          <span className="text-gray-500 whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const More = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="relative flex items-center group">
      <button
        className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={() => setShowCard(!showCard)}
      >
        <EllipsisVertical />
      </button>
      {showCard && (
        <div className="absolute bottom-0 left-0">
          <MenuCard onClose={() => setShowCard(false)} />
        </div>
      )}
      {!showCard && (
        <span className="absolute top-12 transform -translate-y-1/2 bg-gray-700 text-sm opacity-0 group-hover:opacity-100 text-white p-1">
          More
        </span>
      )}
    </div>
  );
};

export default More;
