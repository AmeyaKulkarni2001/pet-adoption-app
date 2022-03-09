import React from "react";
import FAQ from "./FAQ";
import Search from "./Search";
import AboutUs from "./AboutUs";
import "./NavBar.css"

function NavBar() {
  return (
    <>
      <div id="nav-container">
        <div>Logo</div>
        <div>FAQ</div>
        <div>Serch</div>
        <div>Login</div>
      </div>
    </>
  );
}

export default NavBar;
