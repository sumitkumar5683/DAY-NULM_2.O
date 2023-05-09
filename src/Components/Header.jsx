import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return<div className="image-container">
    <div className="image-container1">
    <img src="images.png" width={10} height={100} style={{ width: "20%" }} />
    <img src="amrit.png" width={200} height={100} style={{ width: "16%" }} />
    <img src="moglog.png" width={20} height={150} style={{ width: "28%" }} />
   
    <img src="G20.png" width={200} height={90} style={{ width: "16%" }} />
    <img src="mt.jpg" width={200} height={150} style={{ width: "20%" }} />
    
</div>
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
                <Link to="/Registation">
                  {" "}
                  <a className="nav-link active" aria-current="page">
                    Registation
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
</div>

;
}

export default Header;