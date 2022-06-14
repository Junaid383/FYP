import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleButton from './googleButton/GoogleLoginButton'



toast.configure()
function Signup() {

  const history = useHistory();
  const [user, setUser] = useState({
    username: "", name: "", email: "", phone: "", password: "", cpassword: "", address: ""
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })

  }

  const PostData = async (e) => {
    e.preventDefault();

    const { username, name, email, phone, password, cpassword, address } = user;

    const res = await fetch("/admin/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        username, name, email, phone, password, cpassword, address

      })
    });
    console.log(res);

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {

      toast.error("Registration Failed.", {
        position: "top-center",
        reverseOrder: false,
        autoClose: 1500,
      });
      console.log("Unsuccessfull");

    } else {
      toast.success('Registration Successful', {
        position: "top-center",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        
        history.push('/login');
            }, 2000);
    }

  }




  return (


    <div id="loginBack">
      <div id="leftSide">
        <h2>Create New Account</h2>

        <form method='POST' className='form'>
          <div className="form-group">
            <label className="left_card_grey">Username</label>
            {/* <MailOutlineIcon className="card_input_icon" /> */}
            <input type="user" className='form-control'
              name='username'
              autoComplete='off'
              value={user.username}
              onChange={handleInputs}
              placeholder="Username"
              required />

          </div>

          <div className="form-group">
            <label className="left_card_grey">Name</label>
            {/* <PermIdentityIcon className="card_input_icon" /> */}
            <input type="text" className='form-control'
              name='name'
              autoComplete='off'
              value={user.name}
              onChange={handleInputs} placeholder="Name" />
          </div>


          <div className="form-group">
            <label for="left_card_grey">Email address</label>
            {/* <LockOutlined className="card_input_icon" /> */}
            <input type="email" name='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$'
            
              autoComplete='off'
              value={user.email}
              onChange={handleInputs}
              class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />



          </div>

          <div className="form-group">
            <label className="left_card_grey">Phone</label>
            {/* <LockOutlined className="card_input_icon" /> */}
            <input className="form-control" type="tel" name='phone'
              autoComplete='off'
              pattern="^\d{4}-\d{3}-\d{4}$"
              value={user.phone}
              onChange={handleInputs}
              placeholder="XXXX-XXX-XXXX" 
              required/>
          </div>

          <div className="form-group">
            <label className="left_card_grey">Address</label>
            {/* <LockOutlined className="card_input_icon" /> */}
            <input className="form-control" type="Address" name='address'
              autoComplete='off'
              value={user.address}
              onChange={handleInputs}
              placeholder="  Address" />
          </div>

          <div class="form-group">
            <label for="left_card_grey">Password</label>
            <input type="password" class="form-control" name='password'
              autoComplete='off'
              value={user.password}
              onChange={handleInputs} id="exampleInputPassword1" placeholder="Password" />
          </div>


          <div className="form-group">
            <label className="left_card_grey">Confirm Password</label>
            {/* <LockOutlined className="card_input_icon" /> */}
            <input className="form-control" type="password" name='cpassword'
              autoComplete='off'
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="  Confirm your password" />
          </div>


          <div>
            <button type='submit' name='signup' value="register" id="signUpBut"
              onClick={PostData}>Create Account</button>
          </div>

          <GoogleButton />

          {/* <a href="/googleLogin" id="googleLogin"><i class="fab fa-google"></i>
          Sign Up With Google
          
          </a> */}
          <a id="dontHave" href="/login">Already an Account?</a><br></br>


        </form>


      </div>
      <div id="rightSide">
        <h1>Inventroy Solutions</h1>
        <p>We provide the most affordable and comfortable prices in pakistan</p>
      </div>
    </div>

  );
}

export default Signup;