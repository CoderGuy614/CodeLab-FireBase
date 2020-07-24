import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./sign-up-form.css";

import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebaseUtils";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    error: false,
    success: false,
    loading: false,
    redirect: false,
  });

  const { email, password, confirmPassword, error, loading, redirect } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const alert = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setValues({ ...values, error: "Passwords Do Not Match" });
      return;
    }
    try {
      const { user } = await auth
        .createUserWithEmailAndPassword(email, password)
        .then((response) => console.log(response));
      await createUserProfileDocument(user);
      setValues({
        email: "",
        password: "",
        succes: true,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      if (
        (error && error.code == "auth/invalid-email") ||
        error.code == "auth/email-already-in-use"
      ) {
        var errorMessage = error.message;
        setValues({ ...values, success: false, error: errorMessage });
        console.log(errorMessage);
      }
    }
  };

  const signUpForm = () => (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up with Email</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange("email")}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange("password")}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange("confirmPassword")}
        />
      </Form.Group>
      {alert()}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  return <>{signUpForm()}</>;
};

export default Signup;
