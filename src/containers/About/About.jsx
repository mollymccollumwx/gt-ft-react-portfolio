import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Image from "../../Assets/images/code.svg"
import "./About.css";
import Footer from "../../components/Navbar/Footer/Footer";
import Resume from "../../Assets/images/MollyMcCollum.pdf";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container-flex has-text-centered">
        <div className="columns is-centered header">
          <div className="column is-5 has-text-centered">
            <div className="title has-text-centered">
              <h1 className="title">Molly McCollum</h1>
              <h1 className="subtitle subtitle-blue">Junior Full-Stack Developer</h1>
            </div>
            <i className="fab fa-react fa-3x p-5 icons"></i>
            <i className="fab fa-js-square fa-3x p-5 icons"></i>
            <i class="fab fa-node fa-3x p-5 icons"></i>
            <i className="fab fa-html5 fa-3x p-5 icons"></i>
            <i className="fab fa-css3 fa-3x p-5 icons"></i>
            <i className="fas fa-database fa-3x p-5 icons"></i>
          </div>
          
        </div>

        <div className="columns is-centered">
          <div className="column has-text-centered is-6">
            <p>
              I'm a full-stack developer leveraging both a strong science and
              communications background. I am currently enrolled at GA Tech's
              Full-Stack coding bootcamp and I'm seeking my first job in
              front-end or full-stack development. Prior to a career in tech, I
              worked as a broadcast meteorologist for 5 years in the Great
              Plains and in my hometown of Atlanta. I have a B.S. in Atmospheric
              Sciences from the University of Georgia.
            </p>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column">
            <a className="button is-dark is-medium mr-2" href="#/portfolio">My Portfolio</a>
            <a className="button is-info is-medium ml-2" href={Resume}>
              Resume
            </a>
          </div>
        </div>

        <img id="code-image" src={Image}></img>
      </div>
      
      <Footer />
    </>
  );
};

export default About;
