import React, { useState, useEffect } from 'react';

const Slideshow = ({ slides, interval = 3000 }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup function to clear interval on unmount
  }, [slides, interval]);

  const goToSlide = index => {
    setSlideIndex(index);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === slideIndex ? 'active' : ''}`}
        >
          {slide.content}
        </div>
      ))}
      <div style={{ textAlign: 'center' , marginTop:"30px"}}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
