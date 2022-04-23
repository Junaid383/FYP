
import React from 'react'
import GoogleLogin from 'react-google-login'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function Toasttest() {
    


    return (
        <div>

            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
        </div>
    )
}

export default Toasttest