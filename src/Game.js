import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardGallery from "./CardGallery";

function Game() {
  const [count, setCount] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Navbar.Text>
                Score: {count} | Top Score: {topScore}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CardGallery
        count={count}
        setCount={setCount}
        topScore={topScore}
        setTopScore={setTopScore}
      ></CardGallery>
    </div>
  );
}

export default Game;
