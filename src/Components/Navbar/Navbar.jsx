import React from "react";
import "./Navbar.css";
import arrowDown from "./nav-icons/down-arrow.png";
import cart from "./nav-icons/shopping-bag.png";
import search from "./nav-icons/icon _search_.png";
import oodi from "./nav-icons/oodi.png";
import phone from "./nav-icons/phone_in_talk.svg";
import ficon from "./nav-icons/F.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-name">
          <img src={ficon} alt="" />
        </span>

        <img src={oodi} alt="" />
      </div>
      <div className="nav-items">
        <a className="links" href="/" target="_parent">
          <span>Home</span>
        </a>
        <a className="links" href="/" target="_parent">
          <span>Menu</span>
          <img src={arrowDown} alt="" />
        </a>
        <a className="links" href="/" target="_parent">
          <span> Services</span>
          <img src={arrowDown} alt="" />
        </a>
        <a className="links" href="/">
          <span>Offers</span>
        </a>
      </div>
      <div className="buttons">
        <span className="search-icon">
          <img src={search} alt="" />
        </span>
        <span className="cart-icon">
          <img src={cart} alt="" />
          <span className="badge">8</span>
        </span>
        <a className="links" href="/" target="_parent">
          <img src={phone} alt="" />
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
