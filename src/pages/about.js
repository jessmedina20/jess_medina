import React from "react";
import "../stylesheet/about.css" 
import Navbar from "../Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const About = () => {
 return ( 
    <div className="main"> 
 <h1 className="title">This is a paragraph?</h1>  
 <p className="body">paragraph</p>
 </div>
 );
};

export default About;