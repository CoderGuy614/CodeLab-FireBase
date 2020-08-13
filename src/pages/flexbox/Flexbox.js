import React from "react";
import "./flexbox.scss";
import { Container } from "react-bootstrap";
import FlexItem from "./FlexItem";

const Flexbox = () => {
  return (
    <Container className="flexbox-page-container">
      <FlexItem />
    </Container>
  );
};

export default Flexbox;
