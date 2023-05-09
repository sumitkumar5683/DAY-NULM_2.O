import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Registation from "./Registation";


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
