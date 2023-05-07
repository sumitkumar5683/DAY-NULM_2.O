import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
                  <a className="nav-link active" aria-current="page">
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
                <Link to="Contact">
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
                  <a className="nav-link active" aria-current="page">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
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
                  <br />
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
                <a href="#">(STEP)Skill Training and Employment Programme </a><br />
                <a href="#">(EST&P)Employment through Skill Training and Placement  </a><br />
                <a href="#">(SM&ID)Social Mobilization and Institution Development </a>
                </p>
              </div>

              <div className="col-md-3 md-margin-bottom-40">
              <h2>Visit Us</h2>
                
                <p>
                <a href="#">DAY-NULM</a> <br />
                <a href="#">PM-SVANIDH</a><br />
                
                 
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

export default Home;
