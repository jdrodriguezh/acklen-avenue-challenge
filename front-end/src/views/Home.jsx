import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from "../components/CustomNavbar";
import "../assets/Home.css";
import collections from "./Collections";

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Container className="main-container" fluid>
        <Container className="collections-container" fluid>
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Card className="add-collection-card" onClick={()=>{console.log("hols")}}>
                <Card.Body>
                  <Card.Title>Add Collection</Card.Title>
                  <div className="center-icon">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {collections.map((collection) => {
              return (
                <Col lg={3} md={6} xs={12}>
                  <Card className="collection-card">
                    <Card.Body>
                      <Card.Title>{collection.name}</Card.Title>
                      <Card.Text>{collection.description}</Card.Text>
                      <div className="button-container">
                        <Link to={`collection/${collection.id}`}>
                          <Button>Check</Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
