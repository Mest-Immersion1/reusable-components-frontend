import React from 'react';
import PropTypes from 'prop-types';

const ArticleeCard = ({ image, title, topic, description, url, hoverBgColor, hoverTextColor }) => (
  <div className="sm:col-span-5">
    <a href={url}>
      <div
        className="bg-cover text-center overflow-hidden"
        style={{ minHeight: '300px', backgroundImage: `url(${image})` }}
        title={title}
      ></div>
    </a>
    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <div>
        <a href={url} className={`text-xs text-indigo-600 uppercase font-medium hover:${hoverTextColor} transition duration-500 ease-in-out`}>
          {topic}
        </a>
        <a href={url} className={`block text-gray-900 font-bold text-2xl mb-2 hover:${hoverTextColor} transition duration-500 ease-in-out`}>
          {title}
        </a>
        <p className="text-gray-700 text-base mt-2">{description}</p>
      </div>
    </div>
  </div>
);

ArticleeCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
};

ArticleeCard.defaultProps = {
  hoverBgColor: 'bg-gray-200',
  hoverTextColor: 'text-indigo-600',
};

export default ArticleeCard;
