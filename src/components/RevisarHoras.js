//vista
//aparece tabla con empleados
//horas trabajadas (solicitudnom)
//horas extras (solicitudnom)
//guardar en sus respectivas tablas
//boton generar nomina
import React,  { useEffect } from "react";
import { Grid, Button, TextField, Typography } from "@mui/material";
import { HomeSharp, SaveSharp } from "@material-ui/icons";
import FormControl from '@mui/material/FormControl';
import axios from "axios";

export default function RevisarHoras(){ 
    const [horas, setHoras] =  React.useState([]);
    const [selectedHoras, setselectedHoras] = React.useState("");
    useEffect(() => {
        const getHoras = async () => {
          const res = await axios.get('https://deerland-empleados.herokuapp.com/Nomina');
          const response = await res.data;
          setHoras(response);
        };
        getHoras();
      }, []);
        return (
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item sm={12} md={6} className="ingredients-form">
              <FormControl >
                <Typography variant="h4" component="h4" marginTop="40px">
                  Revisar reporte de horas trabajadas
                </Typography>
                <br />

                <br />
                <Button
                variant="contained"
                startIcon={<HomeSharp />}
                onClick={() => (window.location.href = "/")}
              >
                Home
              </Button>
              </FormControl>
             
            </Grid>
          </Grid>
        )
}