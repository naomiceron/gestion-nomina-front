import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import ButtonAppBar from "../components/Menu";
import Horas from "../components/Horas";
import Solicitud from "../components/Solicitud";
import RevisarHoras from "../components/RevisarHoras";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={ButtonAppBar} />
        <Route exact path="/horas" component={Horas} />
        <Route exact path="/revisarhoras" component={RevisarHoras} />
        <Route exact path="/solicitud" component={Solicitud} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
