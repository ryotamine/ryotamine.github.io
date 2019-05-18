import React, { Component } from "react";
import Home from "./home.js";
import "./App.css";

class App extends Component {
  // Render entire page
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
