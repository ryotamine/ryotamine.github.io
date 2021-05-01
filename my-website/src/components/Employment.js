// Libraries
import React, { useState } from "react";

// Styling
import selfEmployed from "../../docs/self-employed.png";
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
        <div className="headline">
          Day Trader | Software Developer | Mechanical Engineering
        </div>
      </div>

      <hr />

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <img
            src={selfEmployed}
            alt="Self-Employed"
            onLoad={() => setLoad(true)}
            className={load ? "employment-image" : "loading-image"}
          />
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Self-Employed</div>
          <div className="sub-title">Day Trader</div>
          <div>Feb 2021 - Present</div>
          <div>Toronto, Ontario, Canada</div>
          <ul>
            <li>
              Research product and market data on large and mid-cap stocks
              independently to create trade plans with risk management
            </li>
            <li>
              Implement trade plans during stock market hours meticulously to
              test hypotheses
            </li>
            <li>
              Document trade performances accurately for Continuous Improvement
            </li>
          </ul>
        </div>
      </div>

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://tasttlig.com"
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
          <div className="sub-title">Product Manager</div>
          <div>Oct 2020 - Jan 2021</div>
          <div>Toronto, Ontario, Canada</div>
          <ul className="mb-4">
            <li>
              Managed design, development and release of full-stack food
              experiences web application consistently to align with business
              model
            </li>
            <li>
              Collaborated with Engineering, Sales and Marketing on business
              model development concisely to continuously prioritize and improve
              features
            </li>
            <li>
              Created company software development Internship program
              deliberately to help new developers
            </li>
          </ul>

          <div className="sub-title">Software Developer</div>
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

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="http://abctechnologies.com"
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
          <div className="sub-title">Project Engineering</div>
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

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://www.ford.com"
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
          <div className="sub-title">
            Program Supplier Technical Assistance Engineering
          </div>
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

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://wilbertplastics.com"
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
          <div className="sub-title">Project Engineering</div>
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

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://www.magna.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={magna}
              alt="Magna International"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Magna Exteriors and Interiors: Plastcoat</div>
          <div className="sub-title">
            Research and Development Engineering Co-op
          </div>
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

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://www.magna.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={magna}
              alt="Magna International"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Magna Closures</div>
          <div className="sub-title">Design Engineering Co-op</div>
          <div>Jan - Apr 2011</div>
          <div>Newmarket, Ontario, Canada</div>
          <ul>
            <li>
              Designed automotive door latch system components using CATIA V5 to
              improve existing design
            </li>
            <li>
              Performed Finite Element Analysis (FEA) using ANSYS DesignSpace to
              do design modifications
            </li>
            <li>
              Updated design documents (Bill of Materials, Engineering
              Specifications, DFMEA, Tolerance Stacks) concisely for automotive
              closures project
            </li>
          </ul>
        </div>
      </div>

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://www.magna.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={magna}
              alt="Magna International"
              onLoad={() => setLoad(true)}
              className={load ? "employment-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">
            Cosma International: Promatek Research Centre (Magna)
          </div>
          <div className="sub-title">Project Engineering Co-op</div>
          <div>Oct - Dec 2009</div>
          <div>Brampton, Ontario, Canada</div>
          <ul>
            <li>
              Managed manufacturing process of automotive chassis project
              effectively for Continuous Improvement
            </li>
            <li>
              Designed fixtures using Autodesk Inventor to support automotive
              casting and forging
            </li>
            <li>
              Collected data thoroughly for analysis of Design of Experiments
              (DOE)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Employment;
