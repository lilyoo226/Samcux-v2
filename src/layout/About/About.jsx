import React from "react";
import "./About.css";
import Left from '../../components/Left/Left'
import Header from '../../components/Header/Header'
import AboutMain from '../../components/About/AboutMain'
import Contact from '../../components/Contact/Contact'
import Right from '../../components/Right/Right'

const About = () => {
  return (
    <div className="about-layout">
      <Left />
      <Header headerTitle="About Me" des="My, Myself & I" />
      <AboutMain />
      <Contact/>
      <Right />
    </div>
  );
};

export default About;
