

import React from "react";
import { SearchBar } from "../components/SearchBar";
import { Content } from "../components/Content";

class Home extends React.Component {


    render() {
        return (
            <React.StrictMode>
                <div className="wrapper">
                    <SearchBar />
                    <Content />
                </div>
            </React.StrictMode>
        );
    }
}

export { Home };