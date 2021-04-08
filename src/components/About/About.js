import React from "react";
import BasicInfo from "./BasicInfo";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import "./index.css";

const About = () => {
  return (
    <div className='text-center'>
      <h4>Basic info</h4>
      <BasicInfo />
      <hr />
      <h4>About me</h4>
      <hr />
      <AboutMe />
      <hr />
      <h4>My skills</h4>
      <hr />
      <Skills />
      <hr />
    </div>
  );
};

export default About;
