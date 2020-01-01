import React from 'react';
import { BackHandler } from 'react-native';
import View from './view';
import getFlashSpeed from '../../utils/getFlashSpeed';
import getDistance from '../../utils/getDistance';
import colors from '../../shared/styles/colors';

class ActiveHunt extends React.Component {
  state = {
    color: colors.main,
    blinkSpeed: 1000,
    interval: null,
    distance: 0,
    won: 'nope',
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.huntLogic();
      }, 1000),
    });
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.navigateAway);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  navigateAway = () => {
    this.props.navigation.navigate('MyHunts');
    return true;
  };

  _animateIndicator = () => {
    const color = this.state.color === colors.main
    ? colors.midGrey
    : colors.main;
    this.setState({ color });
  };

  huntLogic = async () => {
    const hunt = this.props.state.hunt.huntId;
    const lat = hunt.location.coordinates[1].$numberDecimal;
    const lon = hunt.location.coordinates[0].$numberDecimal;

    const distance = await getDistance(lat, lon);

    if (distance < .02) {
      clearInterval(this.state.interval);
      clearInterval(this.state.animationSpeed);
      // you won
      this.props.actions.youWon();
      this.setState({ won: 'yup' });
      return;
    }
    const speed = getFlashSpeed(distance);
    if (speed !== this.state.blinkSpeed) {
    
      this.setState({
        blinkSpeed: speed,
        distance,
      });
    } else {
      this.setState({ distance, });
    }
  };

  render() {
    return (
      <View
        hunt={this.props.state.hunt.huntId}
        back={this.navigateAway}
        color={this.state.color}
        distance={this.state.distance}
        confirmWon={this.props.actions.confirmWon}
        blinkSpeed={this.state.blinkSpeed}
        won={this.state.won}
      />
    );
  }
}

export default ActiveHunt;
