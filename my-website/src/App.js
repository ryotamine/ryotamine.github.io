import React, { Component } from "react";
import Home from "./home.js";
import MainPicture from "./main-picture.js";
import Profile from "./profile.js";
import Education from "./education.js";
import Skills from "./skills.js";
import Projects from "./projects.js";
import "./App.css";

class App extends Component {
  // Render entire page
  render() {
    return (
      <div className="App">
        <Home />
        <MainPicture />
        <Profile />
        <Education />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
