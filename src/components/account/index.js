import React from 'react';
import View from './view';

class Account extends React.Component {
  navigate = (to) => {
    this.props.navigation.navigate(to);
  };

  render() {
    return (
      <View
        navigate={this.navigate}
      />
    );
  }
}

export default Account;
