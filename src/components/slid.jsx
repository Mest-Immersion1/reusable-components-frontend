import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Heart, ThumbsUpIcon } from "lucide-react";

const MySlider = ({ heading, slides, url }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          autoplay: true,
          interval: 3000,
          pagination: true,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center p-4 bg-transparent rounded-lg shadow-lg">
              <a href={url}>
                <img
                  src={slide.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded-lg mb-2 object-cover"
                />
                <h3 className="text-sm font-semibold text-center hover:underline">
                  {slide.title}
                </h3>
              </a>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MySlider;
