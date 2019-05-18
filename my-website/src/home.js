import React, { Component } from "react";

class Home extends Component {
  // Render home page
  render() {
    return (
      <div className="App-header">
        <nav className="navbar fixed-top">
          <form className="form-inline">
            <a className="navbar-brand" href="/">RYOTA MINE</a>
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
          <a className="nav-link" href="#summary">SUMMARY</a>
          <a className="nav-link" href="#education">EDUCATION</a>
          <a className="nav-link" href="#skills">SKILLS</a>
          <a className="nav-link" href="#projects">PROJECTS</a>
          <a className="nav-link" href="#employment">EMPLOYMENT</a>
        </nav>
      </div>
    );
  }
}

export default Home;
