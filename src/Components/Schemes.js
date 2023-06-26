import React from "react";
import "../CSS/schemes.css";
import { Link } from "react-router-dom";


function Schemes(){
    return(
        <>
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
            <div className="bay">
               <Link to ='https://nulm.gov.in/PDF/NULM_Mission/NULM-SUH-Guidelines.pdf'> <button >Read More</button></Link> 
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
            <Link to ='https://nulm.gov.in/PDF/NULM_Mission/CBT-Guidelines.pdf'> <button >Read More</button></Link> 
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
            <Link to ='https://nulm.gov.in/PDF/NULM_Mission/ESTPCompildPDF_final.pdf'> <button >Read More</button></Link> 
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
            <Link to ='https://nulm.gov.in/PDF/NULM_Mission/NULM-SUSV-Guidelines.pdf'> <button >Read More</button></Link> 
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
            <Link to ='https://nulm.gov.in/PDF/NULM_Mission/ISP_Guidelines.pdf'> <button >Read More</button></Link> 
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
            <Link to ='https://nulm.gov.in/PDF/NULM_Mission/NULM-SMID_Guidelines.pdf'> <button >Read More</button></Link> 
            </div>
          </div>
        </div>
        
      </div>
        </>
    )
}
export default Schemes