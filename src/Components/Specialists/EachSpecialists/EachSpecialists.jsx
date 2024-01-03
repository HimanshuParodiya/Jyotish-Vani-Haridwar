import React from "react";
import "./EachSpecialists.css";

const EachSpecialists = ({ img, name }) => {
  return (
    <div className="eachSpecialists__container">
      <div className="intro_text">
        <ul>
          <li>
            Meet <span className="eachSpecialists__name">{name}</span>
          </li>
          <li>He has Done PHD</li>
          <li>He is awarded by the President "President Name" </li>
        </ul>
      </div>
      <img src={img} alt={name} />
      <div className="eachSpecialists__name">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default EachSpecialists;
