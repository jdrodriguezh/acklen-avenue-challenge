import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../views/Loading";
import CustomNavbar from "../components/CustomNavbar";
import CollectionCard from "../components/CollectionCard";
import "../assets/Home.css";
import BASE_URL from "./Variables";

const Home = (props) => {
  const { history } = props;
  const { user, isLoading } = useAuth0();
  const [collections, setCollections] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = () => {
    const body = {
      name: collectionName,
      creationDate: new Date(),
      description: collectionDescription,
      user: user.sub,
    };
    fetch(`${BASE_URL}collections/`, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setCollections([...collections, json]);
      });
    setCollectionName("");
    setCollectionDescription("");
    toggleModal();
  };
  const handleCancel = () => {
    setCollectionName("");
    setCollectionDescription("");
    toggleModal();
  };
  useEffect(() => {
    fetch(`${BASE_URL}collections/${user.sub}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <CustomNavbar />
      <Container className="main-container" fluid>
        <Container className="collections-container" fluid>
          <Row className="row-style">
            <Col lg={3} md={6} xs={12} className="col-style">
              <Card
                className="add-collection-card"
                onClick={() => {
                  toggleModal();
                }}>
                <Card.Body className="add-collection-cardbody">
                  <Card.Title>Add Collection</Card.Title>
                  <div className="center-icon">
                    <FontAwesomeIcon icon={faPlus} size="3x" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {collections.map((collection) => {
              return (
                <Col lg={3} md={6} xs={12} className="col-style">
                  <CollectionCard
                    name={collection.name}
                    description={collection.description}
                    id={collection._id}
                    history={history}
                  />
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
                placeholder="Collection Name"
                onChange={(evt) => {
                  setCollectionName(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Collection Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Collection Name"
                onChange={(evt) => {
                  setCollectionDescription(evt.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleCancel();
            }}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleSubmit();
            }}>
            Add!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
