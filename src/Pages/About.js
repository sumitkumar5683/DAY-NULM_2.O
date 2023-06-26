import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../CSS/Home.css"

function About() {
  return (
    <div>
      <Header label="Click me" />
      <Navbar label="Click me" />
     

      <div className="container content-md welcomeSection">
        <div className="row section1">
          <div
            className="col-md-6"
            style={{ marginBottom: "30px", marginTop: "30px" }}
          >
            <h2 className="title-v2">
              Deendayal Antyodaya Yojana-National Urban Livelihoods Mission{" "}
              <span style={{ color: "#ea5114" }}> DAY-NULM </span>
            </h2>
            <p style={{ textAlign: "justify", fontSize: "14px" }}>
              Deendayal Antyodaya Yojana-National Urban Livelihoods Mission. It
              is a flagship program of the Ministry of Housing and Urban
              Affairs, Government of India, aimed at reducing poverty and
              vulnerability of the urban poor households by enabling them to
              access gainful self-employment and skilled wage employment
              opportunities.{" "}
            </p>
            <p style={{ textAlign: "justify", fontSize: "14px" }}>
              The program seeks to enhance the livelihood security of the urban
              poor by providing them with self-employment opportunities in the
              form of skill training, credit facilities, and market linkages. It
              also seeks to ensure universal access to social security
              entitlements and services like health, education, and housing.{" "}
            </p>
            <p style={{ textAlign: "justify", fontSize: "14px" }}>
              {" "}
              DAY-NULM was launched in 2014 as a merger of two earlier schemes,
              the Swarna Jayanti Shahari Rozgar Yojana and the National Urban
              Livelihoods Mission. The program operates across all urban areas
              in India and is implemented through State and City Livelihoods
              Missions.
            </p>{" "}
            <br />
            <a href="about.html" className="btn-u btn-brd btn-brd-hover">
              Read More
            </a>
          </div>
          <div className="col-md-6 overflow-h">
            <img
              style={{
                borderRadius: "5px",
                marginTop: "30px",
                marginLeft: "70px",
              }}
              src="nulm.jpg"
              width={600}
              height={620}
              alt="a"
            />
          </div>
        </div>
      </div>
      <Footer label="Click me" />
    </div>
  );
}

export default About;
