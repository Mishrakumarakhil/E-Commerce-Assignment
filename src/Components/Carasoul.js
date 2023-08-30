import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../assets/rightArrow.svg";
import { ReactComponent as DotIndicator } from "../assets/dotIndicator.svg";
import { ReactComponent as CurrentIndicator } from "../assets/currentIndicator.svg";

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
    <div className="carousel" style={{ paddingTop: "3rem" }}>
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
        <LeftArrow onClick={goToPrevSlide} />

        {images.map((el, idx) => {
          return currentIndex === idx ? (
            <CurrentIndicator
              className={`round ${currentIndex === idx ? "active" : ""}`}
              key={idx}
            />
          ) : (
            <DotIndicator
              className={`round ${currentIndex === idx ? "active" : ""}`}
              key={idx}
            />
          );
        })}

        <RightArrow onClick={goToNextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
