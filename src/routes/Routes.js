import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from '../components/Login';
import ButtonAppBar from '../components/Menu';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/menu" component={ButtonAppBar}/>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;