import React from "react";
import AboutBackgroundImage from "../Assets/about south.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Clean and hygiene food services.
        </p>
        <p className="primary-text">
           
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        
        </div>
      </div>
    </div>
  );
};

export default About;
