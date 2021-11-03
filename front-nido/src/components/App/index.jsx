import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home } from "../../pages/Home";
import { LoginPage } from "../../pages/LoginPage";
import { SigninPage } from "../../pages/SigninPage";
import { useState } from "react";
import { Header } from '../Header';
import { Footer } from '../Footer';
import MenuMobile from "../MenuMobile";
import { useEffect } from "react/cjs/react.development";

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route exact path="/login" >

                    {!isSubmitted ?
                        <LoginPage submitForm={submitForm} />
                        :
                        <>
                            <Redirect to="/" />
                        </>
                    }
                </Route>
                <Route exact path="/signin">
                    {!isSubmitted ?
                        <SigninPage submitForm={submitForm} />
                        :
                        <>
                            <Redirect to="/" />
                        </>
                    }
                </Route>
            </Switch>
            <Footer />
            <MenuMobile />
        </BrowserRouter>
    )
}


export default App;