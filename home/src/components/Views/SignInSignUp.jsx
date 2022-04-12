import React, { useState } from "react";
import SignIn from "./Signin";
import SignUp from "./Signup";

const SignInSignUp = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleSignInSignUp = () => {
    setShowSignIn((prev) => !prev);
  };
  return (
    <div>
      {showSignIn ? <SignIn switchSignIn={toggleSignInSignUp} /> : <SignUp switchSignUp={toggleSignInSignUp}/>}
    </div>
  );
};

export default SignInSignUp;

