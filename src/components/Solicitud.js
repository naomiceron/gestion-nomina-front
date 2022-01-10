//formulario despliegue el word que hicimos
//ver drive 

import React, { useEffect } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import { HomeSharp, Send } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


export default function Solicitud() {
  const [solicitud, setSolicitud] = React.useState([]);
  const [fechaPago, setFechaPago] = React.useState("");

 
  useEffect(() => {
    const getSolicitud= async () => {
      const res = await axios.get('https://deerland-empleados.herokuapp.com/Nomina');
      const response = res.data.map(({idnomina, ...rest}) => ({...rest, id:idnomina}));
      setSolicitud(response);
    };
    getSolicitud();
  }, []);

  const columns = [
    { field: "idempleados", headerName: "ID Empleado", width: 110 },
    { field: "nombreempleado", headerName: "Nombre", width: 180 },
    { field: "salariobase", headerName: "Salario Base", width: 180 },
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
      field: "sueldototal",
      headerName: "Sueldo Total",
      width: 125,
    },
    {
      field: "fechacreacion",
      headerName: "Fecha Registro de Horas",
      width: 200,
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item  className="solicitud-form">
        <FormControl>
          <Typography variant="h4" component="h4" marginTop="40px">
            Solicitud Nómina
          </Typography>
          <br />
        </FormControl>
      </Grid>
      <Grid item md={12}>  
          <div style={{ height: 500, width:1010}}>
            <DataGrid
              rows={solicitud}
              columns={columns}

            />
          </div>
          </Grid>
          <Grid item md={12}>  
            <FormControl>
            <Typography variant="p" component="p" marginTop="40px">
            Fecha de Pago de Nómina:
          </Typography>  
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="date"
              onChange={(ev) => setFechaPago(ev.target.value)}
           />
              <br />
              <Button
                color="secondary"
                variant="contained"
                startIcon={<Send />}
                onClick={()=>{sendSolicitud(solicitud)}}
              >
                Enviar Solicitud
              </Button>
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
  function sendSolicitud(solicitud){
    Object.keys(solicitud).forEach(key => {axios.post('https://deerland-finanzas.herokuapp.com/solicitud-nomina/agregar', 
    {'IDNomina': solicitud[key].id, 'FechaPago': fechaPago, 'SalarioBase':solicitud[key].salariobase, 'HorasE':solicitud[key].horasextra, 'SalarioT': solicitud[key].sueldototal})
    .then(response => axios.post('https://deerland-empleados.herokuapp.com/Solicitud', response.data[0]));   }  )

    alert('Envíado con éxito'); 
    window.location.href = "/";
  }
}
