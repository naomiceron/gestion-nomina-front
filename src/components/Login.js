import React, { Component } from "react";
import "../css/Login.css";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";
import { Button, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@material-ui/icons";

const baseUrl = "https://deerland-empleados.herokuapp.com/Usuarios";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      correo: "",
      contraseña: "",
    },
  };
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          correo: this.state.form.correo,
          contraseña: md5(this.state.form.contraseña),
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("nombre", respuesta.nombre, { path: "/" });
          cookies.set("correo", respuesta.correo, { path: "/" });
          alert("Bienvenido " + respuesta.nombre);
          window.location.href = "./menu";
        } else {
          alert("Credenciales no correctas");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("correo")) {
      window.location.href = "./menu";
    }
  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <Typography variant="h4" component="h4">
              Bienvenido
            </Typography>
            <TextField
              id="outlined-basic"
              label="Correo"
              variant="outlined"
              type="text"
              name="correo"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              type="password"
              name="contraseña"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button
              variant="contained"
              startIcon={<AccountCircle />}
              onClick={() => this.iniciarSesion()}
            >
              Iniciar Sesion
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
