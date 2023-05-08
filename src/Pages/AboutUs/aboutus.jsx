import React from "react";
import "./aboutus.css";
import aboutimage from "./Images/about.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="about">
        <div className="eventimg">
          <img src={aboutimage} alt="" />
        </div>
        <div className="text">
          <h2>About Us</h2>
          <h5>Serving hope for the ones in need</h5>
          <p>
            Our proposed platform is designed to bridge the gap between
            organizations and customers, bringing them closer together. With a
            user-friendly interface, organizations can easily add events with
            location and time, making it simple for customers to book slots. Our
            platform is secure and uses license number verification to ensure
            that all organizations are validated. Users can easily search and
            find events in their respective state using our unique filtration
            option. Additionally, our real-time inventory updates allow
            organizations to efficiently track and manage their stock levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
