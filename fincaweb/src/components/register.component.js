import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Select from 'react-select';

import {MapComponent} from '../components/Map'
import AuthService from "../services/auth.service";
import TextField from "@material-ui/core/TextField";

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

  onChangeRole = (selectedOption) => {
    this.setState({ role: selectedOption.value });
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
                                     id="outlined-basic"
                                     label="Nombre"
                                     size="small"
                                     className="form-control"
                                     validations={[required, vname]}
                                     value={this.state.name}/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="lastName">Apellido</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                            validations={[required, vname]}
                            placeholder="Apellido"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Correo</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          validations={[required, email]}
                          placeholder="ejemplo@gmail.com"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          validations={[required, vpassword]}
                          placeholder="123456"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Rol</label>
                        <Select
                            onChange={this.onChangeRole}
                            options={options}
                            placeholder="Seleccione su rol"
                            validations={[required]}
                        />
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
