import React from 'react';
import SaveButton from '../components/saveButton';


const Article = ({ article }) => {
  return (
    <div className="article-card">
      <h2>{article}</h2>
      <p>{article}</p>
      <SaveButton articleId={article.id} color="blue" /> {/* Custom color */}
    </div>
  );
};

export default Article;
