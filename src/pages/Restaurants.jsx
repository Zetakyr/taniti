import React from "react";
import fish1 from "../images/fish1.png";
import fish2 from "../images/fish2.png";
import fish3 from "../images/fish3.png";
import fish4 from "../images/fish4.png";
import fish5 from "../images/fish5.png";

import bread1 from "../images/bread1.png";
import bread2 from "../images/bread2.png";
import bread3 from "../images/bread3.png";

import noodle from "../images/noodle.png";
import sushi from "../images/sushi.png";

const Restaurants = () => {
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
        Restaurants
      </h1>
      <section class="restaurant-section">
        <h2>Fish and Rice Restaurants</h2>
        <div class="grid">
          <div class="card">
            <img
              src={fish1}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>Fish and Rice Restaurant #1</span>
          </div>
          <div class="card">
            <img
              src={fish2}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>Fish and Rice Restaurant #2</span>
          </div>
          <div class="card">
            <img
              src={fish3}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>Fish and Rice Restaurant #3</span>
          </div>
          <div class="card">
            <img
              src={fish4}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>Fish and Rice Restaurant #4</span>
          </div>
          <div class="card">
            <img
              src={fish5}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>Fish and Rice Restaurant #5</span>
          </div>
        </div>
      </section>

      <section class="restaurant-section">
        <h2>American Style Meals</h2>
        <div class="grid">
          <div class="card">
            <img
              src={bread1}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>American Style Restaurant #1</span>
          </div>
          <div class="card">
            <img
              src={bread2}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>American Style Restaurant #2</span>
          </div>
          <div class="card">
            <img
              src={bread3}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>American Style Restaurant #3</span>
          </div>
        </div>
      </section>

      <section class="restaurant-section">
        <h2>Pan-Asian Cuisine</h2>
        <div class="grid">
          <div class="card">
            <img
              src={noodle}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>Pan-Asian Restaurant #1</span>
          </div>
          <div class="card">
            <img
              src={sushi}
              alt="Image of food from the restaurant."
              height={"140px"}
            />
            <span>Pan-Asian Restaurant #2</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
