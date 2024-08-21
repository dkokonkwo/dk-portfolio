import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/navbar.css";
import { Container } from "react-bootstrap";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

function NavBar() {
  const expand = "lg";
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleLinkClick = (event) => {
    event.preventDefault();
    setShowOffcanvas(false);
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar key={expand} expand={expand} className="nav-bar-2" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home" className="logo-1" id="top">
          DavidOkonkwo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={handleShow}
        >
          <span>
            <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
          </span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          backdrop="true"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <a
                href="/public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="resume.pdf"
              >
                <Button>Download my resume</Button>
              </a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 header-links">
              <Nav.Link href="#home" id="nav-links" onClick={handleClose}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#projects"
                id="nav-links"
                onClick={handleLinkClick}
              >
                Projects
              </Nav.Link>
              <Nav.Link href="#about" id="nav-links" onClick={handleClose}>
                About
              </Nav.Link>
              <Nav.Link href="#contact" id="nav-links" onClick={handleClose}>
                Contact
              </Nav.Link>
              <FontAwesomeIcon icon={faMinus} className="pipe" />
              <div className="bar"></div>
              <div className="social-links">
                <Nav.Link
                  href="https://github.com/dkokonkwo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="ext-icons" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.linkedin.com/in/david-okonkwo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="ext-icons" />
                </Nav.Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
