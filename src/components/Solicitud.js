//formulario despliegue el word que hicimos
//ver drive 

import React, { Component } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import appActions from "../containers/App/actions";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { HomeSharp, SaveAltSharp } from "@material-ui/icons";
import axios from "axios";


const json = JSON.stringify({  
"IDNomina" : new Number(13),
"FechaPago" : "2022-02-02",
"SalarioBase" : new Number(234),
"HorasE" : new Number(221),
"SalarioT" : new Number(1234) });

//const rest={};

class Solicitud extends Component {
  componentDidMount() {
    const { getSolicitud } = this.props;
    getSolicitud();
  }

  render() {
    const { datos } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} className="ingredients-form">
          <Card raised>
            <CardContent>
              <h1>Solicitud Nómina</h1>
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <h1>Hola</h1>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button
            variant="contained"
            startIcon={<SaveAltSharp />}
            onClick={async () => {let rest = await axios.post('https://deerland-finanzas.herokuapp.com/solicitud-nomina/agregar', json); 
            let data = rest.data;
            console.log(rest.data);
                axios.post('https://deerland-empleados.herokuapp.com/Solicitud', rest.data)}}
          >
            Enviar
          </Button>
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
const mapStateToProps = (state) => ({
  datos: state.app.datos,
});
const mapDispatchToProps = (dispatch) => ({
  getSolicitud: () => {
    dispatch(appActions.getSolicitud());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Solicitud);
