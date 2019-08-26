import React, { Component } from "react";
import tidylist from "../docs/tidylist.png";
import personalWebsite from "../docs/personal-website.png";
import matrixurl from "../docs/matrixurl.png";
import surfparrot from "../docs/surfparrot.png";
import schoodle from "../docs/schoodle.png";

class Projects extends Component {
  // Render projects page
  render() {
    return (
      <div id="projects" className="responsive">
        <div className="headline">
          <h1>Projects</h1>
          <h3>Full-Stack Web Developer</h3>
          <hr></hr>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a 
              className="tidylist"
              href="https://github.com/ryotamine/tidylist"
              target="_blank"
            >
              <img 
                src={tidylist}
                className="rounded mx-auto d-block"
                alt="Tidylist"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Tidylist</h3>
            Aug 2019
            <ul>
              <li>
                Implemented full-stack to-do list using HTML, CSS, JavaScript, Node, Express, EJS, and PostgreSQL in 24 hours
              </li>
              <li>
                Applied REST deliberately to register, login, update, and delete user profiles
              </li>
            </ul>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a 
              className="personal-website"
              href="https://github.com/ryotamine/ryotamine.github.io"
              target="_blank"
            >
              <img 
                src={personalWebsite}
                className="rounded mx-auto d-block"
                alt="Personal Website"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Personal Website</h3>
            Jul 2019
            <ul>
              <li>
                Redesigned personal website using React and Bootstrap in 40 hours
              </li>
              <li>
                Deployed through AWS independently for public appearance
              </li>
            </ul>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a 
              className="matrixurl"
              href="https://github.com/ryotamine/matrixurl"
              target="_blank"
            >
              <img 
                src={matrixurl}
                className="rounded mx-auto d-block"
                alt="MatrixURL"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>MatrixURL</h3>
            Jun 2019
            <ul>
              <li>
                Created full-stack URL shortener using Ruby on Rails, ERB, and SQLite in 20 hours
              </li>
              <li>
                Debugged code sufficiently to meet altering needs
              </li>
            </ul>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a 
              className="surfparrot"
              href="https://github.com/ryotamine/surfparrot"
              target="_blank"
            >
              <img 
                src={surfparrot}
                className="rounded mx-auto d-block"
                alt="Surfparrot"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Surfparrot</h3>
            May 2019
            <ul>
              <li>
                Generated full-stack live-music event listing preview using React, Node, Express, PostgreSQL, Axios, and Spotify API in 96 hours
              </li>
              <li>
                Considered UI/UX adequately to meet intuitive use
              </li>
            </ul>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a 
              className="schoodle"
              href="https://github.com/ryotamine/schoodle"
              target="_blank"
            >
              <img 
                src={schoodle}
                className="rounded mx-auto d-block"
                alt="Schoodle"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Schoodle</h3>
            Apr 2019
            <ul>
              <li>
                Produced full-stack event scheduler using HTML, CSS, JavaScript, jQuery, AJAX, Bootstrap, Node, Express, EJS, and PostgreSQL in 48 hours
              </li>
              <li>
                Managed front-end, back-end, and database tasks consistently from start to finish
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
