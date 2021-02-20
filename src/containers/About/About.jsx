import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePic from "../../Assets/images/Molly_Profile.png";
import "./About.css";
import Footer from "../../components/Navbar/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container-flex">
        <div className="title has-text-centered">
          <h1 className="title">Molly McCollum</h1>
        </div>
        <div className="columns is-gapless is-centered mt-5">
          <div className="column is-2">
            <figure className="image is">
              <img className="profile-pic"src={ProfilePic} />
            </figure>
          </div>
          <div className="column is-6 mt-5">
            <p>
              I'm a full-stack developer leveraging both a strong science and
              communications background. I am currently enrolled at GA Tech's
              Full-Stack coding bootcamp and I'm seeking my first job in
              front-end or full-stack development. Prior to a career in tech, I
              worked as a broadcast meteorologist for 5 years in the Great
              Plains and in my hometown of Atlanta and still occasionally
              freelance on TV.
            </p>
            <i className="fab fa-react fa-3x p-5"></i>
          <i className="fab fa-js-square fa-3x p-5"></i>
          <i class="fab fa-node fa-3x p-5"></i>
          <i className="fab fa-html5 fa-3x p-5"></i>
          <i className="fab fa-css3 fa-3x p-5"></i>
          <i className="fas fa-database fa-3x p-5"></i>
          </div>
        </div>
        <h1>resume goes here?</h1>
        {/* <embed
          src="./assets/images/Molly McCollum - Resume(1).pdf"
          width="800px"
          height="2100px"
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default About;
