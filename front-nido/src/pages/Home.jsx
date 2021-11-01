

import React from "react";

import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {SearchBar} from "../components/SearchBar";
import {Content} from "../components/Content";
import {MenuMobile} from "../components/MenuMobile";

class Home extends React.Component {


    render(){    
    return (
       <React.StrictMode>
            <div className="wrapper">
                <SearchBar/>
                <Content/>
                <Header status={"inicial"}/>                            
                <Footer/>
                <MenuMobile/> 

            </div>
        </React.StrictMode>
    );}
}

export  {Home};