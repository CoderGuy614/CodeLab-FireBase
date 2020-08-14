import React from "react";
import "./cssGrid.scss";
import { Container } from "react-bootstrap";

const CssGrid = () => {
  return (
    <Container>
      <div className="ex1">
        <h3 className="text-center mt-3">Basic Grid Layout</h3>
        <div className="container">
          <div className="item item1">Item 1</div>
          <div className="item item2">Item 2</div>
          <div className="item item3">Item 3</div>
          <div className="item item4">Item 4</div>
          <div className="item item5">Item 5</div>
          <div className="item item6">Item 6</div>
        </div>
      </div>
      <div className="ex2">
        <h3 className="text-center mt-3">Grid Template Rows</h3>
        <div className="container">
          <div className="item item1"> Row 1</div>
          <div className="item item2">Row 2</div>
          <div className="item item3">Row 3</div>
          <div className="item item4"> Row 4</div>
        </div>
      </div>

      <div className="ex3">
        <h3 className="text-center mt-3">Grid Template Columns</h3>
        <div className="container">
          <div className="item item1"> Column 1</div>
          <div className="item item2">Column 2</div>
          <div className="item item3">Column 3</div>
          <div className="item item4"> Column 4</div>
        </div>
      </div>

      <div className="ex4">
        <h3 className="text-center mt-3">Grid Template Rows & Columns</h3>
        <div className="container mb-3">
          <div className="item item1">Row 1</div>
          <div className="item item2">3Fr height</div>
          <div className="item item2">3 Columns</div>
          <div className="item item1">Row 2</div>
          <div className="item item2">1Fr height</div>
          <div className="item item2">Row 3 Columns</div>
        </div>
      </div>
    </Container>
  );
};

export default CssGrid;
