import React from "react";
import f from "./Footer-icons/F.png";
import oodi from "./Footer-icons/oodi.png";
import "./Footer.css";
import facebook from "./Footer-icons/🦆 icon _facebook_.svg";
import twitter from "./Footer-icons/🦆 icon _twitter_.svg";
import instagram from "./Footer-icons/🦆 icon _instagram_.svg";
import youtube from "./Footer-icons/🦆 icon _youtube_.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-con">
        <div className="con">
          <div className="logo">
            <span className="f-bg">
              <img src={f} alt="" />
            </span>
            <img src={oodi} alt="" />
          </div>
          <p>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className="con">
          <p>Userful Links</p>
          <li>About us</li>
          <li>Events</li>
          <li>Blogs</li>
          <li>FAQ</li>
        </div>
        <div className="con">
          <p>Main Menu</p>
          <li>Home</li>
          <li>Offers</li>
          <li>Menus</li>
          <li>Reservation</li>
        </div>
        <div className="con">
          <p>Contact Us </p>
          <li>example@email.com</li>
          <li>+64 958 248 966</li>
          <li>Social media</li>
        </div>
      </div>

      <nav className="footer-nav">
        <div className="footer-icons">
          <span>
            <img src={facebook} alt="" />
          </span>
          <span>
            <img src={instagram} alt="" />
          </span>
          <span>
            <img src={twitter} alt="" />
          </span>
          <span>
            <img src={youtube} alt="" />
          </span>
        </div>
        <span>Copyright 2023 VerveBridge | All rights reserved </span>
      </nav>
    </div>
  );
};

export default Footer;
