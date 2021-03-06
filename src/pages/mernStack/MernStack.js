import React from "react";
import "./mernStack.scss";
import { Jumbotron, Container } from "react-bootstrap";
import HomeCard from "../homepage/HomeCard";

import javascript from "../../img/js.png";
import codewars from "../../img/codewars.jpeg";

const MernStack = () => {
  return (
    <Container>
      <Jumbotron className="my-3 py-3">
        <h1 className="text-primary">Mern Stack Code Snippet Library</h1>
        <p className="text-dark">
          Commonly used bits of code from MERN stack applications
        </p>
      </Jumbotron>

      {/* Cards Section */}
      <div className="card-container">
        <HomeCard
          title="CodeWars - Find the Capitals"
          text="7 Kyu Codewars Challenge"
          imageUrl={codewars}
          linkUrl={"/snippets/algo/codewars/1"}
        />
        <HomeCard
          title="Binary Search Algorithm"
          text="A common searching algoritm for sorted arrays"
          imageUrl={javascript}
          linkUrl={"/snippets/algo/binarysearch"}
        />
        <HomeCard
          title="Two-Number Sum Algorithm"
          text="A classic interview challenge questions"
          imageUrl={javascript}
          linkUrl={"/snippets/algo/twonumbersum"}
        />
        <HomeCard
          title="Nth Fibbonacci Algorithm"
          text="Not as difficult as it sounds! :)"
          imageUrl={javascript}
          linkUrl={"/snippets/algo/fib"}
        />
      </div>
    </Container>
  );
};

export default MernStack;
