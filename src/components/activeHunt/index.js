import React from 'react';
import { BackHandler } from 'react-native';
import View from './view';
import getFlashSpeed from '../../utils/getFlashSpeed';
import getDistance from '../../utils/getDistance';
import colors from '../../shared/styles/colors';

class ActiveHunt extends React.Component {
  state = {
    color: colors.main,
    animationSpeed: 1000,
    animationIterval: null,
    interval: null,
  };

  componentDidMount() {
    this.setState({
      animationInterval: setInterval(() => {
        this._animateIndicator();
      }, this.state.animationSpeed),
      interval: setInterval(() => {

      }, 1000),
    });
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.navigateAway);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  navigateAway = () => {
    this.props.navigation.navigate('MyHunts');
  };

  _animateIndicator = () => {
    const color = this.state.color === colors.main
    ? colors.midGrey
    : colors.main;
    this.setState({ color });
  };

  huntLogic = async () => {
    const distance = await getDistance();
    if (distance < .004) {
      clearInterval(this.state.interval);
      clearInterval(this.state.animationSpeed);
      return;
    }
    const speed = getFlashSpeed(distance);
    this.setState({ animationSpeed: speed });
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
