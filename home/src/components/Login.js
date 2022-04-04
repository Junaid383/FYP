import React, { useState } from 'react'
import "./Signin/styles.css";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOutlined from "@material-ui/icons/LockOutlined";
// import signinBoy from '../Images/Signin/signinBoy.png'
// import googleIcon from '../Images/Signin/google.png'
import { NavLink, useHistory, userHistroy } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login() {


  const histroy = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginUser = async (e) => {
    e.preventDefault();
    
   const  toastEx = () => toast("Wow so easy !");

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
    // console.log(data);

    if (res.status === 400 || !data) {
      
      window.alert("Error");


    }
    else {
      window.alert('Logged IN');
      histroy.push("/employee/home");

    }

  }
  


  return (
    <div>
      <div id="loginBack">
        <div id="leftSide">
          <h1>Login</h1>

          <form method="POST">
            <label className="left_card_grey">Email</label>
            <input type="text" className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="  Enter your email address" />

            <label className="left_card_grey">Password</label>
            <input className="" type="password"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="  Enter your password" />


            <button type='submit' id="signUpBut" onClick={loginUser}  >Login</button>
            <a href="/googleLogin" id="googleLogin"><i class="fab fa-google"></i>Sign In With Google</a>

          </form>
          <a id="dontHave" href="/signUp">Don't have an Account?</a><br></br>
        </div>
        <div id="rightSide">
          <h1>Inventroy Solutions</h1>
          {/* <img className="picture" src={signinBoy} /> */}
          {/* <p >Inventry Solutions</p> */}
          <p>We provide the most affordable and comfortable prices in pakistan</p>
        </div>
      </div>

    </div>






  )
}

export default Login