import React from "react";
import BasicInfo from "./BasicInfo";
import AboutMe from "./AboutMe";
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
    </div>
  );
};

export default About;
