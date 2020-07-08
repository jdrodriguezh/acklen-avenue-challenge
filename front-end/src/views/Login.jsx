import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "../assets/Auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container className="main-container" fluid>
      <Card className="card-container">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="card-footer">
          <Container>
            <Row>
              <Col className="center-content">
                <Button
                  className="submit-button"
                  onClick={() => {
                    console.log(username);
                    console.log(password);
                  }}>
                  Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Text>
                  Don't have an account? <a href="/home">Create one!</a>
                </Form.Text>
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Login;
