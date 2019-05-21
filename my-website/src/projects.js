import React, { Component } from "react";
import surfparrot from "../docs/surfparrot.png";

class Projects extends Component {
  // Render projects page
  render() {
    return (
      <div className="projects responsive">
        <div className="headline">
          <h1>Projects</h1>
          <h3>Full-Stack Web Developer</h3>
          <hr></hr>
        </div>
        <a className="surfparrot"
           href="https://github.com/ryotamine/surfparrot"
           target="_blank"
        >
          <div className="form-row">
            <div className="form-group col-md-4">
              <img
                src={surfparrot}
                className="rounded mx-auto d-block"
                alt="Surfparrot"
              >
              </img>
            </div>
            <div className="form-group col-md-8">
              <h3>Surfparrot</h3>
              <p>
                May 2019
                <br></br>
                <ul>
                  <li>
                    Generated full-stack live-music event listing preview using React, Node, Express, PostgreSQL, Axios, and Spotify API in 96 hours
                  </li>
                  <li>
                    Considered UI/UX adequately to meet intuitive use
                  </li>
                </ul>
              </p>
              <br></br>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Projects;
