import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


function Registaration() {
  return (
    <div>
      <Header label="Click me" />
      <Navbar label="Click me" />

      
      
      {/* registation
      <div>
        <h1>Student Registaration Form</h1>
        <div className="container02">
          <div className="row">
            <div className="col-10">
              <label htmlFor="fname">First Name:</label>
            </div>
            <div className="col-90">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="lname">Last Name:</label>
            </div>
            <div className="col-90">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="col-90">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="it should contain @,."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="mobile">Mobile:</label>
            </div>
            <div className="col-90">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="only 10 digits are allowed"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="gender" required>
                Gender:
              </label>
            </div>
            <div className="col-90">
              <input type="radio" id="male" name="gender" defaultValue="male" />
              Male
              <input
                type="radio"
                id="female"
                name="gender"
                defaultValue="female"
              />
              Female
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="dob">Date Of Birth:</label>
            </div>
            <div className="col-90">
              <input type="Date" id="dob" name="dob" />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="address">Address:</label>
            </div>
            <div className="col-90">
              <textarea
                name="address"
                id="address"
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="city">City:</label>
            </div>
            <div className="col-90">
              <input type="text" id="city" name="city" maxLength={10} />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="pincode">Area PIN:</label>
            </div>
            <div className="col-90">
              <input type="number" id="pin" name="pin" maxLength={6} />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="state">State:</label>
            </div>
            <div className="col-90">
              <input type="text" id="state" name="state" />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="qualification" required>
                Qualification:
              </label>
            </div>
            <div className="col-90">
              <select name="qualification" id="qualification">
                <option value=" ">Select Qualification:</option>
                <option value="Graduation">Graduation</option>
                <option value="BTech.">BTech.</option>
                <option value="MTech.">MTech.</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="specialization">Specialization:</label>
            </div>
            <div className="col-90">
              <input
                type="checkbox"
                className="specialization"
                id="cs"
                name="specialization[]"
                defaultValue="Computer Science"
              />
              Computer Science
              <br />
              <input
                type="checkbox"
                className="specialization"
                id="it"
                name="specialization[]"
                defaultValue="Information Technology"
              />
              Information Technology
              <br />
              <input
                type="checkbox"
                className="specialization"
                id="ca"
                name="specialization[]"
                defaultValue="Computer Architecture"
              />
              Computer Architecture
              <br />
              <input
                type="checkbox"
                className="specialization"
                id="tc"
                name="specialization[]"
                defaultValue="Tele Communication"
              />
              Tele Communication
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="col-90">
              <input
                type="password"
                id="password"
                name="password"
                maxLength={8}
              />
            </div>
          </div>
          <div className="row">
            <input
              type="submit"
              defaultValue="Registered"
              onclick="SaveStudentDetails()"
            />
          </div>
        </div>
      </div> */}
      <Footer label="Click me" />
    </div>
  );
}

export default Registaration;
