import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardGallery from "./CardGallery";

function Game() {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Navbar.Text>Score: 0 | Top Score: 0</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CardGallery></CardGallery>
    </div>
  );
}

export default Game;
