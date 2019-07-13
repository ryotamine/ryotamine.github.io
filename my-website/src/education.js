import React, { Component } from "react";
import lighthouseLabs from "../docs/lighthouse-labs.png";
import universityOfWaterloo from "../docs/university-of-waterloo.png";

class Education extends Component {
  // Render education page
  render() {
    return (
      <div id="education" className="responsive">
        <div className="headline">
          <h1>Education</h1>
          <h3>Lighthouse Labs | University of Waterloo</h3>
          <hr></hr>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a 
              className="lighthouse-labs"
              href="https://lighthouselabs.ca/"
              target="_blank"
            >
              <img 
                src={lighthouseLabs}
                className="rounded mx-auto d-block"
                alt="Lighthouse Labs"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>Lighthouse Labs</h3>
            <strong>
              Diploma, Web Development
            </strong>
            <br></br>
            Mar - May 2019
            <br></br>
            Toronto, Ontario, Canada
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <a 
              className="university-of-waterloo"
              href="https://uwaterloo.ca/"
              target="_blank"
            >
              <img 
                src={universityOfWaterloo}
                className="rounded mx-auto d-block"
                alt="University of Waterloo"
              >
              </img>
            </a>
          </div>
          <div className="form-group col-md-8">
            <h3>University of Waterloo</h3>
            <strong>
              Bachelor of Applied Science, Honours Mechanical Engineering Co-op
            </strong>
            <br></br>
            2013
            <br></br>
            Waterloo, Ontario, Canada
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
