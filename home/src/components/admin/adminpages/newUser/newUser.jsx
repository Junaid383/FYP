import React, { useState } from "react";
// import"from"'./newuser.css';
import "./newuser.css";
import { NavLink, useHistory } from "react-router-dom";

export default function newUser() {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    cpassword:"",
    address: "",
    phone: "",
  });
 
  let name, value;
  
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
 
  const PostData = async (e) => {
    e.preventDefault();

    const { username, name, email, password ,cpassword, address , phone } = user;

    const res = await fetch("/admin/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        name,
        email,
        password,
        cpassword,
        address, 
        phone
      }),
    });
    console.log(res);

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      
      window.alert("Invalid Registration");
    } else {
      window.alert(" Employee Registered Successfull");

      history.push("/admin/users");
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Employee</h1>
      <form action="POST" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input
            className="ipfield"
            autoComplete="off"
            name = "username"
            value={user.username}
            onChange={handleInputs}
            type="text"
            placeholder="Ali"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input
           name = "name"
            className="ipfield"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            type="text"
            placeholder="Ali Asad"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input
           name = "email"
            className="ipfield"
            autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            type="email"
            placeholder="ali@gmail.com"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input
           name = "password"
            className="ipfield"
            autoComplete="off"
            value={user.password}
            onChange={handleInputs}
            type="password"
            placeholder="password"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Confirm Password</label>
          <input
           name = "cpassword"
            className="ipfield"
            autoComplete="off"
            value={user.xpassword}
            onChange={handleInputs}
            type="password"
            placeholder="xpassword"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input
           name = "phone"
            className="ipfield"
            autoComplete="off"
            value={user.phone}
            onChange={handleInputs}
            type="text"
            placeholder="+92 316 6201209"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input
            name = "address"
            className="ipfield"
            autoComplete="off"
            value={user.address}
            onChange={handleInputs}
            type="text"
            placeholder="Lahore | Pakistan"
          />
        </div>

        {/* <div className="newUserItem">
                    <div className="newUserGender">
                        <label htmlFor="">Gender</label>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div> */}
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button
          id="newUserButton"
          type="submit"
          name="signup"
          value="register"
          onClick={PostData}
        >
          Create
        </button>
      </form>
    </div>
  );
}
