import React, {useState} from "react";
import Form from "react-validation/build/form";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import MapComponent from "./Map";
import RegionsService from "../services/regions.service";
import AuthService from "../services/auth.service";

const options = [
  { value: 'regularConsumer', label: 'Cliente Regular' },
  { value: 'wholesaleConsumer', label: 'Cliente al por mayor' },
  { value: 'producer', label: 'Productor' },
  { value: 'transportation', label: 'Transporte' },
];



const Register = () => {


  const [regionOptions, setRegionOptions] = useState({
    options: [],
  });

  const getRegionsList = () => {
    let list = [];
    RegionsService.getRegions().then(response => {
          for (let i = 0; i < response.data.length; i++) {
            let option = {
              value: response.data[i].name,
              label: response.data[i].name
            };
            console.log(response);
            list.push(option);
          }
          setRegionOptions({
            options: list
          });
        }
    );
  };


  const [registerForm, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    role: "",
    x: "", // longitude
    y: "", // latitude
    region: ""
  });

  const {name, lastName, email, password, telephone, role, x, y, region} = registerForm;

  const updateForm = (e) => {
    setForm({
      ...registerForm, [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(
        name,
        lastName,
        email,
        password,
        telephone,
        role,
        region,
        x,
        y);
  };

  const nameError = name.length < 3;
  const lastNameError = lastName.length < 3;
  const passwordError = password.length < 7;
  const emailError = !email.includes('@');

  return (
      <div className="jumbotron-fluid bg-image">
        <div className="card-container flexbox-container">
          <div className="card-e">

            <h1>Registrarse</h1>
            <Form
                onSubmit={handleRegister}
            >
              <div>
                <div className="form-group">
                  <TextField
                      helperText={nameError ? "Debe tener al menos 3 caracteres" : ""}
                      error={nameError}
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
                      helperText={lastNameError ? "Debe tener al menos 3 caracteres" : ""}
                      error={lastNameError}
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
                      helperText={emailError ? "Debe contener @" : ""}
                      error={emailError}
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
                      helperText={passwordError ? "Debe tener al menos 7 caracteres" : ""}
                      error={passwordError}
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
                      name="telephone"
                      label="Teléfono"
                      size="small"
                      className="form-control"
                      onChange={updateForm}
                      variant="outlined"
                      value={telephone}/>
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
                  <TextField
                      name="region"
                      required
                      select
                      label="Seleccione su region"
                      value={region}
                      onChange={updateForm}
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      onClick={getRegionsList}
                  >
                    {regionOptions.options.map((option) => (
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
          <div className="card-e">
          <div className="card-e">
            <MapComponent registerForm={registerForm} setForm={setForm}/>
          </div>
        </div>


      </div>
  );


};

export default Register;
