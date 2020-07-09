import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../assets/Home.css";

const Home = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img
            alt="Logo"
            src="/favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{` My App`}
        </Navbar.Brand>
      </Navbar>
      <Container fluid>
        <h1>Home</h1>
      </Container>
        
    </>
  )
}

export default Home;