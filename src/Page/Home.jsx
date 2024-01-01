import React from "react";
import { Header, IntroCarousel, Services } from "../Components";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "10rem", zIndex: 4 }} className="mainSection">
        <Services />
        <IntroCarousel />
      </div>
    </div>
  );
};

export default Home;
