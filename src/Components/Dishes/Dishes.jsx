import React from "react";
import back from "./Dish-icons/arrow_back.svg";
import forward from "./Dish-icons/arrow_forward.svg";
import "./Dish.css";

const Dishes = () => {
  return (
    <div className="dishCon">
      <p>Special Dishes</p>
      <nav>
        <div className="heading">
          <h1>Standout Dishes from our Menu</h1>
        </div>
        <div className="buttons">
          <a href="/" target="_parent">
            <picture>
              <img src={back} alt="" />
            </picture>
          </a>
          <a href="/" target="parent">
            <picture>
              <img src={forward} alt="" />
            </picture>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Dishes;
