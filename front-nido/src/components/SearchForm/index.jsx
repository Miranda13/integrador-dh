import React from "react";
import Searcher from './Searcher';

class SearchForm extends React.Component {
  render() {
    return (
      <Searcher handleLocation={this.props.handleLocation} />
    );
  }
}
export { SearchForm };