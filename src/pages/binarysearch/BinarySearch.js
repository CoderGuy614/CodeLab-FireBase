import React from "react";
import "./binarysearch.scss";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const BinarySearch = () => {
  return (
    <Container id="binary-search">
      <Jumbotron className="my-3 py-3">
        <h1 className="text-primary">Binary Search</h1>
        <p className="text-dark">A classic algorithm question!</p>
      </Jumbotron>

      <Row className="justify-content-center">
        <Col xs={12} md={6} className="problem-statement">
          <h4 className="text-center py-2">Problem Statement: </h4>
          <p>
            You are given an array of unique integers and a target sum. Return
            the two numbers, in an array, from the input array whose sum is the
            target sum. If no such pair exists in the input array, return an
            empty array.
            <hr />
            <p>Example: Array: [1, 5, 9, -1, 2]</p>
            <p>Target: 8</p>
            <p>Output: [9, -1] (order does not matter)</p>
          </p>
        </Col>
        <Col xs={12} md={6} className="problem-solution">
          {" "}
          Second Col
        </Col>
      </Row>
    </Container>
  );
};

export default BinarySearch;
