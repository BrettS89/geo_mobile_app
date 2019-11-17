import React from 'react';
import View from './view';

class FindHunt extends React.Component {
  render() {
    console.log(this.props.state.hunts);
    return (
      <View />
    );
  }
}

export default FindHunt;
