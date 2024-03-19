import React from "react";
import "./style.css";
import logo from "./images/logo.png";

function Nav() {
  return (
    <div className="logo-nav-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="https://library.rsu.ac.th/libraryrsueng/about_library_history.html">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="https://library.rsu.ac.th/libraryrsueng/about_library_administration.html">
              ADMINISTRATION
            </a>
          </li>
          <li>
            <a href="https://www.rsuip.org/">RSU</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
