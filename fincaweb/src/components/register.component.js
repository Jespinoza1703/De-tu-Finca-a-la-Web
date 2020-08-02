import React, {Component, useState} from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import {MapComponent} from '../components/Map'
import AuthService from "../services/auth.service";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Login from "./login.component";
import MapTest from "./MapTest";

const options = [
  { value: 'regularConsumer', label: 'Cliente Regular' },
  { value: 'wholesaleConsumer', label: 'Cliente al por mayor' },
  { value: 'producer', label: 'Productor' },
  { value: 'transportation', label: 'Transporte' },
];


const Register = () => {

  const [registerForm, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    x: "", // longitude
    y: "", // latitude
    region: ""
  });

  const {name, lastName, email, password, phone, role, lat, lng, region} = registerForm;

  const updateForm=(e)=>{
    setForm({
      ...registerForm,[e.target.name]:e.target.value
    })
  };

  const handleRegister =(e)=> {
    e.preventDefault();
    console.log(registerForm);
    /*
    AuthService.register(
        name,
        lastName,
        email,
        password,
        phone,
        role,
        region,
        [lat, lng]);

     */
  };


  return (
      <div className="jumbotron-fluid">
        <div className="card-container flexbox-container">
          <div className="card">

            <h1>Registrarse</h1>
            <Form
                onSubmit={handleRegister}
            >
              <div>
                <div className="form-group">
                  <TextField
                      type="text"
                      required
                      name="name"
                      label="Nombre"
                      size="small"
                      className="form-control"
                      onChange={updateForm}
                      variant="outlined"
                      value={name}/>
                </div>

                <div className="form-group">
                  <TextField
                      type="text"
                      required
                      name="lastName"
                      label="Apellido"
                      size="small"
                      className="form-control"
                      onChange={updateForm}
                      variant="outlined"
                      value={lastName}/>
                    </div>

                    <div className="form-group">
                      <TextField
                          type="email"
                          required
                          name="email"
                          label="Email"
                          size="small"
                          className="form-control"
                          onChange={updateForm}
                          variant="outlined"
                          value={email}/>
                    </div>

                    <div className="form-group">
                      <TextField
                          type="password"
                          required
                          name="password"
                          label="Contraseña"
                          size="small"
                          className="form-control"
                          onChange={updateForm}
                          variant="outlined"
                          value={password}/>
                    </div>
                    <div className="form-group">
                      <TextField
                          type="text"
                          required
                          name="phone"
                          label="Teléfono"
                          size="small"
                          className="form-control"
                          onChange={updateForm}
                          variant="outlined"
                          value={phone}/>
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
                          helperText="Por favor seleccione su rol para registrarse"
                      >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                        ))}
                      </TextField>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Registrarse</button>
                    </div>
                  </div>

            </Form>
          </div>
          <div className="card">
            <MapTest registerForm={registerForm} setForm={setForm} />
          </div>
        </div>


      </div>
  );


  };

export default Register;
