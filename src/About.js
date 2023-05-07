import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="image-container">
      <img src="images.png" width={90} height={90} style={{ width: "20%" }} />
      <img src="amrit.png" width={200} height={130} style={{ width: "20%" }} />
      <img src="moglog.png" width={20} height={130} style={{ width: "20%" }} />
      <img src="mt.jpg" width={200} height={150} style={{ width: "20%" }} />
      <img
        src="clean-india.png"
        width={10}
        height={90}
        style={{ width: "20%" }}
      />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href=".."></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=""></a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Mission Document
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Component Guidline
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      User Manual
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Office Memorandum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SPARK
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bank
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shelters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Others
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Citizrn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Media
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      PM SVANidhi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Component Guidline
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Contact">
                  {" "}
                  <a className="nav-link active" aria-current="page">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login">
                  {" "}
                  <a className="nav-link active" aria-current="page">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About">
                  {" "}
                  <a className="nav-link active" aria-current="page">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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

      <div className="footer-v1">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 md-margin-bottom-40">
                <a href="index.html">
                  <img
                    id="logo-footer"
                    className="footer-logo"
                    src="nic-log.png"
                    width={270}
                    height={70}
                    alt="Logo"
                  />
                </a>
                <p>
                  Contents of the Site are Owned, <br />
                  Maintained by <br />
                  Ministry of Housing and Urban Affairs. <br />
                  Maintained by NIC, GOI.
                </p>
              </div>

              <div className="col-md-3 md-margin-bottom-40">
                <h2>Support</h2>

                <p>
                  <a href="#">(SEP)Self-Employment Programme </a> <br />
                  <a href="#">(STEP)Skill Training and Employment Programme </a>
                  <br />
                  <a href="#">
                    (EST&P)Employment through Skill Training and Placement{" "}
                  </a>
                  <br />
                  <a href="#">
                    (SM&ID)Social Mobilization and Institution Development{" "}
                  </a>
                </p>
              </div>

              <div className="col-md-3 md-margin-bottom-40">
                <h2>Visit Us</h2>

                <p>
                  <a href="#">DAY-NULM</a> <br />
                  <a href="#">PM-SVANIDH</a>
                  <br />
                </p>
              </div>

              <div
                className="col-md-3 map-img"
                style={{ marginBottom: "40px" }}
              >
                <div className="headline">
                  <h2>Contact Us</h2>
                </div>
                <address className="md-margin-bottom-40">
                  DAY-NULM 2.O <br />
                  Additional Secretary (NULM) <br />
                  Ministry of Housing & Urban Affairs,
                  <br /> R.No 114-C ,Nirman Bhawan, New Delhi – 110 011. <br />
                  Phone: 011-23061665 <br />
                  Email: daynulm@gmail.com
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  2014 © All Rights Reserved.
                  <a href="privacy.html">Privacy Policy</a> |{" "}
                  <a href="...">Terms of Service</a>
                </p>
              </div>

              {/* Social Links */}
              <div className="col-md-6">
                <ul className="footer-socials list-inline">
                  <a
                    href="https://www.facebook.com/NULMMoHUA"
                    className="tooltips"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Facebook"
                  >
                    <i className="fa fa-facebook" />
                  </a>

                  <a
                    href="http://www.skype.com"
                    className="tooltips"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Skype"
                  >
                    <i className="fa fa-skype" />
                  </a>

                  <a
                    href="https://nulm.gov.in/"
                    className="tooltips"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Google Plus"
                  >
                    <i className="fa fa-google-plus" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/daynulm/"
                    className="tooltips"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Linkedin"
                  >
                    <i className="fa fa-linkedin" />
                  </a>

                  <a
                    href="http://www.Pinterest.com"
                    className="tooltips"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Pinterest"
                  >
                    <i className="fa fa-pinterest" />
                  </a>

                  <a
                    href="https://twitter.com/NULM_MoHUA"
                    className="tooltips"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Twitter"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </ul>
              </div>
              {/* End Social Links */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
