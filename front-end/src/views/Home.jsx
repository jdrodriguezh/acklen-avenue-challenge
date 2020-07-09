import React from "react";
import { Navbar, Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/Home.css";
import collections from "./Collections";

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
      <Container className="main-container" fluid>
        <Container className="collections-container" fluid>
          <Row>
            {collections.map(collection => {
              return(
                <Col lg={3} xs={12}>
                  <Card className="collection-card">
                    <Card.Body>
                      <Card.Title>{collection.name}</Card.Title>
                      <Card.Text>{collection.description}</Card.Text>
                      <div className="button-container">
                        <Button>Check</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </Container>
        
    </>
  )
}

export default Home;