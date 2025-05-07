import React from "react";

import hotel1 from "../images/hotel1.png";
import hotel2 from "../images/hotel2.png";
import house1 from "../images/house1.png";
import house2 from "../images/house2.png";

const Lodging = () => {
  return (
    <div style={{ marginBottom: "70px" }}>
      <span className="lodging">
        Taniti has a wide variety of lodging that ranges from an inexpensive
        hostel to one large, four-star resort. There are many small,
        family-owned hotels and a growing number of bed and breakfasts. All
        types of lodging are strictly regulated and regularly inspected by the
        Tanitian government.
      </span>

      <div className="lodging-row first-row">
        <div className="left-container">
          <div className="left">
            <img
              src={hotel1}
              alt="Image of the Crystal Sand Hotel in Taniti Island."
              height={"140px"}
            />
          </div>
          <div className="middle">
            <h1>Crystal Sand Hotel</h1>
            <span>Cozy 2-bedroom hotel with a view of the sea</span>
          </div>
        </div>

        <div className="right">
          <div className="rating">
            <div className="stars">★★★★★</div>
            <div className="price">$120.00/night</div>
          </div>

          <button className="book-button">Book Now</button>
        </div>
      </div>
      <div className="lodging-row">
        <div className="left-container">
          <div className="left">
            <img
              src={hotel2}
              alt="Image of the McAllister Hotel in Taniti Island."
              height={"140px"}
            />
          </div>
          <div className="middle">
            <h1>McAllister Hotel</h1>
            <span>
              McAllister Hotel displays the modern comfort in the city.
            </span>
          </div>
        </div>

        <div className="right">
          <div className="rating">
            <div className="stars">★★★★☆</div>
            <div className="price">$100.00/night</div>
          </div>

          <button className="book-button">Book Now</button>
        </div>
      </div>
      <div className="lodging-row">
        <div className="left-container">
          <div className="left">
            <img src={house1} alt="Image of Taniti Villa." height={"140px"} />
          </div>
          <div className="middle">
            <h1>Taniti Villa</h1>
            <span>
              Modern house just steps away from various shops and cafés
            </span>
          </div>
        </div>

        <div className="right">
          <div className="rating">
            <div className="stars">★★★★★</div>
            <div className="price">$130.00/night</div>
          </div>

          <button className="book-button">Book Now</button>
        </div>
      </div>
      <div className="lodging-row">
        <div className="left-container">
          <div className="left">
            <img
              src={house2}
              alt="Image of a bed and breakfast in Taniti Island."
              height={"140px"}
            />
          </div>
          <div className="middle">
            <h1>Bed and Breakfast</h1>
            <span>
              A quiet country escape with homemade breakfasts and personal
              charm.
            </span>
          </div>
        </div>

        <div className="right">
          <div className="rating">
            <div className="stars">★★★★☆</div>
            <div className="price">$70.00/night</div>
          </div>

          <button className="book-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Lodging;
