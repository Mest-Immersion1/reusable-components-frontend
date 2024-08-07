import React from 'react';

const ArticleList = ({
  title = 'New Articles Posted',
  articles,
  backgroundColor = '#232531',
  borderColor = 'gray-700',
  titleColor = 'white',
  articleTextColor = 'white',
  iconBackgroundColor = 'blue-600',
  iconColor = 'white',
  noArticlesTextColor = 'gray-400'
}) => {
  return (
    <div
      className={`absolute top-12 left-0 border rounded-lg shadow-lg p-4 w-64 z-50`}
      style={{ backgroundColor, borderColor }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold" style={{ color: titleColor }}>
          {title}
        </h3>
      </div>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="mb-4">
            <a href={article.url} className="hover:underline" style={{ color: articleTextColor }}>
              <div className="flex items-center">
                <div className="p-2 rounded-full mr-3" style={{ backgroundColor: iconBackgroundColor }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                    style={{ color: iconColor }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">{article.title}</p>
                </div>
              </div>
            </a>
          </div>
        ))
      ) : (
        <div className="text-gray-400" style={{ color: noArticlesTextColor }}>
          No new articles
        </div>
      )}
    </div>
  );
};

export default ArticleList;
