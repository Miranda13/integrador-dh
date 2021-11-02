import React from "react";

import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MenuMobile} from "../components/MenuMobile";
import FormRegister from "../components/FormRegister";


class SigninPage extends React.Component {
render(){    
    return (
       
        <React.StrictMode>
            <div className="wrapper">
                <Header status={"signin"}/>
                <div className="container">
                <FormRegister/> 
                </div>    
                <Footer/>
                <MenuMobile/> 
            </div>
        </React.StrictMode>
    );}
}

export {SigninPage};
