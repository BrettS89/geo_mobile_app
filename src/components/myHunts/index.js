import React from 'react';
import { Linking } from 'expo';
import { Alert } from 'react-native';
import View from './view';
import * as Permissions from 'expo-permissions';

class MyHunts extends React.Component {
  startHunting = async huntId => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      Alert.alert('Enable Location', 'You need to enable location permissions to start hunting', [
        { text: 'OK', onPress: () => Linking.openURL('app-settings:') },
      ],
      { cancelable: false },
    );
      return;
    }

    this.props.actions.startHunting({ huntId, navigate: this.navigate });
  };

  navigate = () => {
    this.props.navigation.navigate('ActiveHunt');
  };

  render() {
    return (
      <View
        myHunts={this.props.state.myHunts}
        startHunting={this.startHunting}
      />
    );
  }
}

export default MyHunts;
