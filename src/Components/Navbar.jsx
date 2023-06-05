import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
  return (
  <header className="header">
  <div className="logo">
    <img src="logo22.jpg" />
  </div>

  <nav className="navbar">
    <ul className="navbar-list">
      <li>
        <Link to="/">
          <a className="navbar-link">Home</a>{" "}
        </Link>
       
      </li>
      <li>
        <Link to="/Contact">
          {" "}
          <a className="navbar-link">Contact</a>
        </Link>
        <i class="fa-solid fa-circle-chevron-down fa-2xl"></i>
      </li>
      <li>
        {" "}
        <Link to="/Login">
          <a className="navbar-link">Login</a>
        </Link>
        <i class="fa-solid fa-circle-chevron-down fa-2xl"></i>
      </li>
      <li>
        {" "}
        <Link to="/Registation">
          <a className="navbar-link">Registation</a>
        </Link>
        <i class="fa-solid fa-circle-chevron-down fa-2xl"></i>
      </li>
      <li>
        <Link to="/About">
          <a className="navbar-link">About</a>
        </Link>
       
        
   
      </li>
      <li>
        <Link to="/About">
          {/* <a className="navbar-link">About</a> */}
          <div className="iconone">
    <img src="user.png" height={40} />
  </div>
        </Link>
      
        
   
      </li>
    </ul>
  </nav>
</header>
);
}
export default Navbar;