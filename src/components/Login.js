import React from "react";
import "../css/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import logo from "../css/discord.png";
function Login() {
  const signin = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="logo" />
      </div>

      <Button onClick={signin}>Sign In</Button>
    </div>
  );
}

export default Login;
