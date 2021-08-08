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
        <div className="headline">
          Self-Taught | Lighthouse Labs | University of Waterloo
        </div>
      </div>

      <hr />

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://lighthouselabs.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lighthouseLabs}
              alt="Lighthouse Labs"
              onLoad={() => setLoad(true)}
              className={load ? "education-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Lighthouse Labs</div>
          <div className="sub-title">Diploma, Web Development</div>
          <div>2019</div>
          <div>Toronto, Ontario, Canada</div>
        </div>
      </div>

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <a
            href="https://uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={universityOfWaterloo}
              alt="University of Waterloo"
              onLoad={() => setLoad(true)}
              className={load ? "education-image" : "loading-image"}
            />
          </a>
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">University of Waterloo</div>
          <div className="sub-title">
            Bachelor of Applied Science, Honours Mechanical Engineering Co-op
          </div>
          <div>2013</div>
          <div>Waterloo, Ontario, Canada</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
