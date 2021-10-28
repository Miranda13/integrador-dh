import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import { Home } from "../../pages/Home";
import { LoginPage } from "../../pages/LoginPage";
import { SigninPage } from "../../pages/SigninPage";
import { HomeLogged } from "../../pages/HomeLogged";
import { useState } from "react";


function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }



    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" >

                    {!isSubmitted ?
                        <LoginPage submitForm={submitForm} />
                        :
                        <>
                            <Redirect to="/homeLogged" />
                        </>
                    }
                </Route>
                <Route exact path="/signin" component={SigninPage} />
                <Route exact path="/homeLogged" component={HomeLogged} />
            </Switch>
        </BrowserRouter>
    )
}


export default App;