import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./navbar.styles.css";

import { ReactComponent as Logo } from "../assets/crown.svg";

const NavBar = () => {
  const [key, setKey] = useState("home");
  const handleSelect = (key) => {
    setKey(key);
  };

  return (
    // <div className='main-nav'>
    <Navbar className="main-nav" bg="primary" variant="dark">
      <Navbar.Brand className="nav-brand" href="/">
        <Logo /> <span className="brand-name">CODELAB</span>
      </Navbar.Brand>
      <Nav className="nav-links">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/articles">ARTICLES</Nav.Link>
        <Nav.Link href="/signin">SIGNIN</Nav.Link>
      </Nav>
    </Navbar>
    // </div>
  );
};

export default NavBar;
