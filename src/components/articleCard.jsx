import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ title, snippet, date, image, url, backgroundColor }) => {

  const bgColor = backgroundColor ? backgroundColor : 'bg-white';

  return (
    <div className={`w-[70%] p-5 flex flex-col ${bgColor}`}>
      <a href={url}>
        <div className="flex gap-y-4 gap-x-10">
          <div className="flex flex-col gap-y-3 w-[70%]">
            <span className="hover:underline font-bold text-gray-900 text-[20px] antialiased">{title}</span>
            <span className="text-[16px] text-gray-700">{snippet}</span>
            <span className="text-[14px] text-gray-600 font-medium leading-tight">{date}</span>
          </div>
          <div className="w-[30%]">
            {image && <img src={image} alt="article" className="w-fit h-[100%] mt-3" />}
          </div>
        </div>
        <div className="bg-gray-200 shadow-lg shadow-gray-300 h-[0.5px] w-[100%] mt-10"></div>
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
