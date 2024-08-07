import React from 'react';
import PropTypes from 'prop-types';
import { CalendarDays, Clock } from 'lucide-react';

// Default image if none is provided
const defaultImg = 'https://via.placeholder.com/400x200?text=No+Image';

const NewsCard = ({ image, title, snippet, readTime, date, url, backgroundColor }) => {
  return (
    <div className={`flex flex-col gap-y-4 w-[30%] p-2 ${backgroundColor || 'bg-slate-100'} mb-10 rounded-[5px]`}>
      <a href={url} className="block">
        <div className='h-[80%]'>
          <img src={image || defaultImg} alt={title} className='rounded-[10px] w-full h-auto object-cover' />
        </div>

        <div className='flex flex-col gap-y-3 h-[20%]'>
          <div className='grid grid-cols-2 justify-between'>
            <div className='flex gap-x-2 pt-2'>
              <Clock />
              <span className='text-[15px] font-normal text-gray-500'>{readTime || '5 mins read'}</span>
            </div>
            <div className='flex gap-x-2 pt-2'>
              <CalendarDays />
              <span className='text-[15px] font-normal text-gray-500'>{date || '24th July, 2024'}</span>
            </div>
          </div>
          <div className='flex flex-col p-2'>
            <span className='text-[16px] font-medium antialiased text-gray-600 hover:underline'>{title || 'Title Here'}</span>
            <span className='text-[15px] font-normal text-gray-500'>{snippet || 'Snippet Here'}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

NewsCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  readTime: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default NewsCard;
