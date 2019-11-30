import React from 'react';
import View from './view';

class HuntDetails extends React.Component {
  enterHunt = () => {
    const huntId = this.props.state.hunt._id;
    this.props.actions.enterHunt({ huntId, navigate: this.navigate });
  };

  navigate = () => {
    this.props.navigation.navigate('MyHunts');
  };

  render() {
    return (
      <View
        hunt={this.props.state.hunt}
        enterHunt={this.enterHunt}
      />
    );
  }
}

export default HuntDetails;
