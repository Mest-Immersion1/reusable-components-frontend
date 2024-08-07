import React, { useState } from 'react';
import ArticleList from './articleList';


const NotificationIcon = ({ 
  count = 0, 
  iconColor = 'text-teal-600', 
  bgColor = 'bg-teal-500', 
  pingColor = 'bg-teal-200', 
  width = 'w-8', 
  height = 'h-8',
  articles = [],
  title = 'New Articles Posted',
  listBackgroundColor = '#1a202c',
  listBorderColor = '#2d3748',
  listTitleColor = '#ffffff',
  listArticleTextColor = '#e2e8f0',
  listIconBackgroundColor = '#3182ce',
  listIconColor = '#ffffff',
  listNoArticlesTextColor = '#718096'
}) => {
  const [showArticles, setShowArticles] = useState(false);
  const [notificationCount, setNotificationCount] = useState(count);

  const handleClick = () => {
    setShowArticles(!showArticles);
    setNotificationCount(0); // Reset the notification count to 0
  };

  return (
    <div className="relative">
      <svg 
        className={`${width} ${height} ${iconColor}`} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 21 21"
        onClick={handleClick}
      >
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
        />
      </svg>
      {notificationCount > 0 && (
        <div className={`px-1 ${bgColor} rounded-full text-center text-white text-xs absolute top-[-6px] left-9`}>
          {notificationCount}
          <div className={`absolute top-0 left-0 rounded-full -z-10 animate-ping ${pingColor} w-full h-full`}></div>
        </div>
      )}
      {showArticles && (
        <ArticleList
          title={title}
          articles={articles.slice(0, count)}
          backgroundColor='bg-white'
          borderColor={listBorderColor}
          titleColor=''
          articleTextColor='text-red-400'
          iconBackgroundColor='#0D9488'
          iconColor={listIconColor}
          noArticlesTextColor={listNoArticlesTextColor}
        />
      )}
    </div>
  );
};

export default NotificationIcon;
