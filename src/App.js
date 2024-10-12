import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"; 
import Research from "./pages/research";
import About from "./pages/about";


const App = () => {
 return (
   <Router>
     <Navbar />
       <Routes> 
       <Route path="/" element={<About />} />
         <Route path="/research" element={<Research />} />
         {/* Define other routes that you need*/}
       </Routes>
   </Router>
 );
};

export default App;
