import React from 'react';
import View from './view';

class CitySearch extends React.Component {
  render () {
    return (
      <View 
        cities={this.props.state.cities}
        searchTerm={this.props.state.searchTerm}
      />
    );
  }
}

export default CitySearch;
