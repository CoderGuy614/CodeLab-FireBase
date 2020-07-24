import React from "react";

import Signin from "../../components/signin-signup/signin/Signin";
import Signup from "../../components/signin-signup/signup/Signup";

import "./signin-signup.css";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <div className="signin">
        <Signin />
      </div>
      <div className="signup">
        <Signup />
      </div>
    </div>
  );
};

export default SignInAndSignUp;
