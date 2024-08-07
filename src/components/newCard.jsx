import React from "react";
import { EllipsisVertical } from "lucide-react";

const NewCard = ({ imageSrc, newsOutletName, newsOutletIcon, title, time, link }) => {
  return (
    <a href={link} className="bg-transparent flex flex-col w-full md:w-[50%] p-2 gap-y-1 ">
      <img src={imageSrc} alt={title} className="rounded-[15px] w-full" />
      
      <div className="flex justify-between mt-2  relative group">
        <div className="flex items-center gap-[3px]">
          <img src={newsOutletIcon} alt={newsOutletName} className="w-6 h-5"/>
          <span className="text-gray-800 text-[15px]">{newsOutletName}</span>
        </div>

        <div className="flex items-center">
          <button className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">
            <EllipsisVertical />
          </button>
          <span className="absolute top-12 transform -translate-y-1/2 bg-gray-700 text-sm opacity-0 group-hover:opacity-100 text-white p-1">More</span>
        </div>
      </div>
      
      <span className="text-[20px] hover:underline text-gray-900 w-full font-medium">{title}</span>
      <span className="text-[14px] text-gray-500 pt-4">{time}</span>
    </a>
  );
};

export default NewCard;
