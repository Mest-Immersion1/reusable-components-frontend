import React from 'react';
import PropTypes from 'prop-types';
import { CalendarDays, Clock } from 'lucide-react';

// Default image if none is provided
const defaultImg = 'https://via.placeholder.com/400x200?text=No+Image';

const NewsCard = ({ image, title, snippet, readTime, date, url, backgroundColor }) => {
  return (
    <div className={`flex flex-col gap-y-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ${backgroundColor || 'bg-slate-100'} mb-10 rounded-lg`}>
      <a href={url} className="block">
        <div className='h-48 sm:h-56 md:h-64'>
          <img src={image || defaultImg} alt={title} className='rounded-lg w-full h-full object-cover' />
        </div>

        <div className='flex flex-col gap-y-3 mt-2'>
          <div className='grid grid-cols-2 gap-x-4 text-sm text-gray-500'>
            <div className='flex gap-x-2'>
              <Clock />
              <span>{readTime || '5 mins read'}</span>
            </div>
            <div className='flex gap-x-2'>
              <CalendarDays />
              <span>{date || '24th July, 2024'}</span>
            </div>
          </div>
          <div className='flex flex-col p-2'>
            <span className='text-lg font-medium antialiased text-gray-600 hover:underline'>{title || 'Title Here'}</span>
            <span className='text-sm font-normal text-gray-500'>{snippet || 'Snippet Here'}</span>
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
