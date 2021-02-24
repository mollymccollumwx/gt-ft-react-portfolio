import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Navbar/Footer/Footer";
import Project from "../../components/Navbar/Project/Project";

const Portfolio = (props) => {
  return (
    <div className="container-flex">
      <Navbar />
      
      <div className="title has-text-centered">
          <h1 className="title">Portfolio</h1>
          <h1 className="subtitle subtitle-blue">Here's a collection of my recent work.</h1>
        </div>
      <Project {...props} key={props.id} />
    
      <Footer/>
    </div>
  );
};

export default Portfolio;
