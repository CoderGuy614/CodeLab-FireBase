import React, { Fragment } from "react";
import "./oneLineLayouts.scss";

const superCentered = () => (
  <div className="ex1 test">
    <div className="parent lightblue">
      <div className="box coral" contentEditable>
        You Can Edit Me :)
      </div>
    </div>
    <div className="description">
      <h3>This is SuperCentered</h3>
      <code>{`.parent {
  display: grid;
  place-items: center;
  border: 1px solid black;
  background: lightblue;
  height: 200px;
}`}</code>
    </div>
  </div>
);

const deconstructedPancake = () => (
  <div className="ex2">
    <div className="parent">
      <div className="box green">1</div>
      <div className="box green">2</div>
      <div className="box green">3</div>
    </div>

    <div className="description">
      <h3>This is Deconstructed Pancake</h3>
      <code>{`  .ex2 .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ex2 .box {
    flex: 1 1 150px; /*  Stretching: */
    flex: 0 1 150px; /*  No stretching: */
    margin: 5px;
  }
  }`}</code>
    </div>
  </div>
);

const OneLineLayouts = () => {
  return (
    <div id="onelinelayouts" className="container">
      {superCentered()}

      {deconstructedPancake()}
    </div>
  );
};

export default OneLineLayouts;
