import React from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Contact() {
  return (
    <div>
      <Header label="Click me" />

      <div className="container">
        <div
          className="headline-center"
          style={{ marginBottom: "40px", marginTop: "60px" }}
        >
          <h2>For Administrative Contact</h2>
          <div className="line" />
        </div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="row news-v1">
            <div className="col-md-4" style={{ marginBottom: "40px" }}>
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="rahul.jpg"
                  width={400}
                  height={350}
                  alt=""
                />
                <h3>
                  <a>
                    Shri Rahul Kapoor
                    <br />
                    (Joint Secretary)
                  </a>
                </h3>
                <p>
                  Joint Secretary (NULM & PM SVANidhi) <br />
                  Ministry of Housing & UrbanAffairs,
                  <br />
                  R.No 340-C ,Nirman Bhawan, New Delhi – 110 011
                  <br />
                  Phone: 011-2306 2194
                  <br />
                  E-mail: jsupa-mhupa@gov.in{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "40px" }}>
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a>
                    Dr. Madhu Rani Teotia, IAS
                    <br />
                    (Directors )
                  </a>
                </h3>
                <p>
                  Director (NULM)
                  <br />
                  Ministry of Housing & Urban Affairs,
                  <br />
                  R.No 235-C, Nirman Bhawan, New Delhi-110 011
                  <br />
                  Phone: 011-2306 1979
                  <br />
                  E-mail: dir-nulm@gov.in{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a>
                    Ms. Shalini Pandey
                    <br />
                    (Directors )
                  </a>
                </h3>
                <p>
                  Director (NULM-II)
                  <br />
                  Ministry of Housing & Urban Affairs,
                  <br />
                  R.No 341-C ,Nirman Bhawan, New Delhi – 110 011
                  <br />
                  Phone: 011-2306 2798
                  <br />
                  E-mail: dupa-mhupa@gov.in{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="headline-center" style={{ marginBottom: "40px" }}>
          <h2>Under Secretaries</h2>
          <div className="line" />
        </div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="row news-v1">
            <div className="col-md-4" style={{ marginBottom: "40px" }}>
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a>Shri Madhukar Pandey</a>
                </h3>
                <p>
                  Under Secretary
                  <br />
                  Ministry of Housing & Urban Affairs,
                  <br />
                  R.No 201-B ,Nirman Bhawan,
                  <br />
                  New Delhi – 110 011 Phone: 011-2306 3503
                  <br />
                  E-mail: madhukar.pandey@nic.in{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "40px" }}>
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a>Shri Yogesh Kumar</a>
                </h3>
                <p>
                  Under Secretary
                  <br />
                  Ministry of Housing & Urban Affairs,
                  <br />
                  R.No 210-B ,Nirman Bhawan,
                  <br />
                  New Delhi – 110 011
                  <br />
                  Phone: 011-2306 1530
                  <br />
                  E-mail: yogesh.kumar@nic.in{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-v1-in">
                <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={400}
                  height={350}
                  alt="a"
                />
                <h3>
                  <a>Ms Meenakshi Bhardwaj</a>
                </h3>
                <p>
                  Under Secretary
                  <br />
                  Ministry of Housing & Urban Affairs,
                  <br />
                  R.No 204-C ,Nirman Bhawan,
                  <br />
                  New Delhi – 110 011
                  <br />
                  Phone: 011-2306 3630
                  <br />
                  E-mail: meenakshi.bhardwaj@ni c.in{" "}
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

export default Contact;
