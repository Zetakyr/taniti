import React from "react";

import TanitiLandscape from "../images/taniti.png";
import beach from "../images/beach.png";

const Home = () => {
  return (
    <div className="about" style={{ flexDirection: "column" }}>
      <div className="about-info">
        <h1>Welcome to Taniti Island!</h1>
        <div style={{ marginBottom: "30px" }}>
          <img
            src={TanitiLandscape}
            alt="Image of Taniti Island."
            height={"250px"}
            className="border-image"
          />
          <img
            src={beach}
            alt="Image of Taniti Island beach."
            height={"250px"}
            className="border-image"
            style={{ marginLeft: "30px" }}
          />
        </div>
        <span>
          Most people visit Taniti to enjoy the beaches, explore the rainforest,
          and to visit the volcano. However, there are other things to do,
          including visiting a local history museum, going on chartered fishing
          tours, snorkeling, zip-lining in the rainforest, visiting several
          pubs, including a microbrewery, dancing at a new dance club, seeing a
          movie, taking helicopter rides, playing at an arcade, visiting art
          galleries, and bowling. Also, a nine-hole golf course should be
          operational by next year. Many of these activities are located in
          Merriton Landing, which is a rapidly developing area on the north side
          of Yellow Leaf Bay.
        </span>
      </div>
    </div>
  );
};

export default Home;
