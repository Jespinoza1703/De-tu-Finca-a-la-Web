import React, { useState } from "react";
import Form from "react-validation/build/form";
import TextField from '@material-ui/core/TextField';
import {Transformation} from "leaflet";


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
    // console.log(AuthService.login(email, password));
  };

  return (
      <div className="jumbotron-fluid">
        <div className="card-container flexbox-container">
          <div className="card">

            <h1>Ingresar</h1>
            <Form
                onSubmit={handleLogin}
            >
              <div className="form-group">
              <TextField
                  type="email"
                  required
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
                <TextField
                    type="password"
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
          <div className="card-container responsive-image">
            <img
                src="https://wallpapersfind.com/wp-content/uploads/2017/10/fresh-vegetables-wallpaper-1080x1200.jpg"
                alt="new" width="300" alt="Casual Jacket"
                className="responsive-image__image" />
            </div>
        </div>
      </div>
  );
};

export default Login;
