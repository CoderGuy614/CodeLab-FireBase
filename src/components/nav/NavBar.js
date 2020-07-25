import React from "react";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navbar.styles.css";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebaseUtils";

const NavBar = ({ currentUser, setAlert }) => {
  return (
    <Navbar className="main-nav" bg="primary" variant="dark">
      <Navbar.Brand className="nav-brand" href="/">
        <Logo /> <span className="brand-name">CODELAB</span>
        {currentUser && (
          <h3 className="hello-user">Welcome, {currentUser.email}</h3>
        )}
      </Navbar.Brand>
      <Nav className="nav-links">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/articles">ARTICLES</Nav.Link>
        {currentUser ? (
          <Button onClick={() => auth.signOut()}>SIGNOUT</Button>
        ) : (
          <Nav.Link href="/signin">SIGNIN</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default connect(null, { setAlert })(NavBar);
