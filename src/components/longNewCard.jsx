import React from 'react';

const LongNewCard = ({ newsOutletIcon, title, date, link, Image }) => {
  return (
    <a href={link} className='flex flex-col gap-y-3 p-2 w-full md:w-[100%]'>
      <img src={newsOutletIcon} alt="" className='w-10 h-8' />
      <div className='flex flex-col md:flex-row gap-5'>
        <div className="text-[20px] hover:underline text-gray-900 w-full md:w-[100%]">{title}</div>
        <img src={Image} alt="" className="rounded-[15px] w-full md:w-[15vw]" />
      </div>
      <span className="text-[14px] text-gray-500 ">
        {date}
      </span>
    </a>
  );
}

export default LongNewCard;
