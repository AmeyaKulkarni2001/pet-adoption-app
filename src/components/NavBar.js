import React from "react";
import FAQ from "./FAQ";
import Search from "./Search";
import AboutUs from "./AboutUs";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="nav-container">
      <div className="logo-link">
        <div>Logo</div>
      </div>
      <div className="nav-links">
        <div>FAQ</div>
        <div>Search</div>
        <div>Login</div>
      </div>
    </div>
  );
}

export default NavBar;
