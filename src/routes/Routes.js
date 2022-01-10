import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import ButtonAppBar from "../components/Menu";
import Horas from "../components/Horas";
import Solicitud from "../components/Solicitud";
import RevisarHoras from "../components/RevisarHoras";
import RevisarSolicitud from "../components/RevisarSolicitud";
import Nomina from "../components/Nomina";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={ButtonAppBar} />
        <Route exact path="/horas" component={Horas} />
        <Route exact path="/nomina" component={Nomina} />
        <Route exact path="/revisarhoras" component={RevisarHoras} />
        <Route exact path="/solicitud" component={Solicitud} />
        <Route exact path="/revisarsolicitud" component={RevisarSolicitud} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
