import React, { Component } from "react";
import picture from "../docs/ryota-mine.png";

class Profile extends Component {
  // Render profile page
  render() {
    return (
      <div className="profile">
        <div className="headline">
          <h2>Profile</h2>
          <p>Full-Stack Web Developer | Mechanical Engineering</p>
          <hr></hr>
        </div>
        <div id="profile-section" className="form-row">
          <div id="profile" className="form-group col-md-4">
            <img src={picture} alt="Ryota Mine"></img>
          </div>
          <div id="info" className="form-group col-md-8">
            <h3>Summary</h3>
            <p>
              Junior Full-Stack Web Developer with 5 years of Mechanical Engineering background in the automotive industry (mainly on interior parts). I have been fascinated with how software programs are designed, developed, and released to improve the workplace. This curiosity led me to pursue a career in full-stack development. I am a continuous learner with profound leadership and project management skills. I also have international work experience in the USA and Mexico.
            </p>
            <br></br>
            <h3>Details</h3>
            <p>
              <strong>Name:</strong>
              <br></br>
              Ryota Mine
              <br></br>
              <strong>Location:</strong>
              <br></br>
              Toronto, Ontario, Canada
              <br></br>
              <strong>Industry</strong>
              <br></br>
              Internet
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
