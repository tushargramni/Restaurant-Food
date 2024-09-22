import React, { useState } from "react";
import "./Navbar.css";
import arrowDown from "./nav-icons/down-arrow.png";
import cart from "./nav-icons/shopping-bag.png";
import search from "./nav-icons/icon _search.png";
import oodi from "./nav-icons/oodi.png";
import phone from "./nav-icons/phone_in_talk.svg";
import ficon from "./nav-icons/F.png";
// import hamburgerIcon from "./nav-icons/hamburger-icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-name">
          <img src={ficon} alt="F icon" />
        </span>
        <img src={oodi} alt="Oodi" />
      </div>
      <div className={`nav-items`}>
        <a className="links" href="/" target="_parent">
          <span>Home</span>
        </a>
        <a className="links" href="/" target="_parent">
          <span>Menu</span>
          <img src={arrowDown} alt="Arrow Down" />
        </a>
        <a className="links" href="/" target="_parent">
          <span>Services</span>
          <img src={arrowDown} alt="Arrow Down" />
        </a>
        <a className="links" href="/">
          <span>Offers</span>
        </a>
        <div className="buttons">
          <span className="search-icon">
            <img src={search} alt="Search Icon" />
          </span>
          <span className="cart-icon">
            <img src={cart} alt="Cart Icon" />
            <span className="badge">8</span>
          </span>
          <a className="links" href="/" target="_parent">
            <img src={phone} alt="Phone Icon" />
            Contact
          </a>
        </div>
      </div>

      {/* <div className="hamburger" onClick={toggleMobileMenu}>
        <img src={hamburgerIcon} alt="Hamburger Menu" />
      </div> */}
    </nav>
  );
};

export default Navbar;
