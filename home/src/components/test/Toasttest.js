
import React from 'react'
import GoogleLogin from 'react-google-login'

function Toasttest() {
    const handleLogin = (data) =>{
        console.log(data);
    }
    const handleFailure = (result) =>{
        console.log(result);
        alert(result);
    }



    return (
        <div>
            <GoogleLogin
                clientId="742464243410-jjfqh4gq2ab47i7psqlubh1afvcfaaco.apps.googleusercontent.com"
                buttonText='Login with Google'
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            >

            </GoogleLogin>

        </div>
    )
}

export default Toasttest