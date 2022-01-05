import React, { Component } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import appActions from "../containers/App/actions";
import { connect } from "react-redux";
import withMessageHandler from "../hoc/withMessageHandler";
import withLoadHandler from "../hoc/withLoadHandler";
import { Button } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";

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
              <div>
                {datos.map((item) => (
                  <p key={Math.random().toString(36).substr(2, 9)}>
                    {item.idsolicitudn}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
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

export default withLoadHandler(
  withMessageHandler(connect(mapStateToProps, mapDispatchToProps)(Solicitud))
);
