import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MovingImages = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full">
        {!isMobile && (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000} stopOnHover={false}>
            <div>
              <img
                className="hidden"
                src="../static/images/carousel-1.png"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                className="hidden"
                src="../static/images/carousel-2.png"
                alt="Slide 2"
              />
            </div>
        </Carousel>
        )}
      {isMobile && (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000} stopOnHover={false}>
        <div>
          <img
            className="hidden"
            src="../static/images/carousel-1-mobile.png"
            alt="Slide 1"
          />
          <img
            className="hidden"
            src="../static/images/carousel-2-mobile.png"
            alt="Slide 2"
          />
        </div>
        <div>
            <img
            className=""
            src="../static/images/carousel-3-mobile.png"
            alt="Slide 3"
            />
            <img
            className=""
            src="../static/images/carousel-4-mobile.png"
            alt="Slide 4"
            />
        </div>
      </Carousel>
      )} 
    </div>
  );
};

export default MovingImages;
