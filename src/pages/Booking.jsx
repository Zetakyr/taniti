import React from "react";

import beach from "../images/beach.png";

const Booking = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "-60px",
          marginTop: "120px",
        }}
      >
        Booking
      </h1>
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
          <h1>Explore Taniti with a Guide</h1>
          <span>
            Most tourists spend most of their time in Taniti City, which boasts
            native architecture and nearby white, sandy beaches that encircle
            Yellow Leaf Bay. Other popular activities include boat or bus tours
            of the island, hikes in the rainforest, or visits to Taniti's active
            volcano. Explore the natural wonders and cultural heritage of Taniti
            with a guided island tour.
          </span>

          <button className="book-button tour-button">Book a Tour!</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
