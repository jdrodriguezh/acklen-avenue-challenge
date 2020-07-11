import React from "react";
import { Card } from "react-bootstrap";
import treasure from "../assets/images/treasure.svg";
import coin from "../assets/images/money.svg";
import "../assets/css/Card.css";

const CollectionCard = (props) => {
  const { history, name, description, id } = props;
  return (
    <Card
      className="collection-card"
      onClick={() => {
        history.push(`collection/${id}`);
      }}>
      <div className="head">
        <Card.Title>{name}</Card.Title>
      </div>
      <div className="yellow-division"></div>
      <Card.Body className="c-body">
        <Card.Text>
          <strong>{description}</strong>
        </Card.Text>
      </Card.Body>
      <div className="image-container">
        <div className="treasure-logo">
          <img src={treasure} alt="Treasure" />
        </div>
        <div className="coin-logo">
          <img src={coin} alt="Treasure" />
        </div>
      </div>
      <div className="blue-footer"></div>
    </Card>
  );
};

export default CollectionCard;
