import React from "react";
import { Link, useNavigate } from "react-router-dom";
import hero from "../assets/images/woman-pet.jpg";
import "./Hero.css";
function Hero() {
  return (
    <div className="search-container">
      <div className="hero-content">
        <div className="hero-description">
          <h2>Pet Adoption</h2>
          <p>We help people foster,rehome and adopt pets!.</p>
        </div>
        <div className="hero-links">
          <Link to={"/rehome"} className="to-button">
            Rehome
          </Link>
          <Link to={"/adopt"} className="to-button">
            Adopt
          </Link>
        </div>
      </div>
      <div>
        <div className="hero-img">
          <img src={hero} alt="pet-adoption" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
