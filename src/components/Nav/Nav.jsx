import React from "react";
import "./style.css";
import logo from "./images/logo.png";
import chat_bot from "./images/chat_bot.png";
import { Menu, X } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import close_ from "./images/close.png";

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toogleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
            <li>
              <a href="#">SURVEY</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-icon">
          <button onClick={toogleNavBar}>
            {isOpen ? (
              <div className="menu-chat">
                <img src={close_} alt="close" width={30} />
              </div>
            ) : (
              <div className="menu-chat">
                <img src={chat_bot} alt="chat_bot" width={30} />
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
            <li>
              <a href="#">SURVEY</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
