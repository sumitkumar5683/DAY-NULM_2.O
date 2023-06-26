import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../CSS/Home.css";
import "../CSS/staticbar.css"
import Schemes from "../Components/Schemes";
import Mission from "../Components/mission";
import Carousel from "../Components/Carousel";


function Home() {
  return (
    <div>
      <Header/>
      <Navbar label="Click me" />
      <Carousel />

      <staticbar className="staticbar">
        <div className="logoonee">
          <h1>Statistics</h1>
        </div>
        <div className="divS">
        <id className="headeronone">
          <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
        </id>
        <id className="headeronone">
          <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
        </id>
        </div>
        <div className="divS">
        <id className="headeronone">
          <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
        </id>
        <id className="headeronone">
          <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
        </id>
        </div>
        
      </staticbar>
      
      <Mission />

      <div className="all">
        <div className="logoonee">
        <h1>Progress</h1>
        </div>
        <div className="divS">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-1">
              <div className="fill-1" />
            </div>
            <div className="mask half">
              <div className="fill-1" />
            </div>
            <div className="inside-circle"> 85% </div>
          </div>
          <id className="headeronee">
            <a>13 Lakh+ Skilled Trained</a>
          </id>
        </div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-2">
              <div className="fill-2" />
            </div>
            <div className="mask half">
              <div className="fill-2" />
            </div>
            <div className="inside-circle"> 65% </div>
          </div>
          <id className="headeronee">
            <a>Financial Support to 7.8 Lakh</a>
          </id>
        </div>
        </div>
        <div className="divS">

        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-3">
              <div className="fill-3" />
            </div>
            <div className="mask half">
              <div className="fill-3" />
            </div>
            <div className="inside-circle"> 75% </div>
          </div>
          <id className="headeronee">
            <a>2457 Shelters for Urban Homeless</a>
          </id>
        </div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-3">
              <div className="fill-3" />
            </div>
            <div className="mask half">
              <div className="fill-3" />
            </div>
            <div className="inside-circle"> 75% </div>
          </div>
          <id className="headeronee">
            <a>28 Lakh+ Street vendor got Id Cards</a>
          </id>
        </div>
        </div>
       
      </div>

      <Schemes />
      <Footer label="Click me" />
      
    </div>
  );
}

export default Home;
