import React from "react";
import hero from "../assets/images/woman-pet.jpg";
import "./Search.css";
function Search() {
  return (
    <div className="search-container">
      <div className="hero-description">
        <h2>Pet Adoption</h2>
        <p>Search to find your new best friend</p>
      </div>
      <div className="hero-img">
        <img src={hero} alt="pet-adoption" />
      </div>
    </div>
  );
}

export default Search;
