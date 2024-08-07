import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Heart, ThumbsUp, ThumbsUpIcon } from 'lucide-react';

const MySlider = ({ heading, slides, url }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          autoplay: true,
          interval: 3000,
          pagination: true
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index} className='bg-transparent'>
            <div className="flex flex-col items-center justify-center p-4 bg-transparent rounded-lg shadow-lg">
              <a href={url}><img src={slide.image} alt={`Image ${index + 1}`} className="rounded-lg mb-2" />
            
              
              <h3 className="text-sm font-semibold hover:underline">{slide.title}</h3>
              </a>
              <div>
                <button className='cursor-default'><ThumbsUpIcon className='w-5 h-6 absolute bottom-2 right-16 fill-black text-black animate-pulse hover:fill-blue-700' style={{ animationDuration: '6s' }}/></button>
              <button className='cursor-default' onC>
              <Heart  className='w-5 h-5 absolute bottom-2 right-8 fill-black text-black mt-1 animate-pulse hover:fill-red-700  ' style={{ animationDuration: '6s' }}/>

              </button>

              </div>
             
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MySlider;
