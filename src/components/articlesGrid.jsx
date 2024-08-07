import React from 'react';
import PropTypes from 'prop-types';
import SmallArticleCard from './smallArticles';
import ArticleeCard from './newsGrid';

const ArticleGrid = ({ mainArticle, smallArticles, hoverBgColor, hoverTextColor }) => (
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
      <ArticleeCard {...mainArticle} hoverBgColor={hoverBgColor} hoverTextColor={hoverTextColor}/>
      <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {smallArticles.map((article, index) => (
          <SmallArticleCard key={index} {...article} hoverTextColor={hoverTextColor} />
        ))}
      </div>
    </div>
  </div>
);

ArticleGrid.propTypes = {
  mainArticle: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  smallArticles: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
};

ArticleGrid.defaultProps = {
  hoverBgColor: 'bg-gray-200',
  hoverTextColor: 'text-indigo-600',
};

export default ArticleGrid;
