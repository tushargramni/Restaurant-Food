import React from "react";
import back from "./Dish-icons/arrow_back.svg";
import forward from "./Dish-icons/arrow_forward.svg";
import "./Dish.css";
import estar from "./Dish-icons/fi-br-heart.svg";
import fstar from "./Dish-icons/fi-sr-heart.svg";
import veg from "./Dish-icons/Vegetable-salad.svg";
import fat from "./Dish-icons/Fattoush-salad.svg";
import egg from "./Dish-icons/Egg-salad.svg";
import star from "./Dish-icons/fi-sr-star.svg";
const Dishes = () => {
  return (
    <div className="dishCon">
      <p className="heading">Special Dishes</p>
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
          <div className="des">
            <h2>Fattoush salad</h2>
            <p>Description of the item</p>
            <div className="price">
              <p>
                <span>$</span>24.00
              </p>
              <p>
                <img src={star} alt="" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="dish-item">
          <div className="star-badge">
            <img src={estar} alt="" />
          </div>
          <div className="desc">
            <img src={veg} alt="" />
          </div>
          <div className="des">
            <h2>Vegetable salad</h2>
            <p>Description of the item</p>
            <div className="price">
              <p>
                <span>$</span>26.00
              </p>
              <p>
                <img src={star} alt="" />
                4.6
              </p>
            </div>
          </div>
        </div>
        <div className="dish-item">
          <div className="star-badge">
            <img src={estar} alt="" />
          </div>
          <div className="desc">
            <img src={egg} alt="" />
          </div>
          <div className="des">
            <h2>Egg Vegi salad</h2>
            <p>Description of the item</p>
            <div className="price">
              <p>
                <span>$</span>23.00
              </p>
              <p>
                <img src={star} alt="" />
                4.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
