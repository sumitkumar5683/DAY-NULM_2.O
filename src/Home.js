import React from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./CSS/Home.css";


function Home() {
  return (
    <div>
      <Header label="Click me" />
      <Navbar label="Click me" />
      
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
      {/* static */}
      <staticbar className="staticbar">
      <div className="logoonee">
    <img src="statics.jpg" />
    
  </div>
  <id className="headeronone">
    <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
  </id>
  <id className="headeronone">
    <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
  </id>
  <id className="headeronone">
    <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
  </id>
  <id className="headeronone">
    <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
  </id>
  <id className="headeronone">
    <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
  </id>
  <id className="headeronone">
    <a>14.03 + Lakh <br></br>SUBMISSIONS IN TASKS</a>
  </id>
    </staticbar>
    {/* statics */}
    <div className="welcome">
        <div className="row section1">
          <div
            className="col-md-6"
            style={{ marginBottom: "30px", marginTop: "30px" }}
          >
            <h2 className="title-v2">
              {" "}
              <span style={{ color: "#ea5114" ,fontSize:"30px" }}> Deendayal Antyodaya Yojana-National Urban Livelihoods Mission DAY-NULM <br></br><br></br></span>
            </h2>
            <p className="title-v2" >
              To reduce poverty and vulnerability of the urban poor households
              by enabling them to access gainful self employment and skilled
              wage employment opportunities resulting in an appreciable
              improvement in their livelihoods on a sustainable basis, through
              building strong grassroots level institutions of the poor.
            </p>
            <p className="title-v2">
              The mission would aim at providing shelters equipped with
              essential services to the urban homeless in a phased manner.
            </p>
            <p className="title-v2">
            
              In addition the mission would also address livelihood concerns of
              the urban street vendors by facilitating access to suitable spaces
              institutional credit social security and skills to the urban
              street vendors for accessing emerging market opportunities.
            </p>
            <br />
            
          </div>
          <div className="col-md-6 overflow-h">
            <img
              style={{
                borderRadius: "5px",
                marginTop: "30px",
                marginLeft: "10px",
                
              }}
              src="8.jpg_large"
              width={500}
              height={520}
              alt="a"
            />
          </div>
        </div>
      </div>
       {/* statics */}
       <div className="all">
        <div className="logoonee">
          <img src="progress.jpg" height={80} />
        </div>

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
            <a>14.03 + Lakh SUBMISSIONS IN TASKS</a>
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
            <a>14.03 + Lakh SUBMISSIONS IN TASKS</a>
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
            <a>14.03 + Lakh SUBMISSIONS IN TASKS</a>
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
            <a>14.03 + Lakh SUBMISSIONS IN TASKS</a>
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
            <a>14.03 + Lakh SUBMISSIONS IN TASKS</a>
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

            <div className="mask half">
              <div className="fill-3" />
            </div>
            <div className="inside-circle"> 75% </div>
          </div>
          <id className="headeronee">
            <a>14.03 + Lakh SUBMISSIONS IN TASKS</a>
          </id>
        </div>
      </div>
      {/* statics  */}
      {/* schemes */}
      <div className="containerr">
        <div className="headerr">
          <h1>Schemes</h1>
        </div>
        <div className="products">
          <div className="product">
            <div className="image">
              <img src="suh.png" alt="" />
            </div>
            <div className="namePrice">
              <h3>SHU</h3>
              {/* <span>$ 15.99</span> */}
            </div>
            <p>Scheme of Shelters for Urban Homeless..</p>
            {/* <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div> */}
            <div className="bay">
              <button> Read More </button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="CBT.png" alt="" />
            </div>
            <div className="namePrice">
              <h3>CB&T</h3>
              {/* <span>$ 120.99</span> */}
            </div>
            <p>Capacity Building and <br></br>Training.</p>
            {/* <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div> */}
            <div className="bay">
              <button> Read More </button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="ESP.png" alt="" />
            </div>
            <div className="namePrice">
              <h3>EST&P</h3>
              {/* <span>$ 150.99</span> */}
            </div>
            <p>Employment Through Skill and Placement.</p>
            {/* <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div> */}
            <div className="bay">
              <button>  Read More  </button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="SUSV.png" alt="" />
            </div>
            <div className="namePrice">
              <h3>SUSV</h3>
              {/* <span>$ 20.99</span> */}
            </div>
            <p>Support to Urban <br></br>Street Vendors.</p>
            {/* <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div> */}
            <div className="bay">
              <button>  Read More  </button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="ISP.png" alt="" />
            </div>
            <div className="namePrice">
              <h3>I&SP</h3>
              {/* <span>$ 20.99</span> */}
            </div>
            <p>Innovative & <br></br>Special Projects.</p>
            {/* <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div> */}
            <div className="bay">
              <button>  Read More </button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="SMID.png" alt="" />
            </div>
            <div className="namePrice">
              <h3>SM&ID</h3>
              {/* <span>$ 20.99</span> */}
            </div>
            <p>Social Mobilisation and <br></br>Institution Development.</p>
            <div className="stars">
              
            </div><div className="bay">
              <button> Read More </button>
            </div>
          </div>
        </div>
        
      </div>
     
      {/* <schemes className="schemes">
      
        <div className="schemesone">
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
      
    </schemes> */}

{/* <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile1.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile2.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile3.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile4.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile5.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile6.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile7.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile8.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay" />
                <div className="card-image">
                  <img src="images/profile9.jpg" alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <button className="button">View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-navBtn" />
        <div className="swiper-button-prev swiper-navBtn" />
        <div className="swiper-pagination" />
      </div> */}

     

      {/* schemes */}
      

      
      <Footer label="Click me" />
    </div>
  );
}

export default Home;
