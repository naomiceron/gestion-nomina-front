//vista
//aparece tabla con empleados
//horas trabajadas (solicitudnom)
//horas extras (solicitudnom)
//guardar en sus respectivas tablas
//boton generar nomina
import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp, AddSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function RevisarHoras() {
  const [horas, setHoras] = React.useState([]);

  useEffect(() => {
    const getHoras = async () => {
      const res = await axios.get('https://deerland-empleados.herokuapp.com/Nomina');
      //console.log(res);
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
            Revisar reporte de horas trabajadas
          </Typography>
          <br />
          <Button
            color="success"
            variant="contained"
            startIcon={<AddSharp />}
            onClick={() => {calcularNomina();
            
            }}
          >
            Calcular nomina
          </Button>
          <br />
          <div style={{ height: 400, width: "100%" }}>
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
    function calcularNomina(){
      Object.keys(horas).forEach(key => {
        if(horas[key].comisiones === null){
          axios.post('https://deerland-empleados.herokuapp.com/AddSol', 
            {'NumNomina': horas[key].id});
        }
        
     
        let comisiones = horas[key].horasextra * 150;
        let sat = (horas[key].salariobase)*(6.5/100);
        let imss = (horas[key].salariobase)*(2.5/100);
        let fvivienda = (horas[key].salariobase)*(5/100);
        let fretiro = (horas[key].salariobase)*(1.125/100);
        let sueldototal = (parseInt(horas[key].salariobase) + comisiones) - (sat + imss + fvivienda + fretiro);
        console.log(sueldototal);
          axios.post("https://deerland-empleados.herokuapp.com/Nomina",
            {
              'idnomina': horas[key].id,
              'comisiones': comisiones,
              'salariobase': horas[key].salariobase,
              'sat': sat,
              'imss': imss,
              'fvivienda': fvivienda,
              'fretiro': fretiro, 
              'sueldototal': sueldototal
            }).then(response => console.log(response));
        });
       
      alert("Nómina Calculada");
      window.location.href = "./nomina";
    }


}
