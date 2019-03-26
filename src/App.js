import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Expenditure from "./components/Expenditure";
import Piechart from "./components/Piechart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { json: null };

    let url =
      "http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/customers/marytan";

    let myjson = axios
      .get(url, {
        headers: {
          identity: "Group14",
          token: "9f0ffe48-1e61-47d5-804f-205e769c7fde"
        }
      })
      .then(res => {
        this.setState({ json: res });
      });
  }

  render() {
    //console.log(this.state);
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/expenditure" component={Expenditure} />
          <Route path="/piechart" component={Piechart} />
        </div>
      </Router>
    );
  }
}

export default App;
