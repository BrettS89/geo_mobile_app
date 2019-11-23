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
    this.props.actions.onRegister(this.state);
  };

  render() {
    return (
      <View
        onTextChange={this.onTextChange}
        onRegister={this.onRegister}
      />
    );
  }
}

export default Register;
