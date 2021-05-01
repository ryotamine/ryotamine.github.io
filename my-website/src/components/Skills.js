// Libraries
import React, { useState } from "react";

// Styling
import html from "../../docs/html.png";
import css from "../../docs/css.png";
import javascript from "../../docs/javascript.png";
import ruby from "../../docs/ruby.png";
import react from "../../docs/react.png";
import bootstrap from "../../docs/bootstrap.png";
import node from "../../docs/node.png";
import express from "../../docs/express.png";
import rubyOnRails from "../../docs/ruby-on-rails.png";
import postgresql from "../../docs/postgresql.png";
import sql from "../../docs/sql.png";
import gitAndGithub from "../../docs/git-and-github.png";

const Skills = () => {
  // Set initial state
  const [load, setLoad] = useState(false);

  // Render Skills Component
  return (
    <div id="skills">
      <div className="text-center">
        <div className="section-name">Skills</div>
        <div className="headline">Front-End | Back-End | Database</div>
      </div>

      <hr />

      <div className="row">
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={html}
            alt="HTML"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">HTML</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={css}
            alt="CSS"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">CSS</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={javascript}
            alt="JavaScript"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">JavaScript</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={ruby}
            alt="Ruby"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">Ruby</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={react}
            alt="React"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">React</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={bootstrap}
            alt="Bootstrap"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">Bootstrap</div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={node}
            alt="Node"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">Node</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={express}
            alt="Express"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">Express</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={rubyOnRails}
            alt="Ruby On Rails"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">Ruby on Rails</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={postgresql}
            alt="PostgreSQL"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">PostgreSQL</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={sql}
            alt="SQL"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">SQL</div>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-6">
          <img
            src={gitAndGithub}
            alt="Git and GitHub"
            onLoad={() => setLoad(true)}
            className={load ? "skills-image" : "loading-image"}
          />
          <div className="skills-name">Git and GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
