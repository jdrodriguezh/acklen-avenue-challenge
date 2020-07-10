import React from "react";
import { Card } from "react-bootstrap";
import "../assets/Home.css";

const CollectionCard = (props) => {
  const { history, name, description, id } = props;
  console.log(props);
  return (
    <Card
      className="collection-card"
      onClick={() => {
        history.push(`collection/${props.id}`);
      }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CollectionCard;
