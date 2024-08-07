import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SaveButton from './saveButton';
import ShareButton from './shareButton';
// import './newsCarousel.css'

const NewsCarousel = ({ heading, articles }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          gap: '1rem',
          autoplay: true,
          interval: 5000,
          pagination: true,
          arrows: true,
          breakpoints: {
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {articles.map((article, index) => (
          <SplideSlide key={index}>
            <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={`Article ${index + 1}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-700">{article.description}</p>

                <div className='relative'>
                <ShareButton className='pt-6 absolute'/>
              </div>
               
              </div>
             
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default NewsCarousel;
