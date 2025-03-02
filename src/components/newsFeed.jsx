// ArticleCard.js
import React from 'react';

const Article = ({ image, category, date = { day: 'N/A', month: 'N/A' }, title, headingUrl = '#', categoryColor = 'bg-indigo-600' }) => {
  return (
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{ height: '450px', backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className={`text-xs ${categoryColor} text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500`}
        >
          {category}
        </a>
        <div className="text-white flex flex-col justify-start">
          <span className="text-3xl leading-0 font-semibold">{date.day}</span>
          <span className="-mt-3">{date.month}</span>
        </div>
      </div>
      <div className="p-5 z-10">
        <a
          href={headingUrl}
          className="text-md tracking-tight font-medium leading-7 text-white hover:underline"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default Article;
