import React from 'react';
import PropTypes from 'prop-types';

const SmallArticleCard = ({ image, title, url, hoverTextColor }) => (
  <div>
    <a href={url}>
      <div
        className="h-40 bg-cover text-center overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
        title={title}
      ></div>
    </a>
    <a href={url} className={`text-gray-900 inline-block font-semibold text-md my-2 hover:${hoverTextColor} transition duration-500 ease-in-out`}>
      {title}
    </a>
  </div>
);

SmallArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  hoverTextColor: PropTypes.string,
};

SmallArticleCard.defaultProps = {
  hoverTextColor: 'text-indigo-600',
};

export default SmallArticleCard;
