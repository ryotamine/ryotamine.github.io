import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav className="navbar">
            <a className="navbar-brand" href="/">RYOTA MINE</a>
            <a className="nav-link" href="/">SUMMARY</a>
            <a className="nav-link" href="/">EDUCATION</a>
            <a className="nav-link" href="/">SKILLS</a>
            <a className="nav-link" href="/">PROJECTS</a>
            <a className="nav-link" href="/">EMPLOYMENT</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
