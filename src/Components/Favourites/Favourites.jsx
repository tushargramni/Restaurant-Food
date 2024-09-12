import React from "react";
import cate1 from "./favourites-icons/pngwing 3.png";
import cate2 from "./favourites-icons/pngwing 4.png";
import cate3 from "./favourites-icons/pngwing 6.png";
import cate4 from "./favourites-icons/pngwing 7.png";
import "./Favourite.css";
const Favourites = () => {
  return (
    <div className="fav-container">
      <p className="red-heading">Customer Favourites</p>
      <h1 className="main-heading">Popular Categories</h1>
      <div className="categories">
        <div className="category">
          <div className="cate-img">
            <img src={cate1} alt="" />
          </div>
          <h3 className="cate-name">Main Dish</h3>
          <p className="cate-details">(86 dishes)</p>
        </div>
        <div className="category">
          <div className="cate-img">
            <img src={cate2} alt="" />
          </div>
          <h3 className="cate-name">Break Fast</h3>
          <p className="cate-details">(12 break fast)</p>
        </div>
        <div className="category">
          <div className="cate-img">
            <img src={cate3} alt="" />
          </div>
          <h3 className="cate-name">Dessert</h3>
          <p className="cate-details">(48 dessert)</p>
        </div>
        <div className="category">
          <div className="cate-img">
            <img src={cate4} alt="" />
          </div>
          <h3 className="cate-name">Browse All</h3>
          <p className="cate-details">(255 items)</p>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
