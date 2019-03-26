import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  Grid
} from "react-bootstrap";
import "./Home.css";
import axios from 'axios';
import Piechart from './Piechart';

export default class Home extends Component {
  constructor(props) {
    super(props);
    let url = "http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/customers/1/details";
    let response = axios.
            get(url, {
              headers: {
          identity: "Group14",
          token: "9f0ffe48-1e61-47d5-804f-205e769c7fde"
        }
    }).then(res => {this.setState({json: res})});
  }

  firstName = () => {
    return this.state == null ? "" : this.state.json.data.firstName;
  };

  fullName = () => {
    return this.state == null ? "" : this.state.json.data.lastName + " " + this.state.json.data.firstName;
  };

  stageOfLife = () => {
    if (this.state == null) {
      return "";
    } else {
      return "Working";
    }
  };

  lastLogin = () => {
    if (this.state == null) {
      return "";
    } else {
      let lastDateStr = this.state.json.data.lastLogIn;
      return lastDateStr[8] + lastDateStr[9] + "-" +  lastDateStr[5] + lastDateStr[6] + "-" + lastDateStr[0] + lastDateStr[1] + lastDateStr[2] + lastDateStr[3];
    }
  };


  render() {
    return (
      <Container>
        <Jumbotron className="welcomemessage">
          <h2>DBS iBanking</h2>
          <p>Welcome back { this.firstName() }! What may I do for you today?</p>
          <p> Last Login: { this.lastLogin() } </p>
          <Link to="/about">
            <Button className="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/appleman.jpg"
              roundedCircle
              className="profile-pic"
            />
            <h3> { this.fullName() }</h3>
            <Link to="/timeline"><p> {this.stageOfLife()} </p></Link>
          </Col>
          <Col xs={12} sm={8} className="person-wrapper">
            <h3>Your Expenditure</h3>
            <p>Expenditure for 2019</p>
            <p>Check out more about your expenditure here!</p>
            < Piechart/>
            <Link to="/expenditure">
              <Button className="primary">Expenditure</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
