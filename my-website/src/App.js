import React, { Component } from "react";
import Navbar from "./navbar.js";
import MainPicture from "./main-picture.js";
import Profile from "./profile.js";
import Education from "./education.js";
import Skills from "./skills.js";
import Projects from "./projects.js";
import Employment from "./employment.js";
import "./App.css";

class App extends Component {
  // Render entire page
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPicture />
        <Profile />
        <Education />
        <Skills />
        <Projects />
        <Employment />
      </div>
    );
  }
}

export default App;
