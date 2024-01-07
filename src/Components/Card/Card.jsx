import React from "react";
import "./Card.css";

const Card = ({ count, imgLink }) => {
  return (
    <div className="card__container">
      <div className="card__img">
        <img src={imgLink} alt="" />
      </div>
      <div className="card__text">
        JyotishVaniHaridwar has been my guiding star. Its accurate horoscopes
        and compassionate insights have illuminated my path, offering clarity
        and wisdom. A transformative experience that I highly recommend for
        anyone on a journey of self-discovery.
      </div>
    </div>
  );
};

export default Card;
