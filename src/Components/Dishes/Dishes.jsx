import React from "react";
import back from "./Dish-icons/arrow_back.svg";
import forward from "./Dish-icons/arrow_forward.svg";
import "./Dish.css";
import fstar from "./Dish-icons/fi-br-heart.svg";
import estar from "./Dish-icons/fi-sr-heart.svg";
import veg from "./Dish-icons/Vegetable-salad.svg";
import fat from "./Dish-icons/Fattoush-salad.svg";
import egg from "./Dish-icons/Egg-salad.svg";
const Dishes = () => {
  return (
    <div className="dishCon">
      <p>Special Dishes</p>
      <nav className="dish-menu">
        <div className="heading">
          <h1>Standout Dishes from our Menu</h1>
        </div>
        <div className="buttons">
          <a href="/" target="_parent">
            <img src={back} alt="" />
          </a>
          <a href="/" target="parent">
            <img src={forward} alt="" />
          </a>
        </div>
      </nav>
      <div className="dish-cards">
        <div className="dish-item">
          <div className="star-badge">
            <img src={fstar} alt="" />
          </div>
          <div className="desc">
            <img src={fat} alt="" />
          </div>
        </div>
        <div className="dish-item">
          <div className="star-badge">
            <img src={fstar} alt="" />
          </div>
          <div className="desc">
            <img src={veg} alt="" />
          </div>
        </div>
        <div className="dish-item">
          <div className="star-badge">
            <img src={fstar} alt="" />
          </div>
          <div className="desc">
            <img src={egg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
