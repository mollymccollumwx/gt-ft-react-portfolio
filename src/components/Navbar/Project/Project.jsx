import React, { useState, useEffect } from "react";
import dogMeetDog from "../../../Assets/images/DogMeetDog.png";
import Box from "../../../Assets/images/boxapp.png";
import Directory from "../../../Assets/images/homepage.png";
import Burger from "../../../Assets/images/buger-app.png";
import Weather from "../../../Assets/images/Final.png";
import Team from "../../../Assets/images/team-generator-html.png";
import Roam from "../../../Assets/images/landing-page.png";
import "./Project.css";

const Project = (props) => {
  const [projects, setProject] = useState([
    {
      name: "Roam",
      description:
        "An full-stack application where friends can plan and budget vacations together. This website was built using the MERN stack as well as other technologies like Sass, Chart.js, bcrypt, json web tokens, and Bulma.",
      url: "https://www.roam-together.com/",
      github: "https://github.com/mollymccollumwx/roam",
      image: Roam,
      id: "0",
    },

    {
      name: "Dog Meet Dog",
      description:
        "An full-stack application where dog owners can connect with other dog owners to find fur-ever friends for their dogs. This app was built using primarily Handlebars and server-side routing.",
      url: "https://gentle-sea-84823.herokuapp.com/",
      github: "https://github.com/mollymccollumwx/dog-meet-dog",
      image: dogMeetDog,
      id: "1",
    },
    {
      name: "What's in the Box",
      description:
        "An application designed to make the process of moving easier. This project is mostly a front-end application that utilizes multiple APIs and client-side storage.",
      url: "https://mollymccollumwx.github.io/whats-in-the-box/",
      github: "https://github.com/mollymccollumwx/whats-in-the-box",
      image: Box,
      id: "2",
    },
    {
      name: "React Employee Directory ",
      description:
        "This application is an employee directory built with React using class components. The user has the ability to sort by name either using the search bar or by clicking on the carrot in the name column.",
      url:
        "https://github.com/mollymccollumwx/react-employee-directory/tree/gh-pages",
      github:
        "https://github.com/mollymccollumwx/react-employee-directory/tree/main/employee-directory",
      image: Directory,
      id: "3",
    },
    {
      name: "Weather Dashboard ",
      description:
        "An application designed to obtain the current and 5 day weather forecast for an city using the Open Weather API. Weather Dashboard uses jQuery and local storage.",
      url: "https://mollymccollumwx.github.io/weather-dashboard/",
      github: "https://github.com/mollymccollumwx/weather-dashboard",
      image: Weather,
      id: "4",
    },
    {
      name: "Team Profile Generator",
      description:
        "Node CLI that takes in information about employees and generates an HTML webpage that displays the user information.",
      url: "https://github.com/mollymccollumwx/team-profile-generator",
      github: "https://github.com/mollymccollumwx/team-profile-generator",
      image: Team,
      id: "5",
    },

    {
      name: "Burger Logger",
      description:
        "Burger Bonanza is a full-stack application created with MySQL, Node, Express, Handlebars, and a custom ORM. ",
      url: "https://dry-shelf-29871.herokuapp.com/",
      github: "https://github.com/mollymccollumwx/burger-app",
      image: Burger,
      id: "6",
    },
  ]);
  return (
    <>
      <div className="columns is-multiline is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd mt-6">
        {projects.map((project) => (
          <div className="column is-12">
            <div className="container">
              <div className="columns">
                <div className="column is-8">
                  <img src={project.image} alt="" />
                </div>
                <div className="column is-4">
                  <h1 className="title is-size-3 mb-0">{project.name}</h1>
                  <div className="columns mb-0">
                    <div className="column is-4 mb-0">
                      <hr className="mb-0 blue-line" />
                    </div>
                  </div>
                  <p className="mt-0 mb-3 pr-6">{project.description}</p>
                  <a
                    className="button is-dark is-medium mr-2"
                    href={project.url}
                  >
                    Application
                  </a>
                  <a
                    className="button is-info is-medium ml-2"
                    href={project.github}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <hr className="main-hr" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
