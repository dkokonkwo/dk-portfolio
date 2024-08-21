import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function BackToTopButton() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setToTop(false);
        } else {
          setToTop(true);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".introButtons");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component is unmounted
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="back-to-top">
      {toTop && (
        <a href="#top">
          <button className="back-to-top-button">
            <FontAwesomeIcon icon={faArrowUp} />
            <p>To Top</p>
          </button>
        </a>
      )}
    </div>
  );
}

export default BackToTopButton;
// button in styles in index.css
