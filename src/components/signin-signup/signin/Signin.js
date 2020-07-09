import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./sign-in-form.css";

import {
  auth,
  createUserWithEmailAndPassword,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../../firebase/firebaseUtils";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    loading: false,
    redirect: false,
  });

  const { email, password, error, loading, redirect } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(values);
  };

  const alert = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
  };

  const signInForm = () => (
    <Form onSubmit={handleSubmit}>
      <h2>Already have an account? Sign In.</h2>
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

      {alert()}
      <Button className="submit" variant="primary" type="submit">
        Submit
      </Button>
      <span className="inline-buttons">
        <Button
          variant="secondary"
          type="submit"
          className="signInWithGoogleButton"
          onClick={signInWithGoogle}
        >
          Sign In with Google
        </Button>
        <Button
          variant="secondary"
          type="submit"
          className="signInWithFacebookButton"
        >
          Sign In with Facebook
        </Button>
      </span>
    </Form>
  );

  return <div className="sign-in-form">{signInForm()}</div>;
};
export default Signin;
