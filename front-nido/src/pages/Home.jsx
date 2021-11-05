

import React from "react";
import { SearchForm } from "../components/SearchForm";
import { Content } from "../components/Content";

class Home extends React.Component {


    render() {
        return (
            <React.StrictMode>
                <div className="wrapper">
                    <SearchForm />
                    <Content />
                </div>
            </React.StrictMode>
        );
    }
}

export { Home };