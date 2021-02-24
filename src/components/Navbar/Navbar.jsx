import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item fa-2x" href="https://github.com/mollymccollumwx">
        <i className="fab fa-github"></i>
        </a>
        <a className="navbar-item fa-2x" href="https://www.linkedin.com/in/mollymccollumwx/">
        <i className="fab fa-linkedin"></i>
        </a>
        <a className="navbar-item fa-2x" href="https://twitter.com/WXMolly">
        <i className="fab fa-twitter"></i>
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={()=> document.querySelector('.navbar-menu').classList.toggle('is-active')}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#/">
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
