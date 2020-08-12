import React, { Fragment } from "react";
import "./oneLineLayouts.scss";

const superCentered = () => (
  <div className="ex1">
    <div className="parent lightblue">
      <div className="box coral" contentEditable>
        You Can Edit Me :)
      </div>
    </div>
    <div className="description">
      <h3>SuperCentered</h3>
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
      <h3>Deconstructed Pancake</h3>
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

const sidebarSays = () => (
  <div className="ex3">
    <div className="parent">
      <div className="section yellow">Sidebar</div>
      <div className="section purple">Main</div>
    </div>

    <div className="description">
      <h3>Sidebar Says</h3>
      <code>{`  .ex3 .parent {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
  }`}</code>
    </div>
  </div>
);

const OneLineLayouts = () => {
  return (
    <div id="onelinelayouts">
      {
        <h3 className="text-center mb-4 text-primary text-underline">
          <u>Handy Layout Options Using 1 Line of CSS</u>
        </h3>
      }
      {superCentered()}
      {deconstructedPancake()}
      {sidebarSays()}
    </div>
  );
};

export default OneLineLayouts;
