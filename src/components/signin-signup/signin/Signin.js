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
  googleProvider,
  facebookProvider,
  emailProvider,
  checkIfCurrentUser,
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
    try {
      checkIfCurrentUser(email).then((dataArray) => {
        const matches = dataArray.filter((user) => user.email == email);
        console.log(matches);
      });

      await auth.signInWithEmailAndPassword(email, password);
      setValues({
        ...values,
        error: false,
        success: true,
        email: "",
        password: "",
        loading: false,
      });
    } catch (error) {
      console.log(error);
      if (error && error.code == "auth/wrong-password") {
        setValues({
          ...values,
          error: error.message,
          success: false,
          loading: false,
        });
      }
    }
  };

  const signInForm = () => (
    <Form onSubmit={handleSubmit}>
      <h2>Have an account? Sign In.</h2>
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
          <i className="fab fa-google"></i>
          Sign In with Google
        </Button>
        <Button
          variant="secondary"
          type="submit"
          className="signInWithFacebookButton"
        >
          <i className="fab fa-facebook-square"></i>
          Sign In with Facebook
        </Button>
      </span>
    </Form>
  );

  return <div className="sign-in-form">{signInForm()}</div>;
};
export default Signin;
