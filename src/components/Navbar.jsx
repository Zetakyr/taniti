import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <NavLink to="/">Taniti Island</NavLink>
      </h2>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/transportation" activeclassname="active">
            Transportation
          </NavLink>
        </li>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/lodging" activeclassname="active">
            Lodging
          </NavLink>
        </li>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/booking" activeclassname="active">
            Booking
          </NavLink>
        </li>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/restaurants" activeclassname="active">
            Restaurants
          </NavLink>
        </li>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/faq" activeclassname="active">
            F.A.Q
          </NavLink>
        </li>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/contact-us" activeclassname="active">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
