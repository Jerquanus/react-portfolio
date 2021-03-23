import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
const location = useLocation();
  return (
    <div class="nav">

      <a href="#home">Home</a>

      <a href="#about">About Me</a>

      <a href="#projects">Projects</a>

      <a href="#resume">Resume</a>

      <a href="#contact">Contact Me</a>

    </div>  
  );
}
export default Navbar;