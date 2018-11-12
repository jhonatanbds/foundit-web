import React, { Component } from "react";
import Post from "./components/Post";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container">
          <div className="row">
            <Post />
          </div>
          <div className="row">
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
