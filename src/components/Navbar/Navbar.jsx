import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand ml-2">
        <a className="navbar-item fa-2x" href="https://github.com/mollymccollumwx">
        <i class="fab fa-github"></i>
        </a>
        <a className="navbar-item fa-2x" href="https://github.com/mollymccollumwx">
        <i class="fab fa-linkedin"></i>
        </a>
        <a className="navbar-item fa-2x" href="https://github.com/mollymccollumwx">
        <i class="fab fa-twitter"></i>
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end mr-2">
          <a className="navbar-item" href="">
            Home
          </a>
          <a className="navbar-item" href="#/about">
            About
          </a>
          <a className="navbar-item" href="#/portfolio">
            Portfolio
          </a>
          <a className="navbar-item" href="#/contact">
            Contact
          </a>
        </div>
        
      </div>
      
    </nav>
  );
};

export default Navbar;
