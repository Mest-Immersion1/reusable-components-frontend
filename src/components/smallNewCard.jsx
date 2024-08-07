import React from "react";


const SmallNewCard = ({ newsOutletIcon, newsOutletName, title, date, link }) => {
  return (
    <a href={link} className="flex flex-col bg-transparent gap-y-1 p-4 w-full md:w-[100%]">
      <div className="flex items-center gap-[2px]">
        <img src={newsOutletIcon} alt={newsOutletName} className="w-4 h-5" />
        <span className="text-gray-900 text-[15px] w-[50%] font-medium">{newsOutletName}</span>
      </div>
      <span className="hover:underline text-gray-800 w-full text-[16px]">{title}</span>
      <span className="text-[14px] text-gray-500">{date}</span>
    </a>
  );
};

export default SmallNewCard;
