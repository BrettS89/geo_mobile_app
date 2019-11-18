import React from 'react';
import View from './view';

class FindHunt extends React.Component {
  render() {
    return (
      <View
        hunts={this.props.state.hunts}
      />
    );
  }
}

export default FindHunt;
