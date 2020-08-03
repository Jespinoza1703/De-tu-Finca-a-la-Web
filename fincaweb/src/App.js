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
import ProducerOrders from "./components/producerOrders.js";
import Cart from "./components/Cart";
import Profile from "./components/Profile";



const App = () => {

  const [appVars, setApp] = useState({
    isLoggedIn: localStorage.getItem('loggedIn'),
    currentUser: localStorage.getItem('user'),
  });
  const  [carrito,agregarCarrito]=useState({
    items:[],
    limitDate:"2002-12-09"
});


  const {isLoggedIn, currentUser} = appVars;



  const logOut = () => {
    AuthService.logout(setApp);
  };

  const notLogged = () =>{
  return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-custom">
              <Link to={"/"} className="navbar-brand">
                <h1>De la Finca a tu Casa</h1>
              </Link>

              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    <h1>Ingresar</h1>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    <h1>Registrarse</h1>
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
                <h1>De la Finca a tu Casa</h1>
              </Link>

              <div className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link to={"/cart"} className="nav-link">
                    <h3>Carrito</h3>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    <h3>Perfil</h3>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" onClick={logOut}>
                    <h3>Salir</h3>
                  </Link>
                </li>

              </div>
            </nav>
            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/home"]}> <Home carrito={carrito} agregarCarrito={agregarCarrito}  /> </Route>
                <Route exact path="/login"> <Login appVars={appVars} setApp={setApp} /> </Route>
                <Route exact path="/register"> <Register /> </Route>
                <Route exact path="/profile"> <Profile /> </Route>
                <Route exact path="/cart"> <Cart carrito={carrito} agregarCarrito={agregarCarrito} /> </Route>
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
              <Redirect to="/producerHome/" />
              <Link to={"/producerHome"} className="navbar-brand">
                <hi>De la Finca a tu Casa</hi>
              </Link>

              <div className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link to={"/producerHome"} className="nav-link">
                    <h3>Mis Productos</h3>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/producerOrders"} className="nav-link">
                    <h3>Mis ordenes</h3>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    <h3>Perfil</h3>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" onClick={logOut}>
                    <h3>Salir</h3>
                  </Link>
                </li>

              </div>
            </nav>
            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/producerHome"]}> <ProducerHome /> </Route>
                <Route exact path="/producerOrders"> <ProducerOrders /> </Route>
                <Route exact path="/login"> <Login appVars={appVars} setApp={setApp} /> </Route>
                <Route exact path="/register"> <Register /> </Route>
                <Route exact path="/profile"> <Profile /> </Route>
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
