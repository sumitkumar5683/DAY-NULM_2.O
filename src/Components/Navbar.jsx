import React from 'react';
import { Link } from "react-router-dom";
import "../CSS/Navbar.css"

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo22.jpg" width={380} alt='a'/>
      </div>

      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/">
              <a  className="navbar-link">Home</a>{" "}
            </Link>

          </li>
          <li>
            <Link to="/Contact">
              {" "}
              <a  className="navbar-link">Contact</a>
            </Link>
          </li>
          
         
          <li>
            <Link to="/About">
              <a  className="navbar-link">About</a>
            </Link>

          </li>
          <li>
            {" "}
            <Link to="https://nulm.gov.in/Auth/Login.aspx">
              <a href='https://nulm.gov.in/Auth/Login.aspx' className="navbar-link">Login</a>
            </Link>
          </li>
          <li>
          
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;