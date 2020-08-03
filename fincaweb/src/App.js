import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet-geosearch/dist/geosearch.css';
import "./App.css";
import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import ProducerHome from "./components/producerHome.js";



const App = () => {

  const [appVars, setApp] = useState({
    isLoggedIn: localStorage.getItem('loggedIn'),
    currentUser: localStorage.getItem('user'),
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
    AuthService.logout(setApp);
  };

  const notLogged = () =>{
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
                    Ingresar
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Registrarse
                  </Link>
                </li>
              </div>
            </nav>

            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/login"]}> <Login appVars={appVars} setApp={setApp}/> </Route>
                <Route exact path="/register"> <Register /> </Route>
              </Switch>
            </div>
          </div>
        </Router>
    )
  };

  const regularConsumerLogged = () =>{
    return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-custom">
              <Redirect  to="/home/" />
              <Link to={"/home"} className="navbar-brand">
                De la Finca a tu Casa
              </Link>

              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" onClick={logOut}>
                    Salir
                  </Link>
                </li>
              </div>
            </nav>
            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/home"]}> <Home /> </Route>
                <Route exact path="/login"> <Login appVars={appVars} setApp={setApp} /> </Route>
                <Route exact path="/register"> <Register /> </Route>
              </Switch>
            </div>
          </div>
        </Router>

    );
  };

  const producerLogged = () =>{
    return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-custom">
              <Redirect  to="/producerHome/" />
              <Link to={"/producerHome"} className="navbar-brand">
                De la Finca a tu Casa
              </Link>

              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" onClick={logOut}>
                    Salir
                  </Link>
                </li>
              </div>
            </nav>
            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/producerHome"]}> <ProducerHome /> </Route>
                <Route exact path="/login"> <Login appVars={appVars} setApp={setApp} /> </Route>
                <Route exact path="/register"> <Register /> </Route>
              </Switch>
            </div>
          </div>
        </Router>

    );
  };


  const userNavbar= () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    if (isLoggedIn === 'no'){
      return notLogged();
    }
    if (isLoggedIn === 'yes') {
      if (user.role === 'producer') {
        return producerLogged()
      }
      if (user.role === 'regularConsumer') {
        return regularConsumerLogged()
      }
    }
  };

  return userNavbar();

};

export default App;
