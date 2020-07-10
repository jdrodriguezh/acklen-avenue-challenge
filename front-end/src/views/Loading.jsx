import React from "react";
import { Container, Spinner } from "react-bootstrap";
import "../assets/Home.css";

const Loading = () => {
  return (
    <Container className="spinner-container" fluid>
      <Spinner animation="border" className="spinner" />
      <h2>Loading...</h2>
    </Container>
  );
};

export default Loading;
