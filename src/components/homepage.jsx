import React from "react";
import { Button, Input } from "./formComponents";
import { Container } from "react-bootstrap";
import "./css/homepage.css";

function Login() {
  return (
    <div className="form-container">
      <img src="./css/spotify-logo.png" alt="Spotify Logo" />
      <Container className="main-container">
        <p className="text-white font-weight-bold mt-2">
          To continue, Log into spotify
        </p>
        <Button name="Continue with Facebook" id="facebook-login" />
        <Button name="Continue with Apple" id="apple-login" />
        <Button name="Continue with Google" id="common-login" />
        <Button name="Continue with Phone Number" id="common-login" />
        <p className="mt-2 mb-0">
          <hr /> <span className=" text-black font-weight-bold ">OR</span>
          <hr />
        </p>
        <Input
          type="text"
          placeholder="Email Address or Username"
          name="loginEmail"
          className="mb-0"
          label="Email Address or Username"
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          name="loginPassword"
        />
        <p className="font-weight-bold my-4">Forgot your Password?</p>
        <div className=" login-container">
          <div className="mr-4 mt-3">
            <input type="checkbox" className="remember-me-checkbox" />
            <span className="font-weight-bold"> Remember Me</span>
          </div>
          <Button name="Login" id="login-btn" />
        </div>
        <hr className="mt-4 " />
        <p className="font-weight-bold my-4">Don't have an account?</p>
        <Button name="Sign up for spotify" id="common-login" />
      </Container>
    </div>
  );
}

export default Login;
