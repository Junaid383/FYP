import React from 'react'
import { useHistory } from 'react-router-dom';

import GoogleLogin from 'react-google-login'
import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
function GoogleButton() {

    const history = useHistory();

    const handleLogin = (response) => {

        console.log(response);

        axios({
            method: "POST",
            url: "http://localhost:3000/googlelogin",
            data: { tokenId: response.tokenId }
        }).then(response => {
            // console.log("Google Login Success",response);
            toast.success('Registered  Successfully', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            history.push('/login');
        })
    }
    const handleFailure = (result) => {
        // console.log(result);
        // alert(result);
        toast.error("Registration Canceled.", {
            position: "top-center",
            reverseOrder: false,
            autoClose: 1500,
        })

    }


    const costomizedStyle = {

        width: 429,
        height: 53,
        borderradius: 32,

        // fontfamily: Poppins,
        fontSize: 17,
        lineheight: 25,
        // color: white,

        // position: relative,
        // top: 75,
}





return (
    <div>
        <GoogleLogin
            id='googleLogin'
            clientId="742464243410-jjfqh4gq2ab47i7psqlubh1afvcfaaco.apps.googleusercontent.com"
            buttonText='Sign Up With Google'
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            theme="dark"
            style={costomizedStyle}

        >

        </GoogleLogin>



    </div>
)
}

export default GoogleButton