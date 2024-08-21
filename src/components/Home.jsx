import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css";

function Home() {
  return (
    <div className="homeLayout" id="home">
      <div className="introColumn column1 hidden">
        <h5>HI, I'M DAVID</h5>
        <h1>I'M A SOFTWARE</h1>
        <h1 className="other">ENGINEER</h1>
        <p>
          Full Stack Developer | Embedded Systems Engineer | Freelancer
        </p>
        <div className="introButtons">
          <a href="#projects">
            <h3>MY PROJECTS</h3>
          </a>
          <a
            href="/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="resume.pdf"
          >
            <h3>MY RESUME</h3>
            <FontAwesomeIcon icon={faDownload} className="download-icon" />
          </a>
        </div>
      </div>
      <div className="picColumn column1 hidden">
        <div className="main-image"></div>
      </div>
    </div>
  );
}

export default Home;
