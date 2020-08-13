import React from "react";
import "./bootstrap.scss";
import { Card } from "react-bootstrap";

const Bootstrap = () => {
  return (
    <div className="m-3 text-center">
      <h2 className="d-block text-primary">
        <u> BootStrap Sandbox</u>
      </h2>

      {/* Buttons */}
      <h4 className="text-center mt-3">Buttons</h4>
      <button className="btn btn-outline-primary mx-2">Primary</button>
      <button className="btn btn-outline-secondary mx-2">Secondary</button>
      <button className="btn btn-outline-info mx-2">Info</button>
      <button className="btn btn-outline-warning mx-2">Warning</button>
      <button className="btn btn-outline-danger mx-2">Danger</button>
      <button className="btn btn-outline-dark mx-2">Dark</button>

      {/* Jumbotron */}
      <h4 className="text-center mt-3">Jumbotron</h4>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid Jumbotron</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            recusandae voluptatibus, natus architecto asperiores a.
          </p>
        </div>
      </div>

      {/* Cards */}
      <h4 className="text-center mt-3">Cards</h4>
      {/* Simple Card */}
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <h6 className="card-subtitle text-muted">Card subtitle</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
            <a className="btn btn-primary" href="#">
              Read More
            </a>
          </div>
        </div>
        {/* Card with Image */}
        <div className="card">
          <img
            className="card-img-top"
            src="https://source.unsplash.com/random/300x200"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
            <a className="btn btn-success btn-block" href="#">
              Read More
            </a>
          </div>
        </div>

        {/* Card with Header */}
        <div class="card">
          <div class="card-header">My Card</div>
          <div class="card-body">
            <h4 class="card-title">Card Title</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              perspiciatis.
            </p>
            <a class="btn btn-info" href="#">
              Read More
            </a>
          </div>
        </div>

        {/* Header, Footer, Centered  */}
        <div class="card text-center">
          <div class="card-header">My Card</div>
          <div class="card-body">
            <h4 class="card-title">Card Title</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              perspiciatis.
            </p>
            <a class="btn btn-dark" href="#">
              Read More
            </a>
          </div>
          <div class="card-footer text-muted">2 Days Ago</div>
        </div>

        {/* Card Image Overlay */}
        <div class="card text-white">
          <img
            class="card-img"
            src="https://source.unsplash.com/random/1000x1000"
            alt=""
          />
          <div class="card-img-overlay">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        {/* Card with Nav  */}
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li>
                <a a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li>
                <a a className="nav-link" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              perspiciatis.
            </p>
            <a className="btn btn-success" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
