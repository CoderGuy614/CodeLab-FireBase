import React, { useState } from "react";
import "./codewars1.scss";

import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Collapse,
} from "react-bootstrap";

const Codewars1 = () => {
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
              Consider what JavaScript array methods would work well for this
              problem, such a map or filter.
            </p>
          </div>
        </Collapse>
        <Collapse in={open2}>
          <div id="example-collapse-text" className="mt-2 text-info">
            <p>Hint 2:</p>
            <hr />
            <p>
              {" "}
              Consider using ES6 template literal notation in your solution.
            </p>
          </div>
        </Collapse>
        <Collapse in={open3}>
          <div id="example-collapse-text" className="mt-2 text-info">
            <p>Hint 3:</p>
            <hr />
            <p>
              {" "}
              Try refactoring your first solution to make it more consise,
              efficient, or reduce the time and space complexity.
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
            <code>{`Figure out how to embed the code literal here`}</code>
          </div>
        </Collapse>
      </div>
    );
  };

  return (
    <Container id="codewars1">
      <Jumbotron className="my-3 py-3">
        <h1 className="text-primary">Codewars - 7 Kyu - Find the Capitals</h1>
        <p className="text-dark">
          A simple Codewars challenge, solved using JavaScript!
        </p>
      </Jumbotron>

      <Row className="justify-content-center">
        <Col xs={12} md={6} className="problem-statement">
          <h4 className="text-center py-2">Problem Statement: </h4>
          <p>
            Write a function that takes a sequence of objects, consisting of
            either a country or a state and it's capital. The function should
            return an array of sentences declaring the capital of the state or
            country.
            <hr />
            <p>
              <code>{"{Test that this code is displaying correctly}"}</code>
            </p>
            <p></p>
            <p></p>
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

export default Codewars1;
