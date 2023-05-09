import React from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div>
      <Header label="Click me" />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="1.jpg" className="d-block w-100" alt="a" />
          </div>
          <div className="carousel-item">
            <img src="2.png" className="d-block w-100" alt="b" />
          </div>
          <div className="carousel-item">
            <img src="3.jpg" className="d-block w-100" alt="c" />
          </div>
          <div className="carousel-item">
            <img src="4.png" className="d-block w-100" alt="d" />
          </div>
          <div className="carousel-item">
            <img src="5.png" className="d-block w-100" alt="e" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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
              To reduce poverty and vulnerability of the urban poor households
              by enabling them to access gainful self employment and skilled
              wage employment opportunities resulting in an appreciable
              improvement in their livelihoods on a sustainable basis, through
              building strong grassroots level institutions of the poor.{" "}
            </p>
            <p style={{ textAlign: "justify", fontSize: "14px" }}>
              The mission would aim at providing shelters equipped with
              essential services to the urban homeless in a phased manner.{" "}
            </p>
            <p style={{ textAlign: "justify", fontSize: "14px" }}>
              {" "}
              In addition the mission would also address livelihood concerns of
              the urban street vendors by facilitating access to suitable spaces
              institutional credit social security and skills to the urban
              street vendors for accessing emerging market opportunities.
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
                marginLeft: "14px",
              }}
              src="8.jpg_large"
              width={600}
              height={620}
              alt="a"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="headline-center" style={{ marginBottom: "40px" }}>
          <h2>Thematic Sessions:</h2>
          <div className="line" />
        </div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="row news-v1">
            <div className="col-md-4" style={{ marginBottom: "40px" }}>
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="04.jpg"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a>Community-led interventions in Slums</a>
                </h3>
                <p>
                  DAY-NULM in its present structure covers urban poor in general
                  and does not have any geographic targeting, especially
                  communities living in slums. However, it has been brought to
                  the notice that community led interventions in slums, which
                  are the hotbeds of poverty, would be an effective mechanism.
                  An effective mechanism to encourage Jan Bhagidari in slums
                  would empower the community by involving them in their
                  development process, beginning from problem identification to
                  decision making.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "40px" }}>
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="09.jpg"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a> Support to Urban Street Vendors</a>
                </h3>
                <p>
                  Development of street vendors their market/vending
                  zones/informal sector markets in accordance with Town Vending
                  Plans with infrastructure/civic facilities such as paving,
                  water supply, solid waste disposal facility, lighting, storage
                  space, parking facilities etc. are the properties set by the
                  Mission. It was expected that the states and cities will
                  conduct a periodic socio-economic survey of street vendors,
                  register street vendors and will issue Certificate of Vending
                  (CoV) and Identity cards to all identified street vendors.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="06.webp"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a>Shelters Home for Urban Homeless</a>
                </h3>
                <p>
                  Shelters run under DAY-NULM should act as a space for
                  convergence and provisions of various entitlements of social
                  security, food, education, and health care systems for
                  homeless in urban areas. All homeless persons, in shelters,
                  should be given priority under various schemes, and Government
                  programmes. In this parlance, the session would analyse the
                  current status of the existing permanent shelters and identify
                  key challenges in achieving their desired outcomes.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer label="Click me" />
    </div>
  );
}

export default Home;
