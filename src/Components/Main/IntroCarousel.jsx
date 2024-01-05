import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./IntroCarousel.css";
import Loader from "../Loader/Loader";

const IntroCarousel = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = (e) => {
    // Handle image loading error if needed
    setLoading(true);
  };

  return (
    <div className="carousel_container">
      {loading && <Loader />}
      <Carousel infiniteLoop autoPlay>
        <div className="carousel_imageContainer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.yRsbgQI6NQb-Q1Gv15tpCAHaE6&pid=Api&P=0&h=180"
            alt="temp Image"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <p className="legend">Dr. Rakesh Parodiya</p>
        </div>
        <div className="carousel_imageContainer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.yRsbgQI6NQb-Q1Gv15tpCAHaE6&pid=Api&P=0&h=180"
            alt="temp Image"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <p className="legend">Mr. Mukesh Parodiya</p>
        </div>
      </Carousel>
    </div>
  );
};

export default IntroCarousel;
