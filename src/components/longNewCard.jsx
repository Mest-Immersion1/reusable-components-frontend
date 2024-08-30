import React from 'react';

const LongNewCard = ({ newsOutletIcon, title, date, link, Image }) => {
  return (
    <a href={link} className='flex flex-col p-2 w-full md:w-[100%]'>
      <img src={newsOutletIcon} alt="" className='w-10 h-8 mb-2' />
      <div className='flex flex-col md:flex-row md:items-start'>
        <div className="text-[20px] hover:underline text-gray-900 w-full md:w-auto md:max-w-[70%] mb-3 md:mb-0">
          {title}
        </div>
        <img src={Image} alt="" className="rounded-[15px] w-full md:w-[15vw] md:ml-5" />
      </div>
      <span className="text-[14px] text-gray-500 mt-2">
        {date}
      </span>
    </a>
  );
}

export default LongNewCard;
