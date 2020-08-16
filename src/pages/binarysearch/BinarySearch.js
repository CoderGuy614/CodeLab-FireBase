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

    const closeAll = () => {
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
    };

    return (
      <>
        <Button
          onClick={() => {
            closeAll();
            setOpen1(!open1);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open1}
        >
          {open1 ? "Hide" : "Hint 1"}
        </Button>
        <Button
          onClick={() => {
            closeAll();
            setOpen2(!open2);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open2}
        >
          {open2 ? "Hide" : "Hint 2"}
        </Button>
        <Button
          onClick={() => {
            closeAll();
            setOpen3(!open3);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open3}
        >
          {open3 ? "Hide" : "Hint 3"}
        </Button>

        <Collapse in={open1}>
          <div id="example-collapse-text" className="mt-2 text-info">
            <p>Hint 1:</p>
            <hr />
            <p>
              Try using 2 loops to iterate through the array and find the target
              sum.
            </p>
          </div>
        </Collapse>
        <Collapse in={open2}>
          <div id="example-collapse-text" className="mt-2 text-info">
            <p>Hint 2:</p>
            <hr />
            <p>
              {" "}
              Consider if you could solve this with a single loop. Remember that
              you know that X + Y = targetSum, and two of those three are known
              values on a single iteration, meaning you can easily solve for the
              third value.
            </p>
          </div>
        </Collapse>
        <Collapse in={open3}>
          <div id="example-collapse-text" className="mt-2 text-info">
            <p>Hint 3:</p>
            <hr />
            <p>
              {" "}
              Consider using a hash table to store the value of each entry to
              reduce the time and space complexity of the solution.
            </p>
          </div>
        </Collapse>
      </>
    );
  };

  const Solution = () => {
    const [open4, setOpen4] = useState(false);

    return (
      <div className="mt-2 test">
        <Button
          block
          onClick={() => {
            setOpen4(!open4);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open4}
        >
          {open4 ? "Hide Solution" : "Show Solution"}
        </Button>
        <Collapse in={open4}>
          <div id="example-collapse-text" className="mt-2">
            Solution Goes Here... Not yet finished.
          </div>
        </Collapse>
      </div>
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
      <hr />
      <Row className="my-4">
        <Col md={{ span: 6, offset: 3 }} className="problem-solution">
          <h3 className="text-center py-2">Solution: </h3>

          <Solution />
        </Col>
      </Row>
    </Container>
  );
};

export default BinarySearch;
