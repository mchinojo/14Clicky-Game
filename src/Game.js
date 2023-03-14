import React, { useState } from "react";
import "./Game.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardGallery from "./CardGallery";

function Game() {
  const [count, setCount] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [message, setMessage] = useState("Start picking");

  return (
    <div>
      <Navbar className="myNavbar" fixed="top" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
          <Nav>
            <Navbar.Brand>{message}</Navbar.Brand>
          </Nav>

          <Nav className="">
            <Navbar.Text>
              Score: {count} | Top Score: {topScore}
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
      <CardGallery
        count={count}
        setCount={setCount}
        topScore={topScore}
        setTopScore={setTopScore}
        message={message}
        setMessage={setMessage}
      ></CardGallery>
    </div>
  );
}

export default Game;
