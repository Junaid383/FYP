import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWraper'>
                <div className='topLeft'>
                    <span className="logo">Admin Dashboard</span>
                </div>
                <div className='topRight'> 
                    <div className="topbarIconsContainer">
                         <NotificationsNone/>
                         <span className="topIconBag">2</span>
                    </div> 
                    <div className="topbarIconsContainer">
                         <Language/>
                         <span className="topIconBag">2</span>
                    </div> 
                    <div className="topbarIconsContainer">
                         <Settings/>
                    </div> 
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar" />
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
