import React from "react";

import Product from "../components/Product";


class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <React.StrictMode>
                <div className="wrapper">
                    <div className="container-producto">
                       <Product />       
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}

export {ProductPage};
