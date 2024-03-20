import { React, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="#">Email Assistant</a>
          </div>
          <ul className="links">
            <li>
              <a href="hero">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>

            <a href="#" className="action_btn">
              Sing Up
            </a>
          </ul>
          <button className="toggle_btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
          <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            <li>
              <a href="hero">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <li>
              <a href="#" className="action_btn">
                Sing Up
              </a>
            </li>
          </div>
        </div>
      </header>
      <main>
        <section id="hero">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            <br />
            molestiae nihil quidem nemo aliquam placeat commodi, tempore modi
            <br />
            eveniet accusamus quisquam deleniti, tempora, quia dolorum
            <br />
            reprehenderit delectus inventore ullam. Exercitationem!
          </p>
        </section>
      </main>
    </>
  );
}
