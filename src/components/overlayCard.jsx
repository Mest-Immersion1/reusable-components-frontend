import React from 'react';

const NewsOverlayCard = ({
  image,
  title,
  description,
  width = 'w-full sm:w-[400px]',  // Responsive width
  height = 'h-[200px] sm:h-auto', // Responsive height
  textSizeTitle = 'text-lg sm:text-xl',  // Responsive title text size
  textSizeDescription = 'text-xs sm:text-sm', // Responsive description text size
  textColor = 'text-white'  // Default text color
}) => {
  return (
    <div className={`relative ${width} ${height} overflow-hidden`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover" // Cover the container without distortion
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div className={`text-center p-4 ${textColor}`}>
          <h2 className={`font-bold ${textSizeTitle} hover:underline`}>{title}</h2>
          <p className={`${textSizeDescription}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsOverlayCard;
