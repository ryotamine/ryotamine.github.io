// Libraries
import React, { useState } from "react";

// Styling
import tasttlig from "../../docs/tasttlig.png";
import abc from "../../docs/abc.png";
import ford from "../../docs/ford.png";
import wilbert from "../../docs/wilbert.png";
import magna from "../../docs/magna.png";

const Employment = () => {
  // Set initial state
  const [load, setLoad] = useState(false);

  // Render Employment Component
  return (
    <div id="employment">
      <div className="text-center">
        <div className="section-name">Employment</div>
        <div className="headline">Product Manager | Mechanical Engineering</div>
        <hr></hr>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-4">
          <a
            href="http://tasttlig.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tasttlig}
              alt="Tasttlig"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Tasttlig Corporation</div>
          <strong>Product Manager</strong>
          <div>Oct 2020 - Present</div>
          <div className="mb-5">Toronto, Ontario, Canada</div>

          <strong>Software Developer</strong>
          <div>Oct 2019 - Sep 2020</div>
          <div>Toronto, Ontario, Canada</div>
          <ul>
            <li>
              Implemented full-stack food experiences web application
              sufficiently using React, Node, PostgreSQL, Git and AWS to align
              with business model
            </li>
            <li>
              Researched, planned, developed, debugged and refactored features
              on timely basis in agile environment
            </li>
            <li>
              Integrated third-party APIs such as AWS S3, Google Maps and Stripe
              adequately to enhance business model
            </li>
            <li>
              Created company software development standards documentation
              thoroughly for developers to adhere
            </li>
            <li>
              Collaborated with Engineering, Sales and Marketing on business
              model development concisely to continuously prioritize and improve
              features
            </li>
            <li>
              Hired as first full-time Software Developer and helped grew
              company from 2 to 8 people in 1 year
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-4">
          <a
            href="http://abctechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={abc}
              alt="ABC Technologies"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">ABC Technologies</div>
          <strong>Project Engineering</strong>
          <div>Sep 2017 - Dec 2018</div>
          <div>Toronto, Ontario, Canada</div>
          <ul>
            <li>
              Managed design, development and manufacturing of 60 automotive
              centre console parts steadily from concept to production
            </li>
            <li>
              Reviewed DFMEA, CAD Models, Engineering Drawings, Moldflow, Tool
              Trials and DVP&R meticulously to consider Design for Manufacturing
              and Assembly (DFM/DFA)
            </li>
            <li>
              Evaluated Co-ordinate Measuring Machine (CMM) and Statistical
              Process Control (SPC) results purposely to resolve fit and finish
              issues
            </li>
            <li>
              Submitted Engineering Change Notices (ECNs) on timely basis to
              ensure design modifications of parts
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-4">
          <a
            href="https://www.ford.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ford}
              alt="Ford Motor Company"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Ford Motor Company</div>
          <strong>Program Supplier Technical Assistance Engineering</strong>
          <div>Nov 2014 - Jun 2017</div>
          <div>Dearborn, Michigan, USA</div>
          <ul>
            <li>
              Managed 25 Suppliers within Body Interior consistently on
              APQP/PPAP timing of 300 parts
            </li>
            <li>
              Resolved Supplier Quality issues using 8D to meet Program
              requirements
            </li>
            <li>
              Organized Priority Supplier visits deliberately to evaluate Launch
              Readiness
            </li>
            <li>
              Collaborated with Product Development, Manufacturing and Suppliers
              effectively to continuously improve design, manufacturing and
              assembly quality of parts, resulting $611,200 USD in cost savings
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-4">
          <a
            href="https://wilbertplastics.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={wilbert}
              alt="Wilbert Plastic Services"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Wilbert Plastic Services</div>
          <strong>Project Engineering</strong>
          <div>Mar - Nov 2014</div>
          <div>Troy, Michigan, USA</div>
          <ul>
            <li>
              Submitted Product Change Notifications (PCNs) on timely basis to
              ensure design alterations of 300 plastic automotive body interior
              parts
            </li>
            <li>
              Reviewed Bill of Materials accurately to co-ordinate between
              Program Managers and Manufacturing
            </li>
            <li>
              Evaluated prices and costs of parts adequately to verify proper
              financial returns
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-4">
          <a
            href="https://www.magna.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={magna}
              alt="Magna Exteriors and Interiors: Plastcoat"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Magna Exteriors and Interiors: Plastcoat</div>
          <strong>Research and Development Engineering Co-op</strong>
          <div>Aug - Dec 2011</div>
          <div>Brampton, Ontario, Canada</div>
          <ul>
            <li>
              Advanced research and development of automotive thermoforming
              project sufficiently to save manufacturing costs
            </li>
            <li>
              Solved quality issues on plastic automotive body exterior parts
              using data collection and analysis to mitigate production costs
            </li>
            <li>
              Revised tool surfaces using AutoCAD for simplifying Build
              Standards of injection moulding machines
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Employment;
