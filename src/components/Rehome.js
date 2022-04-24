import React from "react";
import Footer from "./Footer";
import "./NavBar.css";
import "./Rehome.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import rehome from "../assets/images/rehome-image.jpg";
const Rehome = () => {
  return (
    <div>
      <nav>
        <div id="nav-container">
          <div className="logo-link">
            <div>
              <Link to="/">
                <img src={logo} alt="rehome-logo" height={75} width={75} />
              </Link>
            </div>
          </div>
          <div className="nav-links">
            <Link className="nav-link" style={{ color: "#000" }} to={"/"}>
              New Post
            </Link>

            <Link className="nav-link" style={{ color: "#000" }} to={"/"}>
              Requests
            </Link>

            <Link className="nav-link" style={{ color: "#000" }} to={"/"}>
              Post History
            </Link>
          </div>
        </div>
      </nav>
      <section className="how-it-works">
        <div className="rehome-info">
          <h1>HOW IT WORKS</h1>
          <p>
            Rehoming your pet should be easy and stress free both for you and
            your pet. Our experts at Adopt-a-Pet.com have created a simple,
            reliable, free program to help you place your pet from your loving
            home directly to another.
          </p>
          <img className="rehome-image" src={rehome} alt="rehome" />
        </div>
        <div className="rehome-steps">
          <ol>
            <li>
              <h3>Create a Profile</h3>
              <p>
                Get your pets posted on Adopt-a-Pet.com to be seen by millions
                of pet adopters.
              </p>
            </li>
            <li>
              <h3>Create a Profile</h3>
              <p>
                Get your pets posted on Adopt-a-Pet.com to be seen by millions
                of pet adopters.
              </p>
            </li>
            <li>
              <h3>Review Applications</h3>
              <p>
                The dedicated team at Rehome will give you all the help you need
                to select the best potential adopters.
              </p>
            </li>
            <li>
              <h3>Meet Adopters</h3>
              <p>
                The Rehome team will guide you through the process of setting
                safe and pressure-free meetings with applicants.
              </p>
            </li>
            <li>
              <h3>Finalize Adoption</h3>
              <p>
                Rehome will provide you with an adoption contract to protect the
                transfer of your pet ownership.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <div>
        <h1 className="rehome-heading">
          Ready to Find Your Pet a Loving Forever Home?
        </h1>
        <div className="rehome-btn">
          <button className="rehome-btn-link">Rehome A Pet</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rehome;
