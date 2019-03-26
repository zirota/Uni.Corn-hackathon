import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavBar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">DBS </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          {
            // TO ALIGHT NAV BUTTONS TO THE RIGHT : className="ml-auto"
          }
          <Nav>
            <Nav.Link eventkey={1} componentClass={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link eventkey={2} componentClass={Link} href="/expenditure">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
