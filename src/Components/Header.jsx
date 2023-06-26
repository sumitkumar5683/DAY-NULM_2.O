import React from "react";
import "../CSS/Header.css"

function Header() {
  return (
    <div className="headeron">
      <div className="logoone">
        <img src="flag.webp" width={30} height={20} alt="a"  />
      </div>
      <div>
        <h4>GOVERNMENT OF INDIA</h4>
      </div>
    </div>
  );
}

export default Header;
