import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
  // Scroll to top of home page
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Render home page
  render() {
    return (
      <div className="App-header">
        <nav className="navbar fixed-top">
          <form className="form-inline">
            <a 
              className="navbar-brand" href="/"
              onClick={this.scrollToTop}
            >
              RYOTA MINE
            </a>
            <div className="linkedin">
              <a className="nav-link" 
                 href="https://www.linkedin.com/in/ryotamine" 
                 target="_blank"
              >
                <i className="fab fa-linkedin fa-2x" 
                   alt="Ryota Mine LinkedIn"
                >
                </i>
              </a>
            </div>
            <div className="github">
              <a className="nav-link" 
                 href="https://github.com/ryotamine" 
                 target="_blank"
              >
                <i className="fab fa-github-square fa-2x" 
                   alt="Ryota Mine GitHub"
                >
                </i>
              </a>
            </div>
            <div className="twitter">
              <a className="nav-link" 
                 href="https://twitter.com/ryotamine" 
                 target="_blank"
              >
                <i className="fab fa-twitter-square fa-2x" 
                   alt="Ryota Mine Twitter"
                >
                </i>
              </a>
            </div>
            <div className="gmail">
              <a className="nav-link" 
                 href="mailto:ryotamine@gmail.com"
              >
                <i className="fas fa-envelope-square fa-2x" 
                   alt="Ryota Mine Gmail"
                >
                </i>
              </a>
            </div>
          </form>
          <div className="section">
            <Link
              activeClass="active"
              to="profile"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            > 
              PROFILE
            </Link>
          </div>
          <div className="section">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            > 
              EDUCATION
            </Link>
          </div>
          <div className="section">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            > 
              SKILLS
            </Link>
          </div>
          <div className="section">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            > 
              PROJECTS
            </Link>
          </div>
          <div className="section">
            <Link
              activeClass="active"
              to="employment"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            > 
              EMPLOYMENT
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
