import "./user.css";
import React from 'react';

import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from "react-router-dom";


export default function User() {
  return <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit Employee</h1>
     <Link to="/employee/newUser">
      <button className="userAddButton">Create</button>
     </Link>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt="" className="userShowImg" />
          <div className="userShowTopTitle">
            <span className="userShowUserName">Ali Asad</span>
            <span className="userShowUserTitle">Engineer</span>
          </div>
        </div>
        <div className="userShowBottom" >
          <span className="userShowTitle">Account Details</span>

          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">aliasad00</span>
          </div>
         

          <span className="userShowTitle">Contact Details</span>

          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">+92 316 6201209</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">aliasad00@gmail.com</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">Lahore | Pakistan</span>
          </div>

        </div>
      </div>

      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <for className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label >Username</label>
              <input type="text" placeholder="aliasad00" className="userUpdateInput" />
            </div>

            <div className="userUpdateItem">
              <label >Full Name</label>
              <input type="text" placeholder="Ali Asad" className="userUpdateInput" />
            </div>

            <div className="userUpdateItem">
              <label >Email</label>
              <input type="text" placeholder="aliasad00@gmail.com" className="userUpdateInput" />
            </div>

            <div className="userUpdateItem">
              <label >Phone</label>
              <input type="text" placeholder="+92 316 6201209" className="userUpdateInput" />
            </div>

            <div className="userUpdateItem">
              <label >Address</label>
              <input type="text" placeholder="Lahore | Pakistan" className="userUpdateInput" />
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
            <button className="userUpdateButton">Update</button>
          </div>
        </for>
      </div>

    </div>

  </div>;
}
