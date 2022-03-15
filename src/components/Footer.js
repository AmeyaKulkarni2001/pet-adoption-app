import React from "react";
import fb from "../assets/images/facebook-4-48.png";
import twt from "../assets/images/twitter-48.png";
import inst from "../assets/images/instagram-48.png";
import whtapp from "../assets/images/whatsapp-48.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-links">
      <div className="footer-info">
        <div>SEARCH FOR A PET</div>
        <div>ABOUT OUR CAMPAIGN</div>
        <div>CONTACT</div>
        <div>PRIVACY POLICY</div>
        <div> TERMS & CONDITIONS</div>
      </div>
      <div className="footer-social">
        <div>
          <img src={fb} alt="facebook-logo" height={30} width={30} />
        </div>
        <div>
          <img src={twt} alt="twitter-logo" height={30} width={30} />
        </div>
        <div>
          <img src={inst} alt="instagram-logo" height={30} width={30} />
        </div>
        <div>
          <img src={whtapp} alt="whatsapp-logo" height={30} width={30} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
