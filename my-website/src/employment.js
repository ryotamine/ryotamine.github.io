import React, { Component } from "react";
import abcGroup from "../docs/abc-group.png";

class Employment extends Component {
  // Render employment page
  render() {
    return (
      <div className="employment responsive">
        <div className="headline">
          <h1>Employment</h1>
          <h3>Mechanical Engineering</h3>
          <hr></hr>
        </div>
        <a className="abc-group"
           href="http://abctechnologies.com/"
           target="_blank"
        >
          <div className="form-row">
            <div className="form-group col-md-4">
              <img
                src={abcGroup}
                className="rounded mx-auto d-block"
                alt="ABC Group"
              >
              </img>
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
        </a>
      </div>
    );
  }
}

export default Employment;
