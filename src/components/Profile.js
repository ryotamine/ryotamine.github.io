// Libraries
import React, { useState } from "react";

// Styling
import profilePicture from "../../docs/ryota-mine.png";

const Profile = () => {
  // Set initial state
  const [load, setLoad] = useState(false);

  // Render Profile Component
  return (
    <div id="profile">
      <div className="text-center">
        <div className="section-name">Profile</div>
        <div className="headline">Product Manager | Mechanical Engineering</div>
      </div>

      <hr />

      <div className="row pb-2">
        <div className="mb-3 col-lg-4">
          <img
            src={profilePicture}
            alt="Ryota Mine"
            onLoad={() => setLoad(true)}
            className={load ? "profile-image" : "loading-image"}
          />
        </div>
        <div className="mb-3 col-lg-8">
          <div className="title">Summary</div>
          <div className="mb-4">
            Product Manager with 5 years of Mechanical Engineering background in
            the automotive industry (mainly on interior parts). I have been
            fascinated with how software programs are designed, developed and
            released to improve the workplace. This curiosity led me to pursue a
            career in software development. I am a continuous learner with
            profound leadership and project management skills. I also have
            international work experience in the USA and Mexico.
          </div>
          <div className="title">Details</div>
          <div>
            <strong>Name</strong>
            <div>Ryota Mine</div>
            <strong>Location</strong>
            <div>Toronto, Ontario, Canada</div>
            <strong>Industry</strong>
            <div>Computer Software</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
