import React from "react";
import "./Testimonial.css";
import CardCarousel from "../Card/CardCarousel/CardCarousel";

const Testimonial = () => {
  return (
    <div className="testimonial__container container">
      <h1 className="testimonial__heading mainHeading">Testimonials </h1>
      <h1 className="testimonial__subHeading">
        Voices of Empowerment: Real Experiences, Real Solutions
      </h1>
      <CardCarousel />
    </div>
  );
};

export default Testimonial;
