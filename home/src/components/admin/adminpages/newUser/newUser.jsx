import React from 'react'

// import"from"'./newuser.css';
import './newuser.css'

export default function newUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New Employee</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label  htmlFor="">Username</label>
                    <input className='ipfield'  type="text" placeholder='Ali' />
                </div> 

                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input  className='ipfield' type="text" placeholder='Ali Asad' />
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input  className='ipfield' type="email" placeholder='ali@gmail.com' />
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input  className='ipfield' type="password" placeholder='password' />
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input  className='ipfield' type="text" placeholder='+92 316 6201209' />
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input  className='ipfield' type="text" placeholder='Lahore | Pakistan' />
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
                <button id="newUserButton">Create</button>
            </form>


        </div>
    )
}