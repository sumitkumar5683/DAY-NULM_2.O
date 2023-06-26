import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../CSS/contact.css"


function Contact() {
  return (
    <div className="contactpage">

      <Header />
      <Navbar/>
      <div className="contact1">
        <div className="contactheading">
          <h2>For Administrative Contact</h2>
        </div>
        <div className="cardrow">
          <div className="card">
            <div className="cardimg">
            <img
                  style={{ borderRadius: "40px" }}
                  src="rahul.jpg"
                  width={300}
                  height={290}
                  alt=""
            />
            </div>
            <div className="carddata">
            <h1>
                  <h2>
                    Shri Rahul Kapoor
                    <br />
                    (Joint Secretary)
                  </h2>
                </h1>
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
            <div className="card">
            <div className="cardimg">
            <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={300}
                  height={290}
                  alt="a"
                />
            </div>
            <div className="carddata">
            <h1>
                  <h2>
                    Dr. Madhu Rani Teotia, IAS
                    <br />
                    (Directors )
                  </h2>
                </h1>
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
          <div className="card">
            <div className="cardimg">
            <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={300}
                  height={290}
                  alt=""
            />
            </div>
            <div className="carddata">
            <h1>
                  <h2>
                    Ms. Shalini Pandey
                    <br />
                    (Directors )
                  </h2>
                </h1>
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
      

      <div className="contact1">
        <div className="contactheading">
          <h2>Under Secretaries</h2>
        </div>
        <div className="cardrow">
          <div className="card">
            <div className="cardimg">
            <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={300}
                  height={290}
                  alt=""
            />
            </div>
            <div className="carddata">
            <h1>
                  <h2>Shri Madhukar Pandey</h2>
                </h1>
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
            <div className="card">
            <div className="cardimg">
            <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={300}
                  height={290}
                  alt=""
            />
            </div>
            <div className="carddata">
            <h1>
                  <h2>Shri Yogesh Kumar</h2>
                </h1>
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
          <div className="card">
            <div className="cardimg">
            <img
                  style={{ borderRadius: "40px" }}
                  src="blank.webp"
                  width={300}
                  height={290}
                  alt=""
            />
            </div>
            <div className="carddata">
            <h1>
                  <h2>Ms Meenakshi Bhardwaj</h2>
                </h1>
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
      
      <Footer label="Click me" />
    </div>

     
  );
}

export default Contact;
