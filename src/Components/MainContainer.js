import React from "react";
import Carousel from "./Carasoul";
import { imageArray } from "./utils";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="heading"> Featured Products</div>
      <div className="description">
        Explore and discover a variety of products
      </div>

      <Carousel images={imageArray} />
    </div>
  );
};

export default MainContainer;
