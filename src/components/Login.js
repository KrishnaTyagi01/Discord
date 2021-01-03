import React from 'react';
import '../css/Login.css';
import { Button } from '@material-ui/core';
import {auth, provider} from '../firebase';

function Login() {
    const signin = ()=>{
        auth.signInWithPopup(provider)
        .catch(error=>alert(error.message));
    }


    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/1200px-Discord_logo.svg.png"
                 alt="logo"/>
            </div>

            <Button onClick={signin}>Sign In</Button>
        </div>
    )
}
 
export default Login
