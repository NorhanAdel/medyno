import React from 'react'
import "./Header.css"
function TopHeader({setToggle}) {
  return (
    <div className="topheader">
      <div className="topheader-menue">=</div>
      <div className="top-header-logo">تسوق</div>
      <div className="top-header-text">اهلا وسهلا بكم</div>
      <div className="top-header-phone">0102 - 015 - 157</div>
    </div>
  );
}

export default TopHeader