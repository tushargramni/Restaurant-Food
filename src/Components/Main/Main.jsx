import React from "react";
import "./Main.css";
import play from "./main-icons/play-icon.png";
import hero from "./main-icons/hero.png";
import Dish1 from "./main-icons/Dish-1.png";
import Dish2 from "./main-icons/Dish-2.png";
import star from "./main-icons/fi-sr-star.png";
import star2 from "./main-icons/fi-br-star.png";
const Main = () => {
  return (
    <div className="main">
      <section className="left">
        <h1>
          Dive into Delights of Delectable <span>Food</span>
        </h1>
        <p>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <section className="buttons">
          <span>Order Now </span>
          <span>
            Watch Video
            {/* <audio src="" controls></audio> */}
            <div className="play-btn">
              {/* <video src="" controls></video> */}
              <img src={play} alt="" />
            </div>
          </span>
        </section>
      </section>
      <section className="right">
        <div className="tags">Hot spicy Food 🌶</div>
        <div className="hero-img">
          <img src={hero} alt="" />
        </div>
        <div className="tag-2">
          <span className="dish-1">
            <span className="dish-img">
              <img src={Dish1} alt="" />
            </span>
            <span className="dish-details">
              <p>Spicy Noodles</p>
              <div className="ratings">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star2} alt="" />
                <img src={star2} alt="" />
              </div>
              <p className="dish-price">
                <span>$</span>18.00
              </p>
            </span>
          </span>

          <span className="dish-2">
            <span className="dish-img">
              <img src={Dish2} alt="" />
            </span>
            <span className="dish-details">
              <p>Vegeterian salad</p>
              <div className="ratings">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star2} alt="" />
              </div>

              <p className="dish-price">
                <span>$</span>23.00
              </p>
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Main;
