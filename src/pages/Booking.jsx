import React from "react";

import beach from "../images/beach.png";

const Booking = () => {
  return (
    <div className="about">
      <div>
        <img
          src={beach}
          alt="Image of Taniti Beach."
          height={"450px"}
          className="border-image"
        />
      </div>
      <div className="about-info">
        <h1>About Taniti Island</h1>
        <span>
          Explore the natural wonders and cultural heritage of Taniti with a
          guided island tour.
        </span>

        <button className="book-button tour-button">Book a Tour!</button>
      </div>
    </div>
  );
};

export default Booking;
