import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import {Home} from "../../pages/Home";
import {LoginPage} from "../../pages/LoginPage";
import {SigninPage} from "../../pages/SigninPage";

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signin" component={SigninPage} />            
            </Switch>
        </BrowserRouter>
    )
}

export default App;