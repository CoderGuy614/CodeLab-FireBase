import React from "react";
import "./flexbox.scss";
import { Container } from "react-bootstrap";
import FlexItem from "./FlexItem";

const Flexbox = () => {
  return (
    <Container className="flexbox-page-container">
      <section id="basic-flexbox">
        <h3 className="text-center my-3">Display Flex - No Wrap</h3>
        <div className="parent">
          <FlexItem header="No Wrap" title="Display-Flex" text="1" />
          <FlexItem header="No Wrap" title="Display-Flex" text="2" />
          <FlexItem header="No Wrap" title="Display-Flex" text="3" />
          <FlexItem header="No Wrap" title="Display-Flex" text="4" />
        </div>
      </section>

      <section id="basic-flexbox-wrap" className="mt-3">
        <h3 className="text-center mb-3">Display Flex - Wrap</h3>
        <div className="parent">
          <FlexItem header="Wrap" title="Display-Flex" text="1" />
          <FlexItem header="Wrap" title="Display-Flex" text="2" />
          <FlexItem header="Wrap" title="Display-Flex" text="3" />
          <FlexItem header="Wrap" title="Display-Flex" text="4" />
        </div>
      </section>

      <section id="basic-flexbox-column" className="mt-3">
        <h3 className="text-center mb-3">Display Flex - Column Wrap</h3>
        <div className="parent">
          <FlexItem header="Flex-Flow" title="Column-Wrap" text="1" />
          <FlexItem header="Flex-Flow" title="Column-Wrap" text="2" />
          <FlexItem header="Flex-Flow" title="Column-Wrap" text="3" />
          <FlexItem header="Flex-Flow" title="Column-Wrap" text="4" />
        </div>
      </section>

      <section id="flexbox-justify-content" className="my-3">
        <h3 className="text-center mb-3">Justify Content</h3>
        <div className="parent center">
          <div className="item">Center</div>
        </div>
        <div className="parent left">
          <div className="item">Flex-Start</div>
        </div>
        <div className="parent right">
          <div className="item">Flex-End</div>
        </div>
        <div className="parent space-between">
          <div className="item">Space Between</div>
          <div className="item">Space Between</div>
          <div className="item">Space Between</div>
        </div>
        <div className="parent space-around">
          <div className="item">Space Around</div>
          <div className="item">Space Around</div>
          <div className="item">Space Around</div>
        </div>
        <div className="parent space-evenly">
          <div className="item">Space Evenly</div>
          <div className="item">Space Evenly</div>
          <div className="item">Space Evenly</div>
        </div>
      </section>
    </Container>
  );
};

export default Flexbox;
