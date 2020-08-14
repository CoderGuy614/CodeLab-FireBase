import React from "react";
import "./homepage.scss";
import { Jumbotron, Container } from "react-bootstrap";
import HomeCard from "./HomeCard";

import reactBootstrap from "../../img/reactBootstrap.png";
import bootstrap4 from "../../img/bootstrap4.jpeg";
import cssGrid from "../../img/css.png";
import flexbox from "../../img/flexbox.jpeg";
import material from "../../img/material.png";

const Homepage = () => {
  return (
    <Container>
      <Jumbotron className="my-3 py-3">
        <h1 className="text-primary">Code Lab</h1>
        <p className="text-dark">
          This website is a code playground / sandbox for learning and
          experimentation.
        </p>
      </Jumbotron>

      {/* Cards Section */}
      <div className="card-container">
        <HomeCard
          title="Bootstrap4"
          text="Snippets and examples of the most popular front end framework"
          imageUrl={bootstrap4}
          linkUrl={"/bootstrap"}
        />
        <HomeCard
          title="React Bootstrap"
          text="Bootstrap, Rebuilt for React"
          imageUrl={reactBootstrap}
          linkUrl={"/reactBootstrap"}
        />
        <HomeCard
          title="CSS Grid"
          text="Layouts and Design using CSS Grid"
          imageUrl={cssGrid}
          linkUrl={"/grid"}
        />
        <HomeCard
          title="Flexbox"
          text="Layouts and Design using Flexbox"
          imageUrl={flexbox}
          linkUrl={"/flexbox"}
        />
        <HomeCard
          title="MaterialUI"
          text="Components and features of MaterialUI"
          imageUrl={material}
          linkUrl={"/materialui"}
        />
        <HomeCard
          title="1-Line Layouts"
          text="Some neat layouts using minimal lines of CSS"
          imageUrl={cssGrid}
          linkUrl={"/onelinelayouts"}
        />
      </div>
    </Container>
  );
};

export default Homepage;
