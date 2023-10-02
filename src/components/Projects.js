import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import portfolio from "./assets/port.png";
import todo from "./assets/box.png";
import codeeditor from "./assets/code.png";
import netclone from "./assets/netclone.png";
import filesharing from "./assets/link.png";

const Projects = () => {
  const projects = [
    {
      imageSrc: portfolio,
      title: "Portfolio Website",
      overview:
        "A Portfolio Website having Skills,projects,contact and About section",
      githubLink: "https://github.com/Akshay2001001003/CVIP_Portfolio.git",
    },
    {
      imageSrc: todo,
      title: "Box-Office",
      overview: "A React.js app to search movies and shows",
      githubLink: "https://github.com/Akshay2001001003/New-Box-Office.git",
    },

    {
      imageSrc: codeeditor,
      title: " Code Editor",
      overview: "A real-time React.js code editor built using API",
      githubLink: "https://github.com/Akshay2001001003/CVIPcodeEditor",
    },

    {
      imageSrc: netclone,
      title: "Netflix Clone",
      overview: "A Netflix Clone (HTML,CSS,Js)",
      githubLink: "https://github.com/Akshay2001001003/CVIPNetflixFrontend.git",
    },

    {
      imageSrc: filesharing,
      title: "LinkShortner",
      overview: "A Full-Stack to shorten the link",
      githubLink: "https://github.com/Akshay2001001003/CVIP_LinkShortner.git",
    },
  ];

  return (
    <div className="main">
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
