import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import "../assets/Collection.css";
import items from "./Items";
import BASE_URL from "./Variables";

const Collection = (props) => {
  const { match } = props;
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemLocation, setItemLocation] = useState("");
  const [itemCondition, setItemCondition] = useState("");
  const [itemYear, setItemYear] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = () => {
    const body = {
      name: itemName,
      condition: itemCondition,
      location: itemLocation,
      year: itemYear,
      dateCreated: new Date(),
      collectionId: match.params.id,
    };
    fetch(`${BASE_URL}items/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
      });
    setItemName("");
    setItemCondition("");
    setItemLocation("");
    setItemYear(0);
    toggleModal();
  };
  const handleCancel = () => {
    setItemName("");
    setItemCondition("");
    setItemLocation("");
    setItemYear(0);
    toggleModal();
  };
  useEffect(() => {
    fetch(`${BASE_URL}collections/getById/${match.params.id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setCollectionName(json[0].name);
        setCollectionDescription(json[0].description);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [collectionName, collectionDescription, match.params.id]);
  return (
    <>
      <CustomNavbar />
      <Container className="main-container" fluid>
        <Container className="inner-container" fluid>
          <h1>
            {`${collectionName} `}
            <Button
              variant="success"
              onClick={() => {
                toggleModal();
              }}>
              Add entry
            </Button>
          </h1>
          <h3>{collectionDescription}</h3>
          <br />
          <Table className="table-style" responsive>
            <thead>
              <tr>
                <th>Heading 1</th>
                <th>Heading 2</th>
                <th>Heading 3</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr>
                    <td>{item.h1}</td>
                    <td>{item.h2}</td>
                    <td>{item.h3}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
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
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="1950s coin"
                onChange={(evt) => {
                  setItemName(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Where was it found?</Form.Label>
              <Form.Control
                type="text"
                placeholder="In the park"
                onChange={(evt) => {
                  setItemLocation(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item Condition</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mint condition, worn, damaged"
                onChange={(evt) => {
                  setItemCondition(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="1950"
                onChange={(evt) => {
                  setItemYear(evt.target.value);
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

export default Collection;
