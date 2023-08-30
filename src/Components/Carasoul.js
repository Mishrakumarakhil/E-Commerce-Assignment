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
    <div className="carousel" style={{ paddingTop: "10rem" }}>
      
      <div className="carousel-content">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              style={{ height: "25rem", width: "25rem", borderRadius: "10px" }}
              src={images[currentIndex].path}
              alt={images[currentIndex].alt}
            />

          </div>
        ))}
      </div>
      <div className="arrow-class">
        <button onClick={goToPrevSlide}>&lt;</button>
        {images.map((el, idx) => {
          return (
            <div
              className={`round ${currentIndex === idx ? "active" : ""}`}
              key={idx}
            ></div>
          );
        })}
        <button onClick={goToNextSlide}>&gt;</button>
      </div>
      
    </div>
  );
};

export default Carousel;
