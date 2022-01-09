//vista
//desplegar tabla de nomina de bd
// tiene que generar lo de persepciones y deducciones
import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function Nomina() {
  const [horas, setHoras] = React.useState([]);

  useEffect(() => {
    const getHoras = async () => {
      const res = await axios.get('https://deerland-empleados.herokuapp.com/Nomina');
      const response = res.data.map(({idnomina, ...rest}) => ({...rest, id:idnomina}));
      setHoras(response);
    };
    getHoras();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "idempleados", headerName: "idEmpleado", width: 110 },
    { field: "nombreempleado", headerName: "Nombre", width: 180 },
    {
      field: "horastrabajadas",
      headerName: "H.Trabajadas",
      width: 125,
    },
    {
      field: "horasextra",
      headerName: "H.Extra",
      width: 80,
    },
    {
        field: "comisiones",
        headerName: "comisiones",
        width: 80,
    },
    {
        field: "salariobase",
        headerName: "salario base",
        width: 80,
    },
    {
        field: "aguinaldo",
        headerName: "aguinaldo",
        width: 80,
    },
    {
        field: "sat",
        headerName: "sat",
        width: 80,
    },
    {
        field: "imss",
        headerName: "imss",
        width: 80,
    },
    {
        field: "fvivienda",
        headerName: "fondo vivienda",
        width: 80,
    },
    {
        field: "fretiro",
        headerName: "fondo retiro",
        width: 80,
    },
    {
        field: "sueldototal",
        headerName: "sueldo total",
        width: 80,
    },
    {
        field: "fechatransaccion",
        headerName: "fecha transaccion",
        width: 80,
    },
    {
        field: "transaccion",
        headerName: "transaccion",
        width: 80,
    },
    {
        field: "fechacreacion",
        headerName: "fecha creacion",
        width: 80,
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sm={12} md={6} className="ingredients-form">
        <FormControl>
          <Typography variant="h4" component="h4" marginTop="40px">
            Revisar nomina
          </Typography>
          <br />
          <div style={{ height: 400, width: 1010 }}>
            <DataGrid
              rows={horas}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
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
  );
}
