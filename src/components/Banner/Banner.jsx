import React from 'react'
import "./Banner.css"
import IMG from "../../Assets/shoes.png";
import IMG2 from "../../Assets/house.png";

function Banner() {
  return (
    <div className="banner">
      <img src={IMG} alt="banner" className="banner-img" />
      <img src={IMG2} alt="banner" className="banner-img" />
    </div>
  );
}

export default Banner