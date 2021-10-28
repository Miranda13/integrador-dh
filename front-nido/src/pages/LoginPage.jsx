import React from "react";
// import  "../styles/index.css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer/";
import {MenuMobile} from "../components/MenuMobile";
import FormLogin from "../components/FormLogin";
import { Content } from "../components/Content";
// import {FirstComponent} from "../FirstComponent";

class LoginPage extends React.Component {
render(){    
    return (
       
        <React.StrictMode>
            <div className="wrapper">
                <Header/>  
                <div className="container">    
                <h2>Iniciar sesión</h2>    
                  <FormLogin/>     
                </div>                 
                <Footer/>
                <MenuMobile/> 
            </div>
        </React.StrictMode>
    );}
}

export {LoginPage} ;
