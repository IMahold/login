import React from "react";
import "./navbar.css";
import imag from "../assets/Images/image1.png";
import line1 from "../assets/Images/line1.png";
import line2 from "../assets/Images/line2.png";
import line3 from "../assets/Images/line3.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-imag">
        <img src={imag} alt="" />
      </div>
      <div className="nav-lines">
        <img className="line line1" src={line1} alt="" />
        <img className="line line2" src={line2} alt="" />
        <img className="line line3" src={line3} alt="" />
      </div>
    </div>
  );
}
