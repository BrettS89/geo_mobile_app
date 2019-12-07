import React from 'react';
import { BackHandler } from 'react-native';
import View from './view';
import getFlashSpeed from '../../utils/getFlashSpeed';
import colors from '../../shared/styles/colors';

class ActiveHunt extends React.Component {
  state = {
    color: colors.main,
    animationSpeed: 1000,
    animationIterval: null,
  };

  componentDidMount() {
    console.log(this.props.state.hunt.huntId);
    this.setState({ 
      animationInterval: setInterval(() => {
        this._animateIndicator();
      }, this.state.animationSpeed),
    });
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.navigateAway);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  navigateAway = () => {
    this.props.navigation.navigate('MyHunts');
  };

  _getLocation = () => {
    
  };

  _animateIndicator = () => {
    const color = this.state.color === colors.main
    ? colors.midGrey
    : colors.main;
    this.setState({ color });
  };

  render() {
    return (
      <View
        hunt={this.props.state.hunt.huntId}
        back={this.navigateAway}
        color={this.state.color}
      />
    );
  }
}

export default ActiveHunt;
