import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap"; 
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = () => {
    console.log(username)
    console.log(password)
    console.log(confirmPassword)
  }
  return(
    <Container className="main-container" fluid>
      <Card className="card-container">
        <Card.Body>
          <Card.Title>Register</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(evt)=>{
                  setUsername(evt.target.value)
                }}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(evt)=>{
                  setPassword(evt.target.value)
                }}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                onChange={(evt)=>{
                  setConfirmPassword(evt.target.value)
                }}/>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="card-footer">
          <Container>
            <Row>
              <Col className="center-content">
                <Button
                  className="submit-button"
                  onCick={()=>{
                    handleRegister();
                  }}>
                    Register
                  </Button>
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Register;