import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Savings from "./components/Savings";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Savings" component={Savings}> */}
        </div>
      </Router>
    );
  }
}

export default App;
