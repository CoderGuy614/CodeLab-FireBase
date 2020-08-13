import React from "react";
import { Card } from "react-bootstrap";

const FlexItem = () => {
  return (
    <Card className="flexbox-card">
      <Card.Header>Card Header</Card.Header>
      <Card.Body className="card-body">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Card Text</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FlexItem;
