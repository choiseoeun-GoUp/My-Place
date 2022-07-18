import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logoImage from "../assets/Logo-g.png";

function Nav() {
  return (
    <nav>
      <div id="nav_header">
        <div id="title">
          <img src={logoImage} alt="로고" />
        </div>
        <div className="menu_bar">
          <Link to="/">
            <button className="btn_main underline">Main</button>
          </Link>
          <Link to="/write">
            <button className="btn_write underline">Click to Write</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
