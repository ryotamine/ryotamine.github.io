import React, { Component } from "react";
import html from "../docs/html.png";
import css from "../docs/css.png";
import javaScript from "../docs/javascript.png";
import ruby from "../docs/ruby.png";
import express from "../docs/express.png";
import jQuery from "../docs/jquery.png";
import react from "../docs/react.png";
import rubyOnRails from "../docs/ruby-on-rails.png";
import mongoDb from "../docs/mongo-db.png";
import sql from "../docs/sql.png";
import gitAndGithub from "../docs/git-and-github.png";
import node from "../docs/node.png";

class Skills extends Component {
  // Render skills page
  render() {
    return (
      <div className="skills responsive">
        <div className="headline">
          <h1>Skills</h1>
          <h3>Front-End | Back-End | Database</h3>
          <hr></hr>
        </div>
        <div className="form-row">
          <div className="form-group col-md-2">
            <img
              src={html}
              className="rounded mx-auto d-block"
              alt="HTML"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={css}
              className="rounded mx-auto d-block"
              alt="CSS"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={javaScript}
              className="rounded mx-auto d-block"
              alt="JavaScript"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={ruby}
              className="rounded mx-auto d-block"
              alt="Ruby"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={express}
              className="rounded mx-auto d-block"
              alt="Express"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={jQuery}
              className="rounded mx-auto d-block"
              alt="jQuery"
            >
            </img>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-2">
            <img
              src={react}
              className="rounded mx-auto d-block"
              alt="React"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={rubyOnRails}
              className="rounded mx-auto d-block"
              alt="Ruby On Rails"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={mongoDb}
              className="rounded mx-auto d-block"
              alt="MongoDB"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={sql}
              className="rounded mx-auto d-block"
              alt="SQL"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={gitAndGithub}
              className="rounded mx-auto d-block"
              alt="Git and GitHub"
            >
            </img>
          </div>
          <div className="form-group col-md-2">
            <img
              src={node}
              className="rounded mx-auto d-block"
              alt="Node"
            >
            </img>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
