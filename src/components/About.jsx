import React, { Component, useEffect } from "react";
import "../styles/about.css";
import about_img from "../assets/images/about-bg.png";

function About() {
  return (
    <div className="about-layout" id="about">
      <div className="about-img-wrapper hidden card1">
        <img src={about_img} alt="about myself picture" />
      </div>
      <div className="description">
        <div className="about-title hidden">
          <h1>About</h1>
          <h1 id="works">me</h1>
        </div>
        <p className="hidden card1">
          I'm an African Leadership Univeristy student pursuing a degree in
          Software Engineering, and I'm on a mission to make a meaningful impact
          through code. From designing efficient algorithms to crafting
          user-friendly applications, I'm fascinated by the possibilities that
          software engineering offers. I've honed my skills in various
          programming languages frameworks including Python, React, Javascript,
          C/C++, Solidity and bash among others to explore diverse technologies,
          and tackle real-world challenges through competitions and personal
          projects.
        </p>
      </div>
    </div>
  );
}

export default About;
