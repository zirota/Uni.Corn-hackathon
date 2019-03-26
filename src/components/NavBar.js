import React, { Component } from "react";
import { Image, Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavBar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <Image src="./assets/dbslogo.png" rounded />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link eventkey={1} componentClass={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link eventkey={2} componentClass={Link} href="/expenditure">
              Expenditure
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
