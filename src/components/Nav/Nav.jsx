import React from "react";
import "./style.css";
import chat_bot from "./images/chat_bot.png";
import { Link } from "react-router-dom";

import burger from "./images/burger.png";
import close_ from "./images/close.png";

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toogleNavBar = () => {
    setIsOpen(!isOpen);
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="logo-nav-container">
        <div className="logo">
          <button onClick={handleRefresh}>
            <img src={chat_bot} alt="Logo" />
          </button>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#" className="active">
                HOME
              </a>
            </li>
            <li>
              <Link to="/About">ABOUT US</Link>
            </li>
            <li>
              <a href="https://library.rsu.ac.th/libraryrsueng/about_library_administration.html">
                ADMINISTRATION
              </a>
            </li>
            <li>
              <a href="https://www.rsuip.org/">RSU</a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/1hkSOkMvP3_ckVdZTxvuAX88ov6OVaj4Aqo0uoz65-o4/edit">
                SURVEY
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-icon">
          <button onClick={toogleNavBar} className="mobile-button">
            {isOpen ? (
              <div className="menu-chat">
                <img src={close_} alt="close" width={42} />
              </div>
            ) : (
              <div className="menu-chat">
                <img src={burger} alt="chat_bot" width={42} />
              </div>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-view">
          <ul>
            <li>
              <a href="#" className="active">
                HOME
              </a>
            </li>
            <li>
              <Link to="/About">ABOUT US</Link>
            </li>
            <li>
              <a href="https://library.rsu.ac.th/libraryrsueng/about_library_administration.html">
                ADMINISTRATION
              </a>
            </li>
            <li>
              <a href="https://www.rsuip.org/">RSU</a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/1hkSOkMvP3_ckVdZTxvuAX88ov6OVaj4Aqo0uoz65-o4/edit">
                SURVEY
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
