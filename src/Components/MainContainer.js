import React from "react";
import Carousel from "./Carasoul";
import { imageArray } from "./utils";

const MainContainer = () => {
  return <div className="main-container">

    <Carousel images ={imageArray}/>
  </div>;
};

export default MainContainer;
