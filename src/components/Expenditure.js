import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Chart from "./Chart";
import "./Expenditure.css";

class Expenditure extends Component {
  state = {};
  render() {
    return (
      <div>
        <Image
          src="assets/expenditurebanner.jpg"
          className="header-image"
          marginBottom="2em"
        />
        <Container>
          <h2>Detailed expenditure</h2>
          <Row>
            <Col xs={12} sm={9} className="main-section">
              <Chart />
            </Col>
            <Col xs={12} sm={3} className="sidebar-section">
              <Image src="assets/piggybank.jpg" className="img-fluid" />
              <h5>How do I know if I am spending too much?</h5>
              <p>
                It really is important to keep track of how you are spending
                your money. It is the first step to understanding how you are
                managing your money, and to taking control of your finances. It
                may seem like a lot of work when you first begin, but you can
                make it as simple or complicated as you want to. Tracking your
                expenses can help you stop feeling like you have little to show
                for your hard work.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Expenditure;
