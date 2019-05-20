import React, { Component } from "react";
import lighthouseLabs from "../docs/lighthouse-labs.png";
import universityOfWaterloo from "../docs/university-of-waterloo.png";

class Education extends Component {
  // Render education page
  render() {
    return (
      <div className="education">
        <div className="headline">
          <h1>Education</h1>
          <h3>Lighthouse Labs | University of Waterloo</h3>
          <hr></hr>
        </div>
        <div id="lighthouse-labs" className="form-row">
          <div className="form-group col-md-4">
            <img 
              src={lighthouseLabs} 
              className="rounded mx-auto d-block" 
              alt="Lighthouse Labs"
            >
            </img>
          </div>
          <div id="info" className="form-group col-md-8">
            <h3>Lighthouse Labs</h3>
            <p>
              <strong>Diploma, Web Development</strong>
              <br></br>
              Mar - May 2019
              <br></br>
              Toronto, Ontario, Canada
            </p>
            <br></br>
          </div>
        </div>
        <div id="university-of-waterloo" className="form-row">
          <div className="form-group col-md-4">
            <img 
              src={universityOfWaterloo} 
              className="rounded mx-auto d-block" 
              alt="University of Waterloo"
            >
            </img>
          </div>
          <div id="info" className="form-group col-md-8">
            <h3>University of Waterloo</h3>
            <p>
              <strong>Bachelor of Applied Science, Honours Mechanical Engineering Co-op</strong>
              <br></br>
              2013
              <br></br>
              Waterloo, Ontario, Canada
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
