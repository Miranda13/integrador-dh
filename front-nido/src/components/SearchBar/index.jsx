import React from "react";

import {SearchForm} from "../SearchForm";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <h1>Buscá ofertas en hoteles!</h1>
        <SearchForm/>
      </div>
    );
  }
}
export {SearchBar};
