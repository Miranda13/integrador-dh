import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import {StatusLogin} from "../StatusLogin/index";

import  "./Header.css";


class Header extends React.Component {
  
        render(){ 
return(
       <React.StrictMode>
            <div className="header">
              <div className="identity">  
                    <Link to="/"> 
                    <img src={logo} alt="Logo" className="identity__logo"/>
                    </Link> 
                    <Link to="/"> 
                        <p className="identity__slogan">Sentite como en tu hogar</p>
                    </Link>                   
              </div> 
                 <StatusLogin status={this.props.status}/>
            </div>
        </React.StrictMode>);      
   
    }
}

export {Header};