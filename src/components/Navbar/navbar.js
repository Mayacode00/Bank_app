import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <img src={Logo} className="logo-img" />
        <div className="menu-bar">
          <nav>
            <ul>
              <li>home</li>
              <li>contact</li>
              <li className="diff">faq</li>
            </ul>
          </nav>
        </div>
        <div className="link">
          <Link to="/get-started" className="get-started">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
