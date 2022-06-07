import React, { useState } from 'react'
import "./Signin/styles.css";

import { NavLink, useHistory, userHistroy } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

import GoogleButton from './googleButton/GoogleLoginButton'

// import toast, { Toaster } from 'react-hot-toast';



toast.configure()
function Login() {


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

    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      toast.error("Login Failed.", {
        position: "top-center",
        reverseOrder: false,
        autoClose: 1500,
      })

    }
    else {
      toast.success('Login Successful', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
     setTimeout(()=>{
       histroy.push(`/employee/${data.empID}`); 
      
     },1000)

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

            {/* <Link to={`/employee/${data._id}`}>
              <button type='submit' id="signUpBut" onClick={loginUser}  >Login</button>
            </Link> */}
            <GoogleButton/>

            {/* <a href= "" id="googleLogin"><i class="fab fa-google"></i>Sign In With Google</a> */}

          </form>
          <a id="dontHave" href="/signUp">Don't have an Account?</a><br></br>
        </div>
        <div id="rightSide">
          <h1>Inventory Solutions</h1>
          <p>We provide the most affordable and comfortable prices in pakistan</p>
        </div>
      </div>

{/* <Toaster /> */}
    </div>






  )
}

export default Login