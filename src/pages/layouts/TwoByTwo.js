import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import "./TwoByTwo.css";

const TwoByTwo = () => {
  const [rows, setRows] = useState([0, 0]);

  const handleChange = (e) => {
    setRows(Array(Number(e.target.value)).fill(0));
  };

  return (
    <>
      <form className="grid-size-form" action="">
        <label for="2x2"> 2 By 2</label>
        <input
          checked={rows.length == 2}
          type="radio"
          value={2}
          name="2x2"
          id="2x2"
          onChange={handleChange}
        />
        <label for="3x3"> 3 By 3</label>
        <input
          type="radio"
          checked={rows.length == 3}
          value={3}
          name="3x3"
          id="3x3"
          onChange={handleChange}
        />
        <label for="4x4"> 4 By 4</label>
        <input
          type="radio"
          checked={rows.length == 4}
          value={4}
          name="4x4"
          id="4x4"
          onChange={handleChange}
        />
      </form>

      <div className="two-by-two-grid">
        {rows &&
          rows.length > 0 &&
          rows.map((row, index) => <div className="item">{index}</div>)}
      </div>
    </>
  );
};
export default TwoByTwo;
