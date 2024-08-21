import React, { Component } from "react";
import "../styles/contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Home, User, Note1 } from "iconsax-react";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact-layout" id="contact">
      <div className="grey-card column">
        <div className="contact-title hidden">
          <h1 className="heading">Got a project in</h1>
          <h1 id="works">mind?</h1>
        </div>
      </div>
      <div className="grey-card column">
        <Form className="contact-form">
          <div className="name-email">
            <Form.Group
              className="text-space"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group
              className="text-space"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </div>
          <Form.Group
            className="text-space message"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={8} placeholder="Message" />
          </Form.Group>
          <Button className="submit-button">
            <h3>Send Message</h3>
            <FontAwesomeIcon icon={faPaperPlane} className="submit-icon" />
          </Button>
        </Form>
      </div>
      <div className="grey-card footer">
        <div className="horizontal-line"></div>
        <div className="nav-links-bottom">
          <a href="#home" className="navi">
            <Home className="navicons" />
            <h5>Home</h5>
          </a>
          <a href="#about" className="navi">
            <User className="navicons" />
            <h5>About me</h5>
          </a>
          <a href="#projects" className="navi">
            <Note1 className="navicons" />
            <h5>Projects</h5>
          </a>
        </div>
        <div className="ext-links-bottom">
          <a
            href="https://github.com/dkokonkwo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="footer-icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-okonkwo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icons" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100084058022279&mibextid=9R9pXO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="footer-icons" />
          </a>
        </div>
        <div className="logo-policy">
          <div className="logo-2">
            <h3>DavidOkonkwo® </h3>
            <p> 2024</p>
          </div>
          <p className="extra">Terms of Service - Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
