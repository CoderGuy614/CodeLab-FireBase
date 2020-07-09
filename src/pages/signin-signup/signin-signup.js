import React from "react";

import Signin from "../../components/signin-signup/signin/Signin";
import Signup from "../../components/signin-signup/signup/Signup";

import "./signin-signup.css";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SignInAndSignUp;
