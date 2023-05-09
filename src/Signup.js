import React from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Signup() {
  return (
    <div>
      <Header label="Click me" />
      <div className="background-b">
        <div className="background-a">
          <div className="shape" />
          <div className="shape" />
        </div>

        <form>
          <h3>Sign UP Here</h3>
          <label htmlFor="username">Full Name</label>
          <input type="text" placeholder=" Name" id="username" />
          <label htmlFor="username">Email or Phone</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password"> Enter Password</label>
          <input type="password" placeholder="Password" id="password" />
          <label htmlFor="password">Re Enter Password</label>
          <input type="password" placeholder="Password" id="password" />

          <Link to="/Signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </form>
      </div>
      <Footer label="Click me" />
    </div>
  );
}

export default Signup;
