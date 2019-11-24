import React from 'react';
import { AppLoading } from 'expo';

class Auth extends React.Component {
  componentDidMount() {
    this.props.actions.onAppLoad(this.navigate);
  }

  navigate = (status) => {
    if (status === 'success') {
      this.props.navigation.navigate('FindHunt');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <AppLoading />
    );
  }
}

export default Auth;
