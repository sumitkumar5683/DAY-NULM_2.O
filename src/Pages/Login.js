import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../CSS/Login.css"

function Login() {
  return (
    <div>
      <Header label="Click me" />
      <Navbar label="Click me" />

      {/* login page */}
      <div className="background-c">
        <div className="background-a">
          <div className="shape" />
          <div className="shape" />
        </div>

        <form5>
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/Signup">
            <button>Sign Up</button>
          </Link>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </form5>
      </div>
      <Footer label="Click me" />
    </div>
  );
}

export default Login;
