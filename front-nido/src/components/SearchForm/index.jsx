import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="searchForm">
        <form>
          <input type="text" placeholder="Componente de jose"  className="searchForm__input"/>     
        </form>
      
      </div>
    );
  }
}
export  {SearchForm};