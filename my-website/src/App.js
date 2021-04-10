// Libraries
import React from "react";

// Components
import Navbar from "./components/Navbar";
import MainPicture from "./components/MainPicture";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Employment from "./components/Employment";
import Projects from "./components/Projects";

// Styling
import "./App.css";

// Render Personal Website
const App = () => (
  <div>
    <a className="skip-link" href="#main">
      Skip to Main
    </a>
    <Navbar />
    <MainPicture />
    <Profile />
    <Education />
    <Skills />
    <Employment />
    <Projects />
  </div>
);

export default App;
