import React from "react";
//  import  "./login.css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer/";
import {MenuMobile} from "../components/MenuMobile";
import FormLogin from "../components/FormLogin";
import { Content } from "../components/Content";



class LoginPage extends React.Component {
render(){    
    return (
       
        <React.StrictMode>
            <div className="wrapper">
                <Header status={"login"}/>  
                <div className="container">                     
                  <FormLogin/>     
                </div>                 
                <Footer/>
                <MenuMobile/> 
            </div>
        </React.StrictMode>
    );}
}

export {LoginPage} ;
