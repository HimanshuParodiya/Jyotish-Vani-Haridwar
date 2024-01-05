import React from "react";
import "./Testimonial.css";
import CardCarousel from "../Card/CardCarousel";

const Testimonial = () => {
  return (
    <div className="testimonial__container container">
      <h1 className="testimonial__heading mainHeading">Testimonials </h1>
      <CardCarousel />
    </div>
  );
};

export default Testimonial;
