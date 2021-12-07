import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Policy from "../components/Policy";
import HeaderProduct from "../components/HeaderProduct";
import AddProduct from "../components/AddProduct";

export default function AddProductPage() {

    return (
        <>
            {
                      
                    <div className="wrapper">
                       <div className="container-add">
                       {/* <HeaderProduct product="asd" pathGoBack={`/`} /> */}
                           
                            <AddProduct />                          
                        </div>
                        
                    </div>
            }

        </>
    );
}
