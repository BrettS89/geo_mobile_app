import React from 'react';
import View from './view';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onTextChange = (val, type) => {
    this.setState({ [type]: val });
  };

  onLogin = () => {
    this.props.actions.onLogin({ form: this.state, navigate: this.navigate });
  };

  navigate = () => {
    this.props.navigation.navigate('FindHunt');
  };

  render() {
    return (
      <View
        onTextChange={this.onTextChange}
        onLogin={this.onLogin}
      />
    );
  }
}

export default Login;
