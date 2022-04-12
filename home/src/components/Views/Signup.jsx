import React from "react";
import Left from "../SignUp/left";
import Right from "../SignUp/right";
//for testing purpose
import styles from '../SignUp/styles.module.css';

const SignUp = (props) => {
  return (
    <div className={styles.signin_container}>
      <Left switch = {props.switchSignUp}/>  
      <Right />
    </div>
  );
};

export default SignUp;
