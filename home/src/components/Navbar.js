import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";



const Navbar = () => {
    return (
        <div className='Container'>

            <nav className="navbar navbar-expand-lg navbar navbar-light bg-light  ">
                <NavLink className="navbar-brand title" to="/"><span className='title'>Inventry Solutions</span></NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item  ">
                            <NavLink className="nav-link" to="/" >Home <span class="sr-only"></span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign up </NavLink>
                        </li>
                        {/* <li class="nav-item">
                            <NavLink className="nav-link" to="/Logout">Logout</NavLink>
                        </li> */}

                    </ul>
                    <div className='topRight'>
                        <div className="topbarIconsContainer">
                            <NotificationsNone />
                            <span className="topIconBag">2</span>
                        </div>
                        <div className="topbarIconsContainer">
                            <Language />
                            <span className="topIconBag">2</span>
                        </div>
                        <div className="topbarIconsContainer">
                            <Settings />
                        </div>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar" />
                    </div>
                </div>
            </nav>

        </div>


    )
}

export default Navbar