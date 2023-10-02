import React from "react";
import "./About.css";
import pic from "./assets/self.jpeg";
import l from "./assets/l.png";
import i from "./assets/i.png";
import t from "./assets/t.png";
import g from "./assets/g.png";

// your pic, Intro, hobbies/interest, future goals, social media handles

const About = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="pic">
          <img src={pic} alt="" />
        </div>

        <h2>Hi, I am Akshay</h2>

        <div className="intro">
          I am a dedicated web developer in my final year of pursuing a B.Tech
          in Computer Science Engineering at Deenbandhu Chhotu Ram University of
          Science and Technology. Passionate about crafting functional and
          visually appealing websites, I thrive on translating innovative ideas
          into engaging user experiences. Eager to embark on professional
          endeavors in the same domain, I am actively seeking opportunities to
          contribute my skills and creativity to meaningful projects
        </div>

        <div className="social">
          <h2>Lets Connect :) </h2>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/akshay-kumar-522077201"
              target="_blank"
            >
              <img src={l} alt="" />
            </a>
            <a href="https://www.instagram.com/6979akshay" target="_blank">
              <img src={i} alt="" />
            </a>
            <a
              href=" https://twitter.com/Akshayk17151226?t=YlDh5dM9jq0N6J3bbgRMcQ&s=08"
              target="_blank"
            >
              <img src={t} alt="" />
            </a>
            <a href="https://github.com/Akshay2001001003" target="_blank">
              {" "}
              <img src={g} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
