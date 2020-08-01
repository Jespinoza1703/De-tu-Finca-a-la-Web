import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TextField from '@material-ui/core/TextField';

import AuthService from "../services/auth.service";
import {MapComponent} from "./Map";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        *Campo obligatrio
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
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

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
        <div className="jumbotron-fluid">
          <div className="card-container flexbox-container">
            <div className="card">

              <h1>Registrarse</h1>
            <Form
              onSubmit={this.handleLogin}
              ref={c => {
                this.form = c;
              }}
            ><div className="form-group">
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
                <button
                  className="btn btn-primary btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

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
        </div>
    );
  }
}
