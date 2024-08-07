import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const SaveButton = ({ articleId, color }) => {
  const [saved, setSaved] = useState(false);

  const handleSaveClick = async () => {
    try {
      // Mock API call to save the article using fetch
      const response = await fetch('/api/save-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ articleId }),
      });
      if (response.ok) {
        setSaved(!saved); // Toggle saved state
      } else {
        console.error('Error saving article:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  return (
    <button onClick={handleSaveClick} className="save-button bg-transparent border-none cursor-pointer p-0 flex items-center">
      {saved ? <Bookmark color={color} /> : <BookmarkCheck />}
    </button>
  );
};

SaveButton.propTypes = {
  articleId: PropTypes.string.isRequired,
  color: PropTypes.string,
};

SaveButton.defaultProps = {
  color: 'red', // Default color if none is provided
};

export default SaveButton;
