import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const NavbarAbout = () => {
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portpage">Portfolio</Nav.Link>
            <Nav.Link href="https://github.com/sharmap1">
              <GrGithub />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/prasamsha-sharma-a87169154/">
              <GrLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarAbout;
