import React from 'react';
import View from './view';

class HuntDetails extends React.Component {
  render() {
    return (
      <View
        hunt={this.props.state.hunt}
      />
    );
  }
}

export default HuntDetails;
