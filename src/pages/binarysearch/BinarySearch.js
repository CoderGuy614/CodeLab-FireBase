import React, { useState } from "react";
import "./binarysearch.scss";

import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Collapse,
} from "react-bootstrap";

const BinarySearch = () => {
  const Hints = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
      <>
        <Button
          onClick={() => setOpen1(!open1)}
          aria-controls="example-collapse-text"
          aria-expanded={open1}
        >
          {" "}
          Hint 1
        </Button>
        <Button
          onClick={() => setOpen2(!open2)}
          aria-controls="example-collapse-text"
          aria-expanded={open2}
        >
          Hint 2{" "}
        </Button>
        <Button
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text"
          aria-expanded={open3}
        >
          {" "}
          Hint 3
        </Button>

        <Collapse in={open1}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    );
  };

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
        <Col xs={12} md={6} className="problem-hints">
          <h4 className="text-center py-2">Hints: </h4>
          <Hints />
        </Col>
      </Row>
    </Container>
  );
};

export default BinarySearch;
