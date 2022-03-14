import React, { useContext } from "react";
import FAQ from "./FAQ";
import Search from "./Search";
import AboutUs from "./AboutUs";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "../context/auth";

function NavBar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  }

  return (
    <div id="nav-container">
      <div className="logo-link">
        <div>Logo</div>
      </div>
      <div className="nav-links">
        <div>FAQ</div>
        <div>Search</div>
        {
          user ? <div onClick={handleLogout}>Logout</div>
          : <Link to={"/login"}>Login</Link>
        }
        
      </div>
    </div>
  );
}

export default NavBar;
