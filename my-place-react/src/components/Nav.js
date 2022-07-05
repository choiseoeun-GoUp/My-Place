import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div id="nav_header">
        <span id="title">
          <span id="name">LOGOLOGO</span>
        </span>
        <div className="menu_bar">
          <Link to="/">메인</Link>
          <Link to="/write">
            <button>Click to Wirte</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
