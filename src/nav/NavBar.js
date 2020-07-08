import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "./navbar.styles.css";

const NavBar = () => {
  const [key, setKey] = useState("home");
  const handleSelect = (key) => {
    setKey(key);
  };

  return (
    <Nav className="main-nav" fill={true} defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="about" eventKey="link-1">
          Link
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="contact" eventKey="link-2">
          Link
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
