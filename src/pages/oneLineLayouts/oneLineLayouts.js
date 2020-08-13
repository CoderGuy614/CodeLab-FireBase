import React, { Fragment } from "react";
import "./oneLineLayouts.scss";

const superCentered = () => (
  <div className="ex1">
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
    <div className="parent blue">
      <div className="box coral" contentEditable>
        You Can Edit Me :)
      </div>
    </div>
  </div>
);

const deconstructedPancake = () => (
  <div className="ex2">
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
    <div className="parent">
      <div className="box green">1</div>
      <div className="box green">2</div>
      <div className="box green">3</div>
    </div>
  </div>
);

const sidebarSays = () => (
  <div className="ex3">
    <div className="description">
      <h3>Sidebar Says</h3>
      <code>{`  .ex3 .parent {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
  }`}</code>
    </div>
    <div className="parent">
      <div className="section yellow">Sidebar</div>
      <div className="section purple">Main</div>
    </div>
  </div>
);

const pancakeStack = () => (
  <div className="ex4">
    <div className="description">
      <h3>Pancake Stack</h3>
      <code>{`  .ex4 .parent {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }`}</code>
    </div>
    <div className="parent">
      <header className="blue section" contentEditable>
        Header
      </header>
      <main className="green section" contentEditable>
        Main
      </main>
      <footer className="purple section" contentEditable>
        Footer
      </footer>
    </div>
  </div>
);

const holyGrail = () => (
  <div className="ex5">
    <div className="description">
      <h3>Holy Grail</h3>
      <code>{`  .ex5 .parent {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
  }
  
  .ex5 header {
    padding: 2rem;
    grid-column: 1 / 4;
  }

  .ex5 .left-side {
    grid-column: 1 / 2;
  }

  .ex5 main {
    grid-column: 2 / 3;
  }

  .ex5 .right-side {
    grid-column: 3 / 4;
  }

  .ex5 footer {
    grid-column: 1 / 4;
  } `}</code>
    </div>
    <div className="parent">
      <header className="green section">Header</header>
      <div className="left section purple">Left Sidebar</div>
      <main className="section blue">Main Section</main>
      <div className="right section yellow">Right Sidebar</div>
      <footer className="coral section">Footer</footer>
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
      {<hr />}
      {deconstructedPancake()}
      {<hr />}
      {sidebarSays()}
      {<hr />}
      {pancakeStack()}
      {<hr />}
      {holyGrail()}
      {<hr />}
    </div>
  );
};

export default OneLineLayouts;
