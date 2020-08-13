import React from "react";
import { Card } from "react-bootstrap";

const FlexItem = ({ header, title, text }) => {
  return (
    <Card className="flexbox-card">
      <Card.Header>{header || "Header"}</Card.Header>
      <Card.Body className="card-body">
        <Card.Title>{title || "Card Title"}</Card.Title>
        <Card.Text>{text || "Card Text"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FlexItem;
