import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const NavbarAbout = () => {
  return (
    <>
      <Container style={{ marginBottom: "160px" }}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portpage">Portfolio</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/sharmap1">
                <GrGithub />
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="https://www.linkedin.com/in/prasamsha-sharma-a87169154/"
              >
                <GrLinkedin />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarAbout;
