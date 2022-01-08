import React, { Component } from "react";
import {  Grid, Button, TextField, Typography } from "@mui/material";
import { HomeSharp, SaveSharp } from "@material-ui/icons";

//aqui debe haber inputs de 
//drop down eliges el empleado 
//horas trabajadas (solicitudnom)
//horas extras (solicitudnom)

class Horas extends Component {
  render() {
    return (
        <Grid container spacing={2} marginLeft={5} marginTop={0}>
        <Grid item sm={12} md={6} className="ingredients-form">
          <div className="form-group">
          <Typography variant="h4" component="h4">
              Reporte de horas trabajadas
            </Typography>
            <TextField
              id="outlined-basic"
              label="ID Empleado"
              variant="outlined"
              type="text"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              type="text"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Correo"
              variant="outlined"
              type="text"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Banco"
              variant="outlined"
              type="text"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Numero de cuenta"
              variant="outlined"
              type="text"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Salario base"
              variant="outlined"
              type="text"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Horas extra"
              variant="outlined"
              type="text"
            />
            <br /> <br />
            <Button
          variant="contained"
          startIcon={<SaveSharp />}
        >
           Guardar horas trabajadas
        </Button>
          </div>
          <br />
          <Button
          variant="contained"
          startIcon={<HomeSharp />}
          onClick={() => (window.location.href = "/")}
        >
          Home
        </Button>
        </Grid>
      </Grid>
    );
  }
}
export default Horas;
