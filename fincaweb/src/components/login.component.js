import React, { useState } from "react";
import Form from "react-validation/build/form";
import TextField from '@material-ui/core/TextField';

import AuthService from "../services/auth.service";
import {MapComponent} from "./Map";

const Login = () => {

  const [loginForm, setForm] = useState({
    email: '',
    password: ''
  });

  const {email, password} = loginForm;

  const updateForm=(e)=>{
    setForm({
      ...loginForm,[e.target.name]:e.target.value
    })
  };


  const handleLogin =(e)=> {
    e.preventDefault();
    console.log(loginForm);
    // AuthService.login(email, password).then(r => )
  };

  return (
      <div className="jumbotron-fluid">
        <div className="card-container flexbox-container">
          <div className="card">

            <h1>Registrarse</h1>
            <Form
                onSubmit={handleLogin}
            >
              <div className="form-group">
              <TextField type="email"
                     name="email"
                     label="Email"
                     size="small"
                     className="form-control"
                     variant="outlined"
                     onChange={updateForm}
                     value={email}
              />
            </div>

              <div className="form-group">
                <TextField type="password"
                           required
                           name="password"
                           label="Contraseña"
                           size="small"
                           className="form-control"
                           variant="outlined"
                           onChange={updateForm}
                           value={password}
                />
              </div>

              <div className="form-group">
                <button
                    className="btn btn-primary btn-block"
                >Login
                </button>
              </div>

            </Form>
          </div>
          <div className="card">
            <MapComponent />
          </div>
        </div>
      </div>
  );
};

export default Login;
