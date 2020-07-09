import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from "../components/CustomNavbar";
import "../assets/Home.css";
import collections from "./Collections";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = () => {
    setCollectionName("");
    setCollectionDescription("");
    toggleModal();
  };
  const handleCancel = () => {
    setCollectionName("");
    setCollectionDescription("");
    toggleModal();
  };
  return (
    <>
      <CustomNavbar />
      <Container className="main-container" fluid>
        <Container className="collections-container" fluid>
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Card
                className="add-collection-card"
                onClick={() => {
                  toggleModal();
                }}>
                <Card.Body>
                  <Card.Title>Add Collection</Card.Title>
                  <div className="center-icon">
                    <FontAwesomeIcon icon={faPlus} size="3x" />
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
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Collection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Collection Name</Form.Label>
              <Form.Control
                type="text"
                placeHolder="Collection Name"
                onChange={(evt) => {
                  setCollectionName(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Collection Description</Form.Label>
              <Form.Control
                type="textarea"
                placeHolder="Collection Name"
                onChange={(evt) => {
                  setCollectionDescription(evt.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>{handleCancel()}}>
            Cancel
          </Button>
          <Button variant="success" onClick={()=>{handleSubmit()}}>
            Add!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
