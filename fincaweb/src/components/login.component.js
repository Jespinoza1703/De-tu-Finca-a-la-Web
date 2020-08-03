import React, { useState } from "react";
import Form from "react-validation/build/form";
import TextField from '@material-ui/core/TextField';
import AuthService from "../services/auth.service";
import MenuItem from "@material-ui/core/MenuItem";

const options = [
  { value: 'consumer', label: 'Cliente' },
  { value: 'producer', label: 'Productor' },
  { value: 'transportation', label: 'Transportista' }
];

const Login = (props) => {

  const [loginForm, setForm] = useState({
    email: '',
    password: '',
    role: ''
  });

  const {email, password, role} = loginForm;

  const updateForm=(e)=>{
    setForm({
      ...loginForm,[e.target.name]:e.target.value
    })
  };


  const handleLogin =(e)=> {
    e.preventDefault();
    AuthService.login(email, password, role, props.setApp);
  };

  return (
      <div className="jumbotron-fluid">
        <div className="card-container flexbox-container">
          <div className="card-login">

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
                <TextField
                    name="role"
                    required
                    select
                    label="Seleccione su rol"
                    value={role}
                    onChange={updateForm}
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                >
                  {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                  ))}
                </TextField>
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
