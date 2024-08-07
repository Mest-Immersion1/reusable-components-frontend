import React from 'react';

const NewsOverlayCard = ({
  image,
  title,
  description,
  width = 'w-[400px]',  // Default width
  height = 'h-auto', // Default height
  textSizeTitle = 'text-xl',  // Default title text size
  textSizeDescription = 'text-sm', // Default description text size
  textColor = 'text-white'  // Default text color
}) => {
  return (
    <div className={`relative ${width} ${height} overflow-hidden`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover justify-center " // Cover the container without distortion
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center">
        <div className={`text-center p-4 ${textColor}`}>
          <h2 className={`font-bold ${textSizeTitle} hover:underline`}>{title}</h2>
          <p className={`${textSizeDescription}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsOverlayCard;
