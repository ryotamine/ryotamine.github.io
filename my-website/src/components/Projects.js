// Libraries
import React, { useState } from "react";

// Styling
import tidylist from "../../docs/tidylist.png";
import personalWebsite from "../../docs/personal-website.png";
import matrixurl from "../../docs/matrixurl.png";
import surfparrot from "../../docs/surfparrot.png";
import schoodle from "../../docs/schoodle.png";

const Projects = () => {
  // Set initial state
  const [load, setLoad] = useState(false);

  // Render Projects Component
  return (
    <div id="projects">
      <div className="text-center">
        <div className="section-name">Projects</div>
        <div className="headline">Full-Stack Web Developer</div>
      </div>

      <hr />

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://github.com/ryotamine/tidylist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tidylist}
              alt="Tidylist"
              onLoad={() => setLoad(true)}
              className={load ? "projects-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Tidylist</div>
          <div>Aug 2019</div>
          <ul>
            <li>
              Implemented full-stack to-do list using HTML, CSS, JavaScript,
              Node, Express, EJS, and PostgreSQL in 24 hours
            </li>
            <li>
              Applied REST deliberately to register, login, update, and delete
              user profiles
            </li>
          </ul>
        </div>
      </div>

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://github.com/ryotamine/ryotamine.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={personalWebsite}
              alt="Personal Website"
              onLoad={() => setLoad(true)}
              className={load ? "projects-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Personal Website</div>
          <div>Jul 2019</div>
          <ul>
            <li>
              Redesigned personal website using React and Bootstrap in 40 hours
            </li>
            <li>Deployed through AWS independently for public appearance</li>
          </ul>
        </div>
      </div>

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://github.com/ryotamine/matrixurl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={matrixurl}
              alt="MatrixURL"
              onLoad={() => setLoad(true)}
              className={load ? "projects-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">MatrixURL</div>
          <div>Jun 2019</div>
          <ul>
            <li>
              Created full-stack URL shortener using Ruby on Rails, ERB, and
              SQLite in 20 hours
            </li>
            <li>Debugged code sufficiently to meet altering needs</li>
          </ul>
        </div>
      </div>

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://github.com/ryotamine/surfparrot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={surfparrot}
              alt="Surfparrot"
              onLoad={() => setLoad(true)}
              className={load ? "projects-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Surfparrot</div>
          <div>May 2019</div>
          <ul>
            <li>
              Generated full-stack live-music event listing preview using React,
              Node, Express, PostgreSQL, and Spotify API in 96 hours
            </li>
            <li>Considered UI/UX adequately to meet intuitive use</li>
          </ul>
        </div>
      </div>

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://github.com/ryotamine/schoodle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={schoodle}
              alt="Schoodle"
              onLoad={() => setLoad(true)}
              className={load ? "projects-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Schoodle</div>
          <div>Apr 2019</div>
          <ul>
            <li>
              Produced full-stack event scheduler using HTML, CSS, JavaScript,
              jQuery, AJAX, Bootstrap, Node, Express, EJS, and PostgreSQL in 48
              hours
            </li>
            <li>
              Managed front-end, back-end, and database tasks consistently from
              start to finish
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
