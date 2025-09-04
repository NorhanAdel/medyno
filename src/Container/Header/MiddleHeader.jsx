import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"
import cart from "../../Assets/cart_icon.png";
function MiddleHeader() {
  return (
    <div className="middle-header">
      <div className="middle-header-searchbox">
        <input type="search" placeholder="ماذا تريد" />
        <button className="searchbox-btn">ابحث</button>
      </div>
      <Link to="/cart" className="header-shoping-card">
        سلة التسوق
        <img src={cart} alt="" />
        <span className="cart-notification">1</span>
      </Link>
    </div>
  );
}

export default MiddleHeader;
