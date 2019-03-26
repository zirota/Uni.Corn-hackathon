import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>DBS iBanking</h2>
          <p>Welcome back! What may I do for you today?</p>
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
            <h3>John</h3>
            <p> Your profile</p>
          </Col>
          <Col xs={12} sm={8} className="person-wrapper">
            <h3>Your spendings</h3>
            <p>Spendings for 2019</p>
            <p>Check out more about your spendings here!</p>
            <Button className="primary">Your spendings</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
