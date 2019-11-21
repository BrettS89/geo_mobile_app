import React from 'react';
import View from './view';

class FindHunt extends React.Component {
  navigateToHunt = (_id) => {
    this.props.actions.selectHunt({ hunt: _id, navigate: this.navigate });
  };

  navigate = () => {
    this.props.navigation.navigate('HuntDetails');
  };

  render() {
    return (
      <View
        hunts={this.props.state.hunts}
        navigateToHunt={this.navigateToHunt}
      />
    );
  }
}

export default FindHunt;
