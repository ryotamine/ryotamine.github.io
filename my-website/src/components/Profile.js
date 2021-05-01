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
        <div className="headline">
          Day Trader | Software Developer | Mechanical Engineering
        </div>
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
            Self-Employed Day Trader with a combined 7 years of Mechanical
            Engineering background in the automotive industry (mainly on
            interior parts) and Software Development. I have been fascinated
            with the design, development and build of physical and digital
            products to improve society. Also, I enjoy financial literacy and
            how the concept can be applied to enhance human lives. This
            combination of interests led me to create my own business in day
            trading. I leverage my technical experience and financial literacy
            to do product and market research on large and mid-cap stocks. Then,
            I make and implement trade plans with risk management.
          </div>
          <div className="title">Details</div>
          <div className="sub-title">Name</div>
          <div>Ryota Mine</div>
          <div className="sub-title">Location</div>
          <div>Toronto, Ontario, Canada</div>
          <div className="sub-title">Industry</div>
          <div>Investment Management</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
