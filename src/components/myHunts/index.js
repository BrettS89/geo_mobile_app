import React from 'react';
import View from './view';

class MyHunts extends React.Component {
  startHunting = huntId => {
    this.props.actions.startHunting({ huntId, navigate: this.navigate });
  };

  navigate = () => {
    this.props.navigation.navigate('ActiveHunt');
  }

  render() {
    return (
      <View
        myHunts={this.props.state.myHunts}
        startHunting={this.startHunting}
      />
    );
  }
}

export default MyHunts;
