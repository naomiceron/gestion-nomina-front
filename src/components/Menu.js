import React, { Component } from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { slide as Menu } from "react-burger-menu";
import Cookies from "universal-cookie";
import "../css/hamburguesa.css";

const cookies = new Cookies();
var isMenuOpen = function (state) {
  return state.isOpen;
};

class ButtonAppBar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("correo", { path: "/" });
    alert("Adios");
    window.location.href = "./";
  };

  componentDidMount() {
    if (!cookies.get("correo")) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Menu onStateChange={isMenuOpen}>
              <a id="home" className="menu-item" href="/">
                Home
              </a>
              <br />
              <a id="home" className="menu-item" href="/horas">
                Horas Trabajadas
              </a>
              <br />
              <a id="home" className="menu-item" href="/revisarhoras">
                Revisar horas trabajadas
              </a>
              <br />
              <a id="home" className="menu-item" href="/solicitud">
                Solicitud Nómina
              </a>
              <a id="home" className="menu-item" href="/revisarsolicitud">
                Revisar Solicitudes Nómina
              </a>
            </Menu>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 6 }}
            >
              Empleados
            </Typography>
            <Button color="inherit" onClick={() => this.cerrarSesion()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default ButtonAppBar;
