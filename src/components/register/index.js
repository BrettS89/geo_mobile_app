import React from 'react';
import View from './view';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onTextChange = (val, type) => {
    this.setState({ [type]: val });
  };

  onRegister = () => {
    this.props.actions.onRegister({ form: this.state, navigate: this.navigate});
  };

  navigate = () => {
    this.props.navigation.navigate('FindHunt');
  };

  render() {
    return (
      <View
        onTextChange={this.onTextChange}
        onRegister={this.onRegister}
        error={this.props.state.registrationError}
      />
    );
  }
}

export default Register;
