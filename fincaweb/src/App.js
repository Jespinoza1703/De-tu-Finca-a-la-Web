import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet-geosearch/dist/geosearch.css';
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";



const App = () => {

  const [appVars, setApp] = useState({
    isLoggedIn: false,
    currentUser: undefined
  });


  const {isLoggedIn, currentUser} = appVars;


  const checkRegularConsumer = () =>{
    let result = false;
    if (isLoggedIn && currentUser.role === 'regularConsumer'){
      result = true;
    }
    return result;
  };

  const checkWholesaleConsumer = () =>{
    let result = false;
    if (isLoggedIn && currentUser.role === 'wholesaleConsumer'){
      result = true;
    }
    return result;
  };

  const checkProducer = () =>{
    let result = false;
    if (isLoggedIn && currentUser.role === 'producer'){
      result = true;
    }
    return result;
  };


  const logOut = () => {
    AuthService.logout();
  };

  const userNavbar= () =>{
    if (!isLoggedIn){
      return (
          <Router>
            <div>
              <nav className="navbar navbar-expand navbar-custom">
                <Link to={"/"} className="navbar-brand">
                  De la Finca a tu Casa
                </Link>

                    <div className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                          Login
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                          Sign Up
                        </Link>
                      </li>
                    </div>
              </nav>

              <div className="container mt-3">
                <Switch>
                  <Route exact path={["/", "/login"]}> <Login appVars={appVars} setApp={setApp}/> </Route>
                  <Route exact path="/home"> <Home /> </Route>
                  <Route exact path="/register"> <Register /> </Route>
                </Switch>
              </div>
            </div>
          </Router>
      )
    }
    else{
      return (
          <Router>
            <div>
              <nav className="navbar navbar-expand navbar-custom">
                <Link to={"/"} className="navbar-brand">
                  De la Finca a tu Casa
                </Link>
                <div className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <a href="/login" className="nav-link" onClick={logOut}>
                          LogOut
                        </a>
                      </li>
                    </div>
              </nav>
              <div className="container mt-3">
                <Switch>
                  <Route exact path={["/", "/login"]}> <Login appVars={appVars} setApp={setApp} /> </Route>
                  <Route exact path="/home"> <Home /> </Route>
                  <Route exact path="/register"> <Register /> </Route>
                </Switch>
              </div>
            </div>
          </Router>

      );
    }
  };

  return userNavbar();

};

export default App;
