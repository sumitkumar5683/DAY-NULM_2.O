
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Registation from "./Components/Registation";
import "./index"
import "./CSS/Footer.css";
import "./CSS/Header.css";
import "./CSS/Navbar.css";
import "./CSS/Login.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Registation" element={<Registation/>} />
       
       
      </Routes>
    </BrowserRouter>
  );
}


export default App;
