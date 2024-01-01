import React from "react";
import "./Services.css";
import ServiceIcon from "./ServiceIcons/ServiceIcon";
import ServiceIconData from "../../JSON/ServiceIcon.json";

const Services = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {ServiceIconData.serviceIconData.map((iconData) => (
        <div key={iconData.id} className="ServiceImgIconContainer">
          <ServiceIcon iconImg={iconData.imgLink} iconsTitle={iconData.title} />
        </div>
      ))}
    </div>
  );
};

export default Services;
