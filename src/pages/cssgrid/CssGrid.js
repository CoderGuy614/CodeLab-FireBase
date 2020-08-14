import React from "react";
import "./cssGrid.scss";

const CssGrid = () => {
  return (
    <div className="ex1">
      <h3 className="text-center mt-3">Basic Grid Layout</h3>
      <div className="container">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
        <div className="item item4"></div>
        <div className="item item5"></div>
        <div className="item item6"></div>
      </div>
    </div>
  );
};

export default CssGrid;
