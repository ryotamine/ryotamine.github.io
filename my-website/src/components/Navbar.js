// Libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // Set initial state
  const [navbarEffect, setNavbarEffect] = useState(false);

  // Mount Navbar
  useEffect(() => {
    window.scrollTo(0, 0);

    // Mount Navbar styling effect
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < window.innerHeight - 70;

      if (isTop) {
        setNavbarEffect(false);
      } else {
        setNavbarEffect(true);
      }
    });

    // Unmount Navbar styling effect at scroll
    window.removeEventListener("scroll", () => {});
  }, []);

  // Render Navbar
  return (
    <div id="landing-page">
      <nav className={navbarEffect ? "navbar-effect" : "navbar"}>
        <div className="navbar-logo">
          <Link
            activeClass="active"
            to="landing-page"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          > 
            RYOTA MINE
          </Link>
        </div>

        <div className="navbar-spacing" />

        {/* <div className="linkedin">
          <a 
            className="nav-link" 
            href="https://www.linkedin.com/in/ryotamine" 
            target="_blank"
          >
            <i 
              className="fab fa-linkedin fa-2x" 
              alt="Ryota Mine LinkedIn"
            >
            </i>
          </a>
        </div>
        <div className="github">
          <a 
            className="nav-link" 
            href="https://github.com/ryotamine" 
            target="_blank"
          >
            <i 
              className="fab fa-github-square fa-2x" 
              alt="Ryota Mine GitHub"
            >
            </i>
          </a>
        </div>
        <div className="twitter">
          <a 
            className="nav-link" 
            href="https://twitter.com/ryotamine" 
            target="_blank"
          >
            <i 
              className="fab fa-twitter-square fa-2x" 
              alt="Ryota Mine Twitter"
            >
            </i>
          </a>
        </div>
        <div className="gmail">
          <a 
            className="nav-link" 
            href="mailto:ryotamine@gmail.com"
          >
            <i 
              className="fas fa-envelope-square fa-2x" 
              alt="Ryota Mine Gmail"
            >
            </i>
          </a>
        </div> */}

        <div className="navbar-section">
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
          > 
            PROFILE
          </Link>
        </div>
        <div className="navbar-section">
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
          > 
            EDUCATION
          </Link>
        </div>
        <div className="navbar-section">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
          > 
            SKILLS
          </Link>
        </div>
        <div className="navbar-section">
          <Link
            activeClass="active"
            to="employment"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
          > 
            EMPLOYMENT
          </Link>
        </div>
        <div className="navbar-section">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
          > 
            PROJECTS
          </Link>
        </div>
        <div className="navbar-section">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
          > 
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
