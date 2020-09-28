// Libraries
import React, { useState } from "react";

// Styling
import lighthouseLabs from "../../docs/lighthouse-labs.png";
import universityOfWaterloo from "../../docs/university-of-waterloo.png";

const Education = () => {
  // Set initial state
  const [load, setLoad] = useState(false);

  // Render Education Component
  return (
    <div id="education">
      <div className="text-center">
        <div className="section-name">Education</div>
        <div className="headline">Lighthouse Labs | University of Waterloo</div>
        <hr></hr>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-4">
          <a
            href="https://lighthouselabs.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lighthouseLabs}
              alt="Lighthouse Labs"
              onLoad={() => setLoad(true)}
              className={load ? "lighthouse-labs" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Lighthouse Labs</div>
          <strong>Diploma, Web Development</strong>
          <div>Mar - May 2019</div>
          <div>Toronto, Ontario, Canada</div>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-lg-4">
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={universityOfWaterloo}
              alt="University of Waterloo"
              onLoad={() => setLoad(true)}
              className={load ? "university-of-waterloo" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">University of Waterloo</div>
          <strong>
            Bachelor of Applied Science, Honours Mechanical Engineering Co-op
          </strong>
          <div>2013</div>
          <div>Waterloo, Ontario, Canada</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
