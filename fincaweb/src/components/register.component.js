import React, {useState} from "react";
import Form from "react-validation/build/form";

import {MapComponent} from '../components/Map'
import RegionsService from "../services/regions.service";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import MapTest from "./MapTest";

const options = [
  { value: 'regularConsumer', label: 'Cliente Regular' },
  { value: 'wholesaleConsumer', label: 'Cliente al por mayor' },
  { value: 'producer', label: 'Productor' },
  { value: 'transportation', label: 'Transporte' },
];


let regionOptions = [];
const getRegionsList=()=>{
  RegionsService.getRegions().then(response =>{
        let list = [];
        for (let i = 0; i < response.data.length; i++ ){
          let option = {
            value: response.data[i].name,
            label: response.data[i].name
          };
          list.push(option);
        }
        regionOptions = list;
      }
  );
  getRegionsList();
};


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

  const {name, lastName, email, password, phone, role, x, y, region} = registerForm;


  const updateForm=(e)=>{
    setForm({
      ...registerForm,[e.target.name]:e.target.value
    });
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
        [y, x]);

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
                  <TextField
                      name="region"
                      required
                      select
                      label="Seleccione su region"
                      value={region}
                      onChange={updateForm}
                      variant="outlined"
                      size="small"
                      helperText="Por favor seleccione su region para registrarse"
                  >
                    {regionOptions.map((option) => (
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
