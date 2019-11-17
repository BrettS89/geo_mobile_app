import React from 'react';
import View from './view';

class CitySearch extends React.Component {
  navigateToFindHunt = () => {
    this.props.navigation.navigate('FindHunt');
  };

  render () {
    return (
      <View 
        cities={this.props.state.cities}
        searchTerm={this.props.state.searchTerm}
        findHunts={this.props.actions.findHunts}
        navigate={this.navigateToFindHunt}
      />
    );
  }
}

export default CitySearch;
