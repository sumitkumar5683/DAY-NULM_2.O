import React from 'react';

import "../CSS/Footer.css"


function Footer(){
    return<div className="image-container">
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

;
}

export default Footer;