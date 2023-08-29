import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;

      return newIndex;
    });
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;

      return newIndex;
    });
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide} className="arrow left">
        &lt;
      </button>
      <div className="carousel-content">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={images[currentIndex].path}
              alt={images[currentIndex].alt}
            />

            {/* <img src={image.path} alt={image.alt} /> */}
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide} className="arrow right">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
