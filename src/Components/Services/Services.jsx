import React from "react";
import "./Services.css";
import fruit from "./Services-icons/Vector.svg";
import clock from "./Services-icons/fi-rr-time-fast.svg";
import cart from "./Services-icons/fi-rr-shopping-cart-check.svg";
import gift from "./Services-icons/fi-rr-gift.svg";
const Services = () => {
  return (
    <div className="servCon">
      <div className="left">
        <p>Our Story & Services</p>
        <h1>Our Culinary Journey And Services</h1>
        <p>
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <div className="btn">Explore</div>
      </div>
      <div className="right">
        <div className="serv-card">
          <img src={fruit} alt="" />
          <h3>Catering</h3>
          <p>Delight your guests with our flavors and presentation</p>
        </div>
        <div className="serv-card">
          <img src={clock} alt="" />
          <h3>Fast delivery</h3>
          <p>We deliver your order promptly to your door</p>
        </div>
        <div className="serv-card">
          <img src={cart} alt="" />
          <h3>Online Ordering</h3>
          <p>Explore menu & order with ease using our Online Ordering </p>
        </div>
        <div className="serv-card">
          <img src={gift} alt="" />
          <h3>Gift Cards</h3>
          <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
