import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Render navbar
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav className="navbar fixed-top">
            <a className="navbar-brand" href="/">RYOTA MINE</a>
            <a className="nav-link" href="/">SUMMARY</a>
            <a className="nav-link" href="/">EDUCATION</a>
            <a className="nav-link" href="/">SKILLS</a>
            <a className="nav-link" href="/">PROJECTS</a>
            <a className="nav-link" href="/">EMPLOYMENT</a>
            <form className="form-inline">
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
                  <i class="fas fa-envelope-square fa-2x" 
                    alt="Ryota Mine Gmail"
                  >
                  </i>
                </a>
              </div>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
