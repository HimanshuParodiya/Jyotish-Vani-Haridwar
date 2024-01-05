import React from "react";
import {
  ConnectWithUs,
  Header,
  IntroCarousel,
  Services,
  Specialists,
  Testimonial,
} from "../Components";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "10rem", zIndex: 4 }} className="mainSection">
        <Services />
        <IntroCarousel />
        <ConnectWithUs />
        <Specialists />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
