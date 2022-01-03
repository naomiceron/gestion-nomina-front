import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from '../components/Login';
import ButtonAppBar from '../components/Menu';
import Horas from '../components/Horas';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/menu" component={ButtonAppBar}/>
            <Route exact path="/horas" component={Horas}/>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;