import React from "react";
import { Card, Button } from "react-bootstrap";

const HomeCard = ({ imageUrl, title, text, linkUrl }) => {
  return (
    <Card style={{ width: "200px" }}>
      <Card.Img
        variant="top"
        src={imageUrl || "https://source.unsplash.com/random/250x250"}
        style={{ height: "150px", padding: "25px" }}
      />
      <Card.Body>
        <Card.Title>{title || "Card Title"}</Card.Title>
        <Card.Text style={{ height: "90px" }}>
          {text || "Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        </Card.Text>
        <Button variant="primary" href={linkUrl || null} block>
          {"Let's Go!"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
