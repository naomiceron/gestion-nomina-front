//tabla con todas las solicitudes para ver las aprobadas/en proceso/denegada
//boton que diga generar solicitud de pago
// ese boton genere pdf (ver drive)
import React, { useEffect } from "react";
import { Grid, Button, Typography} from "@mui/material";
import { HomeSharp, PictureAsPdf } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';


export default function RevisarSolicitud() {
  const [solicitud, setSolicitud] = React.useState([]);
  var today = new Date();
  var fecha = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  
  useEffect(() => {
    const getSolicitud= async () => {
      const res = await axios.get('https://deerland-empleados.herokuapp.com/Solicitud');
      const response = res.data.map(({numnomina, ...rest}) => ({...rest, id:numnomina}));
      setSolicitud(response);
    };
    getSolicitud();
  }, []);
  
  const columns = [
    { field: "nombreempleado", headerName: "Nombre", width: 180 },
    { field: "numerocuenta", headerName: "Número Cuenta", width: 180 },
    {
      field: "email",
      headerName: "Email",
      width: 125,
    },
    {
      field: "sueldototal",
      headerName: "Importe",
      width: 80,
    },
    { field: "es_solicitud_n", headerName: "Estado", width: 180 },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item  className="revsolicitud-form">
        <FormControl>
          <Typography variant="h4" component="h4" marginTop="40px">
            Nómina
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
              <br />
            <FormControl>
              <Button
                color="error"
                variant="contained"
                startIcon={<PictureAsPdf />}
                onClick={()=>{generarPdf(solicitud)}}
              >
                Generar PDF
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
  function generarPdf(solicitud){
    var doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Relación de Pagos Deerland", 60, 20);
    doc.text(fecha, 88, 40);
    var col = [["Nombre", "Número de Cuenta", "Correo Electrónico", "Importe"]];
    var rows = [];
    var data;
    Object.keys(solicitud).forEach(key => {
      if(String(solicitud[key].es_solicitud_n) === "Aprobado"){
          data = [{
          Nombre: String(solicitud[key].nombreempleado),
          Cuenta: String(solicitud[key].numerocuenta),
          Email: String(solicitud[key].email),
          Importe: String(solicitud[key].sueldototal)
         }];
         data.forEach(element => {
           var temp = [element.Nombre, element.Cuenta, element.Email, element.Importe];
           rows.push(temp);
     
         });
        }
    });

    doc.autoTable({
        head: col,
        body: rows,
        startY: 60
    });
    doc.save("relacion_pago_nomina.pdf")
  

  }
}
