import React from "react";
import "./Page.css";

const Hero = ({ title, subtitle, text }) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{text}</p>
      <button>Button</button>
    </div>
  );
};

export default Hero;
