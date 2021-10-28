import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import {Home} from "../../pages/Home";
import {LoginPage} from "../../pages/LoginPage";
import {SigninPage} from "../../pages/SigninPage";
import {HomeLogged} from "../../pages/HomeLogged";



function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signin" component={SigninPage} />     
                <Route exact path="/homeLogged" component={HomeLogged} />        
            </Switch>
        </BrowserRouter>
    )
}


export default App;