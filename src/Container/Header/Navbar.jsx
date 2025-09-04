import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import { navLink } from "../../Constant/navLink";
function Navbar({ toggle, setToggle }) {
  return (
    <nav style={{ right: toggle && "0" }} className="navbar">
      <div className="close-icon" onClick={() => setToggle(false)}>
        X
      </div>
      <ul className="nav-links">
        {navLink.map((item, i) => {
          return (
            <li className="navbar-link">
              {" "}
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;