import React from "react";
import Right from "../Signin/Right";
import Left from "../Signin/Left";
import styles from '../Signin/styles.module.css';

const SignIn = (props) => {
  return (
    <div className={styles.signin_container}>
      <Left switch= {props.switchSignIn}/>
      <Right/>
    </div>
  );
}

export default SignIn;
