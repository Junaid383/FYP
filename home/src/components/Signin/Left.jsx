import React, { useState } from 'react'
import styles from "./styles.module.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlined from "@material-ui/icons/LockOutlined";
import googleIcon from '../../Assets/Images/Signin/google.png';
import { NavLink, useHistory, userHistroy } from 'react-router-dom';





const Left = (props) => {



    const histroy = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const loginUser = async (e) => {
      e.preventDefault();
  
      const res = await fetch('/signin', {  //this signin from 'newEMP.js'
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      const data = res.json();
      console.log(data);
      if (res.status === 400 || !data) {
        window.alert("Invalid");
      }
      else {
        // window.alert('Logged IN');
        histroy.push("/admin/home");
      }
  
    }
  



  return (
    <div className={styles.left_card}>
      <img src={googleIcon}/>
      <h3 className={styles.left_card_title}>Sign in</h3>
      {/* <p>If you don’t have an account registered</p>
      <p>You can <span className={styles.blueColor} onClick={props.switch}>Register here !</span></p>
       */}
      <div className={styles.form_group}>
        <label className={styles.left_card_grey}>Email</label>
        <div className={styles.card_input_group}>
          <MailOutlineIcon className={styles.card_input_icon}/>
          <input type="text" placeholder="  enter your email address" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
        </div>
      </div>
      <div className={styles.form_group}>
        <label className={styles.left_card_grey}>password</label>
        <div className={styles.card_input_group}>
          <LockOutlined className={styles.card_input_icon}/>
          <input className="" type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="  Enter your password" />
        </div>
        <div className={styles.remember_me_forget}>
            <p className={styles.remember}>Remember me</p>
            <p className={styles.forgot}>Forgot password?</p>
        </div>
      </div>
      <div>
          <button className={styles.login_btn} type="submit" onClick={loginUser}>Login</button>
      </div>
      <img src={googleIcon}/>
      <p className={styles.alt_login}>or login with</p>
      <img className={styles.google_icon} src={googleIcon}/>
    </div>
  );
};

export default Left;
