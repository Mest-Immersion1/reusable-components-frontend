import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ title, snippet, date, image, url, backgroundColor }) => {

  const bgColor = backgroundColor ? backgroundColor : 'bg-white';

  return (
    <div className={`w-full md:w-[70%] p-5 flex flex-col ${bgColor} rounded-lg shadow-lg`}>
      <a href={url}>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-10">
          <div className="flex flex-col gap-y-3 w-full md:w-[70%]">
            <span className="hover:underline font-bold text-gray-900 text-[20px] antialiased">{title}</span>
            <span className="text-[16px] text-gray-700">{snippet}</span>
            <span className="text-[14px] text-gray-600 font-medium leading-tight">{date}</span>
          </div>
          {image && (
            <div className="w-full md:w-[30%] mt-3 md:mt-0">
              <img src={image} alt="article" className="w-full h-auto rounded-lg" />
            </div>
          )}
        </div>
        <div className="bg-gray-200 shadow-lg shadow-gray-300 h-[0.5px] w-full mt-10"></div>
      </a>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

export default ArticleCard;
