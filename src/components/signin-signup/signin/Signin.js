import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "../../loading/Spinner";
import Alert from "react-bootstrap/Alert";
import "./sign-in-form.css";

import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
  checkIfCurrentUser,
} from "../../../firebase/firebaseUtils";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    redirect: false,
    loading: false,
  });

  const { email, password, error, loading, redirect } = values;
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
    setValues({ ...values, loading: true });
    try {
      const methods = await auth.fetchSignInMethodsForEmail(email);
      if (methods.includes("google.com")) {
        return setValues({
          ...values,
          loading: false,
          error:
            "This email is associated with a Goggle Account. Please Sign In with Google",
        });
      }

      checkIfCurrentUser(email).then((dataArray) => {
        const matches = dataArray.filter((user) => user.email == email);
        if (matches.length > 0) {
          setValues({ ...values, error: "Account with this ", loading: false });
        }
      });

      await auth.signInWithEmailAndPassword(email, password);
      setValues({
        ...values,
        error: false,
        success: true,
        loading: false,
        email: "",
        password: "",
      });
    } catch (error) {
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

  const facebookSignIn = async () => {
    try {
      const loginResult = await signInWithFacebook();
      if (loginResult.credential) {
        const token = loginResult.credential.accessToken;
        const user = loginResult.user;
      }
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const credential = error.credential;
        const email = error.email;
        const methods = await auth.fetchSignInMethodsForEmail(email);

        if (methods[0] === "google.com") {
          signInWithGoogle()
            .then((user) => {
              console.log(user.user);
              return user.user.linkWithCredential(credential);
            })
            .then(() => {
              console.log("GOOGLE AND FACEBOOK SUCCESSFULLY LINKED");
            });
          return;
        }
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
          className="signInWithGoogleButton"
          onClick={signInWithGoogle}
        >
          <i className="fab fa-google"></i>
          Sign In with Google
        </Button>
        <Button
          variant="secondary"
          className="signInWithFacebookButton"
          onClick={facebookSignIn}
        >
          <i className="fab fa-facebook-square"></i>
          Sign In with Facebook
        </Button>
      </span>
    </Form>
  );

  return <>{loading ? <Spinner /> : signInForm()}</>;
};
export default Signin;
