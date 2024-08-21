import React, { useState, useEffect } from "react";
import "../styles/projects.css";
import { Button, Modal } from "react-bootstrap";
import { MyProjects } from "../utils/MyProjects";

function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filters, setFilters] = useState("all");

  const displayTag = (tag) => {
    setFilters(tag);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component is unmounted
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [filters]);

  const ProjectCard = ({ imageUrl, onClick }) => {
    return (
      <div className="projectCard" onClick={onClick}>
        <img src={imageUrl} alt="pic-card" />
      </div>
    );
  };

  const ProjectModal = ({ title, desc, extLink, onHide, show }) => {
    return (
      <Modal
        // {...props}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{desc}</p>
        </Modal.Body>
        <Modal.Footer>
          {extLink ? (
            <a href={extLink} target="_blank" rel="noopener noreferrer">
              <Button>Learn More</Button>
            </a>
          ) : null}
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleModalShow = (show, project = null) => {
    setModalShow(show);
    setSelectedProject(project);
  };

  return (
    <div className="projectsLayout" id="projects">
      <div className="headingButtons">
        <div className="projectsTitle hidden">
          <h2>My recent</h2>
          <h2 id="works">works</h2>
        </div>
        <h3>Click on any project to see more</h3>
        <div className="buttonsContainer">
          <button
            className={filters === "all" ? "projectButton on" : "projectButton"}
            onClick={() => displayTag("all")}
          >
            All
          </button>
          <button
            className={
              filters === "mobile" ? "projectButton on" : "projectButton"
            }
            onClick={() => displayTag("mobile")}
          >
            Mobile App Dev
          </button>
          <button
            className={filters === "web" ? "projectButton on" : "projectButton"}
            onClick={() => displayTag("web")}
          >
            Web Development
          </button>
          <button
            className={filters === "emb" ? "projectButton on" : "projectButton"}
            onClick={() => displayTag("emb")}
          >
            Arduino
          </button>
          <button className="projectButton">Others</button>
        </div>
      </div>
      <div className="worksLayout">
        {MyProjects.filter(
          (project) => filters === "all" || project.tags.includes(filters)
        ).map((project) => (
          <div key={project.id} className="cardContainer hidden">
            <ProjectCard
              imageUrl={project.imageUrl}
              onClick={() => handleModalShow(true, project)}
            />
            <ProjectModal
              show={modalShow}
              onHide={() => handleModalShow(false)}
              title={selectedProject?.title}
              desc={selectedProject?.description}
              extLink={selectedProject?.extLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
