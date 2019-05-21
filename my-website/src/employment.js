import React, { Component } from "react";
import abc from "../docs/abc.png";
import ford from "../docs/ford.png";
import wilbert from "../docs/wilbert.png";
import magna from "../docs/magna.png";

class Employment extends Component {
  // Render employment page
  render() {
    return (
      <div id="employment" className="responsive">
        <div className="headline">
          <h1>Employment</h1>
          <h3>Mechanical Engineering</h3>
          <hr></hr>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="abc"
               href="http://abctechnologies.com/"
               target="_blank"
            >
              <img
                src={abc}
                className="rounded mx-auto d-block"
                alt="ABC Group"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>ABC Group</h3>
            <p>
              <strong>Project Engineering</strong>
              <br></br>
              Sep 2017 - Dec 2018
              <br></br>
              Toronto, ON, Canada
              <ul>
                <li>
                  Managed design, development, and manufacturing of 60 automotive centre console parts steadily from concept to production
                </li>
                <li>
                  Reviewed DFMEA, CAD Models, Engineering Drawings, Moldflow, Tool Trials, and DVP&R meticulously to consider Design for Manufacturing and Assembly (DFM/DFA)
                </li>
                <li>
                  Evaluated Co-ordinate Measuring Machine (CMM) and Statistical Process Control (SPC) results purposely to resolve fit and finish issues
                </li>
                <li>
                  Submitted Engineering Change Notices (ECNs) on timely basis to ensure design modifications of parts
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="ford"
               href="https://www.ford.com/"
               target="_blank"
            >
              <img src={ford}
                   className="rounded mx-auto d-block"
                   alt="Ford Motor Company"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Ford Motor Company</h3>
            <p>
              <strong>Program Supplier Technical Assistance Engineering</strong>
              <br></br>
              Nov 2014 - Jun 2017
              <br></br>
              Dearborn, MI, USA
              <ul>
                <li>
                  Managed 25 Suppliers within Body Interior consistently on APQP/PPAP timing of 300 parts
                </li>
                <li>
                  Resolved Supplier Quality issues using 8D to meet Program requirements
                </li>
                <li>
                  Organized Priority Supplier visits deliberately to evaluate Launch Readiness
                </li>
                <li>
                  Collaborated with Product Development, Manufacturing, and Suppliers effectively to continuously improve design, manufacturing, and assembly quality of parts, resulting $611,200 USD in cost savings
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="wilbert"
               href="https://wilbertplastics.com/"
               target="_blank"
            >
              <img src={wilbert}
                   className="rounded mx-auto d-block"
                   alt="Wilbert Plastic Services"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Wilbert Plastic Services</h3>
            <p>
              <strong>Project Engineering</strong>
              <br></br>
              Mar - Nov 2014
              <br></br>
              Troy, MI, USA
              <ul>
                <li>
                  Submitted Product Change Notifications (PCNs) on timely basis to ensure design alterations of 300 plastic automotive body interior parts
                </li>
                <li>
                  Reviewed Bill of Materials accurately to co-ordinate between Program Managers and Manufacturing
                </li>
                <li>
                  Evaluated prices and costs of parts adequately to verify proper financial returns
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="magna"
               href="https://www.magna.com/"
               target="_blank"
            >
              <img src={magna}
                   className="rounded mx-auto d-block"
                   alt="Magna Exteriors and Interiors: Plastcoat"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Magna Exteriors and Interiors: Plastcoat</h3>
            <p>
              <strong>Research and Development Engineering Co-op</strong>
              <br></br>
              Aug - Dec 2011
              <br></br>
              Brampton, ON, Canada
              <ul>
                <li>
                  Advanced research and development of automotive thermoforming project sufficiently to save manufacturing costs
                </li>
                <li>
                  Solved quality issues on plastic automotive body exterior parts using data collection and analysis to mitigate production costs
                </li>
                <li>
                  Revised tool surfaces using AutoCAD for simplifying Build Standards of injection moulding machines
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="magna"
               href="https://www.magna.com/"
               target="_blank"
            >
              <img src={magna}
                   className="rounded mx-auto d-block"
                   alt="Magna Closures"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Magna Closures</h3>
            <p>
              <strong>Design Engineering Co-op</strong>
              <br></br>
              Jan - Apr 2011
              <br></br>
              Newmarket, ON, Canada
              <ul>
                <li>
                  Designed automotive door latch system components using CATIA V5 to improve existing design
                </li>
                <li>
                  Performed Finite Element Analysis (FEA) using ANSYS DesignSpace to do design modifications
                </li>
                <li>
                  Updated design documents (Bill of Materials, Engineering Specifications, DFMEA, Tolerance Stacks) concisely for automotive closures project
                </li>
              </ul>
            </p>
            <br></br>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a className="magna"
               href="https://www.magna.com/"
               target="_blank"
            >
              <img src={magna}
                   className="rounded mx-auto d-block"
                   alt="Cosma International: Promatek Research Centre (Magna)"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Cosma International: Promatek Research Centre (Magna)</h3>
            <p>
              <strong>Project Engineering Co-op</strong>
              <br></br>
              Oct - Dec 2009
              <br></br>
              Brampton, ON, Canada
              <ul>
                <li>
                  Managed manufacturing process of automotive chassis project effectively for Continuous Improvement
                </li>
                <li>
                  Designed fixtures using Autodesk Inventor to support automotive casting and forging
                </li>
                <li>
                  Collected data thoroughly for analysis of Design of Experiments (DOE)
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

export default Employment;
