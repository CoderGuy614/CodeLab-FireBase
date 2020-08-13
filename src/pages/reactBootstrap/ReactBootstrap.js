import React from "react";
import "./reactBootstrap.scss";
import { Card, Jumbotron, Container, Button } from "react-bootstrap";

const ReactBootstrap = () => {
  return (
    <Container>
      <Jumbotron className="mt-4 jumbotron">
        <h1>React Bootstrap</h1>
        <p>Check out some of the react Bootstrap components and utilities!</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      {/* Card Image Overlay */}
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://source.unsplash.com/random/350x350"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default ReactBootstrap;
