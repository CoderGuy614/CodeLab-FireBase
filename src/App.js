import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button variant="primary" onClick={() => alert("WHAT THE FUCK!")}>
        {" "}
        CLICK ME
      </Button>
    </div>
  );
}

export default App;
