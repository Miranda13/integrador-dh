import React from "react";
import Searcher from './Searcher';

class SearchForm extends React.Component {
  render() {
    return (
      <Searcher handleSubmit={this.props.handleSubmit} />
    );
  }
}
export { SearchForm };