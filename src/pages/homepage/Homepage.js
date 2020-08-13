import React from "react";
import "./homepage.scss";
import { Jumbotron, Container } from "react-bootstrap";
import HomeCard from "./HomeCard";

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
        <HomeCard title="I am a Title" text="I am some text" />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </Container>
  );
};

export default Homepage;
