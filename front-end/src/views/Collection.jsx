import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from "../components/CustomNavbar";
import search from "../assets/images/search.svg";
import "../assets/css/Collection.css";
import BASE_URL from "./Variables";

const Collection = (props) => {
  const { match } = props;
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemLocation, setItemLocation] = useState("");
  const [itemCondition, setItemCondition] = useState("");
  const [itemYear, setItemYear] = useState(0);
  const [itemValue, setItemValue] = useState(0);
  const [itemId, setItemId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleModifyModal = (item) => {
    setItemName(item.name);
    setItemLocation(item.location);
    setItemCondition(item.condition);
    setItemYear(item.year);
    setItemValue(item.estimatedValue);
    setItemId(item._id);
    setShowModifyModal(true);
  };
  const handleSubmit = () => {
    const body = {
      name: itemName,
      condition: itemCondition,
      location: itemLocation,
      year: itemYear,
      estimatedValue: itemValue,
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
        setItems([...items, json]);
      });
    setItemName("");
    setItemCondition("");
    setItemLocation("");
    setItemYear(0);
    setItemValue(0);
    toggleModal();
  };
  const handleCancel = () => {
    setItemName("");
    setItemCondition("");
    setItemLocation("");
    setItemYear(0);
    setItemValue(0);
    toggleModal();
  };
  const handleModifyCancel = () => {
    setItemName("");
    setItemCondition("");
    setItemLocation("");
    setItemYear(0);
    setItemValue(0);
    setShowModifyModal(false);
  };
  const handleDelete = (id) => {
    fetch(`${BASE_URL}items/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setItems(items.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleModification = () => {
    const body = {
      id: itemId,
      name: itemName,
      location: itemLocation,
      condition: itemCondition,
      year: itemYear,
      estimatedValue: itemValue,
    };
    fetch(`${BASE_URL}items/`, {
      method: "put",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        let tempItems = items.filter((item) => item._id !== itemId);
        tempItems.push(body);
        setItems(tempItems);
        setShowModifyModal(false);
      })
      .catch((error) => {
        console.log(error);
        setShowModifyModal(false);
      });
  };
  useEffect(() => {
    fetch(`${BASE_URL}items/${match.params.id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setItems(json);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <div className="first-line">
            <h1>{collectionName}</h1>
            <Button
              variant="success"
              onClick={() => {
                toggleModal();
              }}>
              Add item
            </Button>
          </div>
          <h3>{collectionDescription}</h3>
          <hr />
          {items.length > 0 ? (
            <Table className="table-style" responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Condition</th>
                  <th>Found at</th>
                  <th>Year</th>
                  <th>Estimated value</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={`${index}1`}>
                      <td key={`${index}A`}>{item.name}</td>
                      <td key={`${index}B`}>{item.condition}</td>
                      <td key={`${index}C`}>{item.location}</td>
                      <td key={`${index}D`}>{item.year}</td>
                      <td key={`${index}E`}>${item.estimatedValue}</td>
                      <td key={`${index}F`}>
                        <FontAwesomeIcon
                          className="modify-icon"
                          icon={faEdit}
                          onClick={() => {
                            toggleModifyModal(item);
                          }}
                        />
                        <FontAwesomeIcon
                          className="delete-icon"
                          icon={faTrash}
                          onClick={() => {
                            handleDelete(item._id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <div className="no-content">
              <h1>This collection has no items. Add some!</h1>
              <img src={search} alt="" />
            </div>
          )}
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
          <Form
            onSubmit={(evt) => {
              evt.preventDefault();
              handleSubmit();
            }}>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                required
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
                required
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
                required
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
                required
                type="number"
                placeholder="1950"
                onChange={(evt) => {
                  setItemYear(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Etimated value</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="125.99"
                onChange={(evt) => {
                  setItemValue(evt.target.value);
                }}
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  handleCancel();
                }}>
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Add!
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        show={showModifyModal}
        onHide={() => {
          setShowModifyModal(false);
        }}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(evt) => {
              evt.preventDefault();
              handleModification();
            }}>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="1950s coin"
                value={itemName}
                onChange={(evt) => {
                  setItemName(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Where was it found?</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="In the park"
                value={itemLocation}
                onChange={(evt) => {
                  setItemLocation(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item Condition</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Mint condition, worn, damaged"
                value={itemCondition}
                onChange={(evt) => {
                  setItemCondition(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="1950"
                value={itemYear}
                onChange={(evt) => {
                  setItemYear(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Etimated value</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="125.99"
                value={itemValue}
                onChange={(evt) => {
                  setItemValue(evt.target.value);
                }}
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  handleModifyCancel();
                }}>
                Discard
              </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Collection;
