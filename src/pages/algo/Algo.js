import React from "react";
import "./algo.scss";
import { Jumbotron, Container } from "react-bootstrap";
import HomeCard from "../homepage/HomeCard";

import javascript from "../../img/js.png";
import codewars from "../../img/codewars.jpeg";

const Algo = () => {
  return (
    <Container>
      <Jumbotron className="my-3 py-3">
        <h1 className="text-primary">Algorithms and Data Structures</h1>
        <p className="text-dark">
          Example Code Challenges and Their Solutions!
        </p>
      </Jumbotron>

      {/* Cards Section */}
      <div className="card-container">
        <HomeCard
          title="CodeWars 8Kyu"
          text="Some easy codewars problem"
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

export default Algo;
