import React from "react";
import "./Testimonials.css";
import pizza from "./Testimonial-icons/🍕.svg";
import emoji from "./Testimonial-icons/😋.svg";
import star from "./Testimonial-icons/fi-sr-star.svg";
import girl1 from "./Testimonial-icons/girl-1.svg";
import girl2 from "./Testimonial-icons/girl-2.svg";
import girl3 from "./Testimonial-icons/girl-4.svg";
import chef from "./Testimonial-icons/girl-3.svg";
const Testimonials = () => {
  return (
    <div className="testCon">
      <div className="right">
        <div className="bg-green"></div>
        <img src={chef} alt="" />
        <div className="comment">Our Best Chef 😁</div>
      </div>
      <div className="left">
        <p>Testimonials</p>
        <h1>What Our Customers Say About Us</h1>
        <p className="test-desc">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
        <div className="people">
          <div className="user">
            <img src={girl1} alt="" />
          </div>
          <div className="user">
            <img src={girl2} alt="" />
          </div>
          <div className="user">
            <img src={girl3} alt="" />
          </div>
          <div className="user-feed">
            <h3>Customer Feedback</h3>
            <span className="user-rating">
              <img src={star} alt="" />
              4.9
              <span>(18.9k Reviews)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
