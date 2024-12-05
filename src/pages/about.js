import React from "react"; 
import "../stylesheet/about.css" 
import Navbar from "../Navbar/Navbar"; 
import myImage from "../extras/IMG_3626.JPG"; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const About = () => {
 return ( 
    <div className="main">
    {/* Centered Title */}
    <h1 className="title">About me</h1>

    {/* Image and text section */}
    <div className="content">
 <img src={myImage} className="image"/> 
 <div className="body">
          <h2>Your Text Title</h2>
          <p>
            This is some text that appears next to the image. You can add more
            details or a description here.
          </p>
        </div>
      </div>
    </div>
 );
};

export default About;