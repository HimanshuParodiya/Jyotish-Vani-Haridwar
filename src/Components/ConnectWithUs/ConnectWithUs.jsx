import React from "react";
import "./ConnectWithUs.css";
import ConnectWithUsIcons from "./ConnectWithUsIcons/ConnectWithUsIcons";
import phoneIcon from "/src/assets/phone.png";
import chatIcon from "/src/assets/chat.png";

const ConnectWithUs = () => {
  return (
    <div className="connectWithUs__container container">
      <h1 className="connectWithUs__heading">
        Engage in a Conversation or Chat with Us
      </h1>
      <div className="connectWithUs__box">
        <ConnectWithUsIcons icons={phoneIcon} />
        <ConnectWithUsIcons icons={chatIcon} />
      </div>
    </div>
  );
};

export default ConnectWithUs;
