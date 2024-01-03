import React from "react";
import {
  ConnectWithUs,
  Header,
  IntroCarousel,
  Services,
  Specialists,
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
      </div>
    </div>
  );
};

export default Home;
