import React, { useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import "../assets/Collection.css";
import items from "./Items";

const Collection = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = () => {
    console.log(`Item name: ${itemName} Item description: ${itemDescription}`);
    setItemName("");
    setItemDescription("");
    toggleModal();
  };
  const handleCancel = () => {
    setItemName("");
    setItemDescription("");
    toggleModal();
  };
  return (
    <>
      <CustomNavbar />
      <Container className="main-container" fluid>
        <Container className="inner-container" fluid>
          <h1>
            Collection 1 <Button variant="success">Add entry</Button>
          </h1>
          <h3>Aliqua culpa laborum incididunt dolore deserunt consequat eiusmod.</h3>
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
                placeHolder="Item Name"
                onChange={(evt) => {
                  setItemName(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                type="text"
                placeHolder="Item Description"
                onChange={(evt) => {
                  setItemDescription(evt.target.value);
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
