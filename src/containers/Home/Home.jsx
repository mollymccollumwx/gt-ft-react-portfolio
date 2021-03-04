import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Image from "../../Assets/images/dev-focus.svg";
import "./Home.css";
import Typed from "react-typed";
import Footer from "../../components/Navbar/Footer/Footer";

const Home = () => {
  return (
    <>
    
      <div className="container-flex">
      <Navbar />
      <div className="centering-div mt-5">
        <div className="columns is-vcentered is-centered mt-5">
          <div className="column is-5 has-text-centered mt-5">
            <h1 className="title mt-5">
              <strong>
                <span className="title-colors">Hi.</span> I'm Molly
                <span className="title-colors">.</span>
              </strong>
            </h1>
            <h1 className="subtitle">I'm a full-stack developer.</h1>

            <Typed
              className="typed-text"
              strings={[
                "Javascript",
                "React.js",
                "mongoDB",
                "Express",
                "MySQL",
                "Node.js",
                "HTML5",
                "CSS3",
                "Sass"
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
            <div className="columns mt-4">
              <div className="column">
              <a className="button is-dark is-medium mr-2" href="#/portfolio">My Portfolio</a>
                <a className="button is-info is-medium ml-2" href="#/About">
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="column is-7 mr-3">
            <img id="home-image " src={Image}></img>
          </div>
        </div>
       
      </div>
      <Footer /> 
      </div>
    </>
  );
};

export default Home;
