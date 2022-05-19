import React, { useEffect, useState } from "react";
import {useHistory } from "react-router-dom";
import { ToastContainer , toast } from 'react-toastify';


import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

export default function User() {

  const history = useHistory();

  const [data, setData] = useState([]);

  const location = useLocation();
  const userID = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1,
    location.pathname.length
  );
  // console.log(userID);
  // ========================Data sending and fetching
  const FetchData = async (e) => {
    const res = await fetch("/admin/user/:userID", {
      ///newEMP route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,
      }),
    });
    const data1 = await res.json(); //getting data from backend newEMP line 245
    // console.log(data1);
    setData(data1);
  };

  useEffect(() => {
    FetchData();
  }, []);

  // =============================UPDATA req=====================
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  });

let name , value;
const handleInputs = (e)=>{
  name = e.target.name;
  value = e.target.value;

  setUser({ ...user, [name]: value });
}

const PostData = async () => {
  // e.preventDefault();

  const { username, name, email, address , phone } = user;
  const res = await fetch("/admin/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID,
      username,
      name,
      email,
      address, 
      phone
    }),
  });
  const updata = await res.json();
  console.log(updata);
  if (res.status === 422 || !updata) {
      
    toast.error("Fill all Fields.", {
      position: "top-center",
      reverseOrder: false,
      autoClose: 1500,
    })
  } else {
    toast.success('User Update Successful', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    history.push("/admin/users/");
  }

}














  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Employee</h1>
        <Link to="/admin/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Employee</span>
              <span className="userShowUserTitle">Profile</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{data.username}</span>
            </div>

            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{data.name}</span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{data.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{data.address}</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <for className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInputs}
                  type="text"
                  placeholder="Username"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                name="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                  type="text"
                  placeholder="Name"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                name="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                  type="text"
                  placeholder="Email"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                name="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                  type="text"
                  placeholder="Enter contact number"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                name="address"
                autoComplete="off"
                value={user.address }
                onChange={handleInputs}
                  type="text"
                  placeholder="Enter new address"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Active</label>
                <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button 
              type="submit"
              name="signup"
              value="register"
              onClick={PostData}
              className="userUpdateButton">Update</button>
            </div>
          </for>
        </div>
      </div>
    </div>
  );
}

