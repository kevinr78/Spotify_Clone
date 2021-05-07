import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../css/login.css";
import logo from '../assets/spotify-logo.png'; // with import

function Login() {

const initialState = {
  loginEmail: "",
  loginPassword:""
}
const [formData, setFormData] = useState(initialState)


  async function handlevent(e){
      e.preventDefault();
      e.stopPropagation();
      console.log(formData);
   
      let login = await  fetch('/',{
        body:JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
        method:"POST"
      });
  
      let loggedInCustomer = await login.json().then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
  
    }

     const handleChange=(e)=>{
       e.preventDefault();
     
       setFormData({...formData,[e.target.name]:e.target.value})
      
     }

    function validate(e){
    if( e.target.type=== "text"){
        let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let email = document.getElementById('loginEmail');
        let emailErr = document.getElementById('email-err');
        if (e.target.value.match(regex)) {
          email.classList.add('success');
          emailErr.innerHTML = "&#10004; Valid Email "  
          emailErr.classList.add('success-text')      
          return true;
      
        } else {
          email.classList.add('danger')     
          emailErr.innerHTML = "&#10006; Invalid Email "    
          emailErr.classList.add('danger-text')          
          return false;
      
        }
    } else{
      let regex =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
      let password = document.getElementById('loginPassword');
      let passwordError = document.getElementById('password-err');
      if (e.target.value.match(regex)) {
        password.classList.add('success')    
        passwordError.innerHTML = "&#10004; Valid Password "  
        passwordError.classList.add('success-text')         
        return true;
    
      } else {
        password.classList.add('danger')     
        passwordError.innerHTML = "&#10006; Minimum 6 characters, at least one letter, one number and one special character:"    
        passwordError.classList.add('danger-text')          
        return false;
    
      }
    }
    }

  return (
    <div className="form-container">
      <Container className="main-container" >
         
      <img src={logo} alt="Spotify Logo" className="spotify-logo"/>
        <p className="text-white font-weight-bold mt-2">
          To continue, Log into spotify
        </p>
        
        <button className="form-button "id="facebook-login">
        Continue with Facebook
    </button>
    
        <button className="form-button  common-login mb-4" >
        Continue with Google
    </button>  
  <span className=" text-black font-weight-bold ">OR</span>
    <form  method="post">
        <div className="input-group mt-2">
          <p className="mb-0">
            <label>Email Address or Username</label>
          </p>
          <input
            className="form-input mb-0"
            required
            type="text"
            placeholder="Email Address or Username"
            name="loginEmail"
            id="loginEmail"
          
            onBlur={(e)=> validate(e)}
            onChange= {handleChange}
          />
          <p id="email-err"> </p>
        </div>
   
        <div className="input-group ">
          <p className="mb-0">
            <label>Password</label>
          </p>
          <input
          className="form-input"
            type="password"

            placeholder="Password"
            id="loginPassword"
            label="Password"
            name="loginPassword"
            required
            onBlur={(e)=> validate(e)}
            onChange= {handleChange}
          />
          <p id="password-err" ></p>
        </div>
        <p className="font-weight-bold forgot-password-link mt-3">Forgot your Password?</p>
        <div className=" login-container">
          <div className="mr-4">
            <input name="true" type="checkbox" className="remember-me-checkbox" />
            <span className="font-weight-bold"> Remember Me</span>
          </div>
          <button type="submit" className="form-button ml-4" id="login-btn" onClick={handlevent} >
          Login
          </button>  
        </div>
        </form>
        <p className="font-weight-bold my-4">Don't have an account?</p>
        <button  className="form-button common-login" >Sign up for spotify</button>
      
      </Container>

    </div>
  );
}

export default Login;
