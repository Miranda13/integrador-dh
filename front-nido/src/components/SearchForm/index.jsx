import React from "react";
import Searcher from './Searcher';
class SearchForm extends React.Component {
  render() {
    return (
      <div className="searchForm">
        <form>
          <Searcher />
        </form>

      </div>
    );
  }
}
export { SearchForm };