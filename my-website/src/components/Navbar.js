// Libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

// Styling
import linkedin from "../../docs/linkedin.png";
import github from "../../docs/github.png";
import twitter from "../../docs/twitter.png";
import gmail from "../../docs/gmail.png";

const Navbar = () => {
  // Set initial state
  const [navbarEffect, setNavbarEffect] = useState(false);

  // Mount Navbar
  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < window.innerHeight - 80;

      if (isTop) {
        setNavbarEffect(false);
      } else {
        setNavbarEffect(true);
      }
    });

    window.removeEventListener("scroll", () => {});
  }, []);

  // Render Navbar
  return (
    <div id="landing-page">
      <nav className={navbarEffect ? "navbar-effect" : "navbar"}>
        <div className="navbar-logo">
          <Link to="landing-page">RM</Link>
        </div>

        <div className="navbar-spacing" />

        <div className="navbar-content">
          <div className="navbar-section">
            <Link activeClass="active" to="profile" spy={true} offset={-80}>
              PROFILE
            </Link>
          </div>
          <div className="navbar-section">
            <Link activeClass="active" to="education" spy={true} offset={-80}>
              EDUCATION
            </Link>
          </div>
          <div className="navbar-section">
            <Link activeClass="active" to="skills" spy={true} offset={-80}>
              SKILLS
            </Link>
          </div>
          <div className="navbar-section">
            <Link activeClass="active" to="employment" spy={true} offset={-80}>
              EMPLOYMENT
            </Link>
          </div>
          <div className="navbar-section">
            <Link activeClass="active" to="projects" spy={true} offset={-80}>
              PROJECTS
            </Link>
          </div>
        </div>

        <div className="social-media-section">
          <a
            href="https://www.linkedin.com/in/ryotamine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="Ryota Mine LinkedIn"
              className="social-media-icon"
            />
          </a>
        </div>
        <div className="social-media-section">
          <a
            href="https://github.com/ryotamine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="Ryota Mine GitHub"
              className="social-media-icon"
            />
          </a>
        </div>
        <div className="social-media-section">
          <a
            href="https://twitter.com/ryotamine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="Ryota Mine Twitter"
              className="social-media-icon"
            />
          </a>
        </div>
        <div className="social-media-section">
          <a href="mailto:ryotamine@gmail.com">
            <img
              src={gmail}
              alt="Ryota Mine Gmail"
              className="social-media-icon"
            />
          </a>
        </div>
      </nav>

      {/* Responsive Design */}
      <nav className="navbar-responsive">
        <div className="navbar-responsive-section">
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            offset={-80}
            className="fas fa-user"
          >
            <div className="navbar-responsive-section-name">Profile</div>
          </Link>
        </div>
        <div className="navbar-responsive-section">
          <Link
            activeClass="active"
            to="education"
            spy={true}
            offset={-80}
            className="fas fa-graduation-cap"
          >
            <div className="navbar-responsive-section-name">Education</div>
          </Link>
        </div>
        <div className="navbar-responsive-section">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={-80}
            className="fas fa-tools"
          >
            <div className="navbar-responsive-section-name">Skills</div>
          </Link>
        </div>
        <div className="navbar-responsive-section">
          <Link
            activeClass="active"
            to="employment"
            spy={true}
            offset={-80}
            className="fas fa-briefcase"
          >
            <div className="navbar-responsive-section-name">Employment</div>
          </Link>
        </div>
        <div className="navbar-responsive-section">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            offset={-80}
            className="fas fa-project-diagram"
          >
            <div className="navbar-responsive-section-name">Projects</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
