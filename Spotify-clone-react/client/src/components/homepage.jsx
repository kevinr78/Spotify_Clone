import React from "react";
import { Nav ,Container ,Image, Form} from "react-bootstrap";
import '../css/homepage.css'
import Login from './Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,Link
  } from "react-router-dom";

function HomePage(){
    return (
        <Router>
        <Container fluid  className="px-0" >
        
          <Nav className="justify-content-end d-flex navbar-container"  activeKey="/home">
          <div className="logo-container">
          <Image src="../assets/spotify-logo.png" rounded alt="SPotify Logo" />
          </div>
          <NavLink to="/login" activeClassName="hurray">
            React
            <Route path="/login">
            
              <Login />
            </Route>
          </NavLink>

        </Nav>
        <Image className="image-background" id="dff"  src="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Spotify Logo" />
      </Container>
      </Router>
    )
}


export default HomePage