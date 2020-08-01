import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Select from 'react-select';

import {MapComponent} from '../components/Map'
import AuthService from "../services/auth.service";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const options = [
  { value: 'regularConsumer', label: 'Cliente Regular' },
  { value: 'wholesaleConsumer', label: 'Cliente al por mayor' },
  { value: 'producer', label: 'Productor' },
  { value: 'transportation', label: 'Transporte' },
];

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        *Campo obligatorio
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Correo inválido.
      </div>
    );
  }
};

const vname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        El nombre debe tener entre 3 y 20 caracteres.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        La contraseña debe tener entre 6 y 40 caracteres.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);

    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      role: "",
      successful: false,
      message: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeRole = (selectedOption) => {
    this.setState({
      role: selectedOption.target.value
    });
  };


  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
          this.state.name,
          this.state.lastName,
          this.state.email,
          this.state.password,
          this.state.role
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
        <div className="jumbotron-fluid">
            <div className="card-container flexbox-container">
              <div className="card">

                <h1>Registrarse</h1>
                <Form
                  onSubmit={this.handleRegister}
                  ref={c => {
                    this.form = c;
                  }}
                >
                  {!this.state.successful && (
                    <div>
                      <div className="form-group">
                          <TextField type="text"
                                     required
                                     id="name"
                                     label="Nombre"
                                     size="small"
                                     className="form-control"
                                     onChange={this.onChangeName}
                                     variant="outlined"
                                     value={this.state.name}/>
                      </div>

                      <div className="form-group">
                        <TextField type="text"
                                   required
                                   id="lastName"
                                   label="Apellido"
                                   size="small"
                                   className="form-control"
                                   onChange={this.onChangeLastName}
                                   variant="outlined"
                                   value={this.state.lastName}/>
                      </div>

                      <div className="form-group">
                        <TextField type="email"
                                   required
                                   id="email"
                                   label="Email"
                                   size="small"
                                   className="form-control"
                                   onChange={this.onChangeEmail}
                                   variant="outlined"
                                   value={this.state.email}/>
                      </div>

                      <div className="form-group">
                        <TextField type="password"
                                   required
                                   id="password"
                                   label="Contraseña"
                                   size="small"
                                   className="form-control"
                                   onChange={this.onChangePassword}
                                   variant="outlined"
                                   value={this.state.password}/>
                      </div>
                      <div className="form-group">
                        <TextField type="text"
                                   required
                                   id="phone"
                                   label="Teléfono"
                                   size="small"
                                   className="form-control"
                                   onChange={this.onChangePhone}
                                   variant="outlined"
                                   value={this.state.phone}/>
                      </div>
                      <div className="form-group">
                        <TextField
                            id="role"
                            required
                            select
                            label="Seleccione su rol"
                            value={this.state.role}
                            onChange={this.onChangeRole}
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
                  )}

                  <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
              </div>
              <div className="card">
                <MapComponent />
              </div>
            </div>
          {this.state.message && (
            <div>
              <div
                  className={
                    this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                  }
                  role="alert"
              >
                {this.state.message}
              </div>
            </div>
        )}

        </div>
    );
  }
}
