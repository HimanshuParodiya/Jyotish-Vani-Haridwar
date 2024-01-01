import React from "react";
import "./ServiceIcon.css";

const ServiceIcon = ({ iconImg, iconsTitle }) => {
  return (
    <div className="iconContainer">
      <img src={iconImg} alt={iconImg} />
      <p>{iconsTitle}</p>
    </div>
  );
};

export default ServiceIcon;
