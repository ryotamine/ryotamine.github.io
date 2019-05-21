import React, { Component } from "react";
import surfparrot from "../docs/surfparrot.png";
import jungle from "../docs/ruby-on-rails.png";
import chattyApp from "../docs/react.png";
import schoodle from "../docs/schoodle.png";
import tinyApp from "../docs/node.png";

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
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="surfparrot"
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
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="jungle"
                href="https://github.com/ryotamine/jungle-rails"
                target="_blank"
            >
              <img
                src={jungle}
                className="rounded mx-auto d-block"
                alt="Jungle"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Jungle</h3>
            <p>
              Apr 2019
              <br></br>
              <ul>
                <li>
                  Updated full-stack e-commerce application using Ruby on Rails in 24 hours
                </li>
                <li>
                  Navigated through MVC accordingly to meet user needs
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="chatty-app"
                href="https://github.com/ryotamine/chatty-app"
                target="_blank"
            >
              <img
                src={chattyApp}
                className="rounded mx-auto d-block"
                alt="Chatty App"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Chatty App</h3>
            <p>
              Apr 2019
              <br></br>
              <ul>
                <li>
                  Implemented full-stack online chat using React in 24 hours
                </li>
                <li>
                  Applied WebPack and Express deliberately for bi-directional communication
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="schoodle"
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
            <p>
              Apr 2019
              <br></br>
              <ul>
                <li>
                  Produced full-stack event scheduler using HTML, CSS, JavaScript, jQuery, AJAX, Node, Express, SQL, and Knex in 48 hours
                </li>
                <li>
                  Managed front-end, back-end, and database tasks consistently from start to finish
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="tiny-app"
                href="https://github.com/ryotamine/tinyapp"
                target="_blank"
            >
              <img
                src={tinyApp}
                className="rounded mx-auto d-block"
                alt="TinyApp"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>TinyApp</h3>
            <p>
              Mar 2019
              <br></br>
              <ul>
                <li>
                  Created full-stack URL shortener using JavaScript, Node, and Express in 24 hours
                </li>
                <li>
                  Debugged code sufficiently to meet altering needs
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
