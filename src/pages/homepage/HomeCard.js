import React from "react";
import { Card, Button } from "react-bootstrap";

const HomeCard = ({ imageUrl, title, text, buttonText, linkUrl }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/random/150x150"
        style={{ height: "150px" }}
      />
      <Card.Body>
        <Card.Title>{title || "Card Title"}</Card.Title>
        <Card.Text>
          {text || "Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        </Card.Text>
        <Button variant="primary" block>
          {buttonText || "Click Me"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
