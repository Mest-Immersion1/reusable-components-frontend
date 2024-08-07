import React, { useState, useEffect } from 'react';
import NewsOverlayCard from './overlayCard';


const ImageSlider = ({ images, textSizeTitle = 'text-xl', textSizeDescription = 'text-sm', textColor = 'text-white' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <NewsOverlayCard
            image={item.image}
            title={item.title}
            description={item.description}
            width="w-cover"
            height="h-[60%]"
            textSizeTitle={textSizeTitle}
            textSizeDescription={textSizeDescription}
            textColor={textColor}
          />
          </div>
        ))}
      </div>
      {/* Add navigation controls if needed */}
    </div>
  );
};

export default ImageSlider;
