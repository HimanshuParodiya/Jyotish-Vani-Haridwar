import React, { Suspense } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./IntroCarousel.css";
import Loader from "../Loader/Loader";

const IntroCarousel = () => {
  return (
    <Carousel
      className="carousel_container"
      infiniteLoop="true"
      autoPlay="true"
    >
      <Suspense fallback={<Loader />}>
        <div className="carousel_imageContainer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.yRsbgQI6NQb-Q1Gv15tpCAHaE6&pid=Api&P=0&h=180"
            alt="temp Image"
          />
          <p className="legend">Dr. Rakesh Parodiya</p>
        </div>
      </Suspense>
      <div className="carousel_imageContainer">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.yRsbgQI6NQb-Q1Gv15tpCAHaE6&pid=Api&P=0&h=180"
          alt="temp Image"
        />
        <p className="legend">Mr. Mukesh Parodiya</p>
      </div>
    </Carousel>
  );
};

export default IntroCarousel;
