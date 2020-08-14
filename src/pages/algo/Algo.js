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
          title="Bootstrap4"
          text="Snippets and examples of the most popular front end framework"
          imageUrl={codewars}
          linkUrl={"/bootstrap"}
        />
        <HomeCard
          title="React Bootstrap"
          text="Bootstrap, Rebuilt for React"
          imageUrl={codewars}
          linkUrl={"/reactBootstrap"}
        />
        <HomeCard
          title="CSS Grid"
          text="Layouts and Design using CSS Grid"
          imageUrl={javascript}
          linkUrl={"/grid"}
        />
        <HomeCard
          title="Flexbox"
          text="Layouts and Design using Flexbox"
          imageUrl={javascript}
          linkUrl={"/flexbox"}
        />
      </div>
    </Container>
  );
};

export default Algo;
