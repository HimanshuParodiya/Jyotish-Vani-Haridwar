import React from "react";
import "./Specialists.css";
import EachSpecialists from "./EachSpecialists/EachSpecialists";
import RakeshBhaiya from "/src/assets/RakeshBhaiya.png";
import MukeshBhaiya from "/src/assets/MukeshBhaiya.png";

const Specialists = () => {
  return (
    <div className="specialists__container container">
      <h1 className="specialists__heading">Meet Our Specialists</h1>
      <div className="specialists__box">
        <EachSpecialists img={RakeshBhaiya} name="Dr. Rakesh Parodiya" />
        <EachSpecialists img={MukeshBhaiya} name="AR. Mukesh Parodiya" />
      </div>
    </div>
  );
};

export default Specialists;
