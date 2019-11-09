import React from 'react';

import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../shared/styles/colors';
import Icon2 from 'react-native-vector-icons/Entypo';

import FindHunt from '../containers/findHunt';

const mainNav = createBottomTabNavigator({
  Genres: {
    screen: FindHunt,
    navigationOptions: {
      title: 'Find Hunts',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="list" size={26} color={tintColor}/>
      )
    }
  }
},
{
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Colors.main,
    style: {
      paddingVertical: 4,
    }
  },
});

const rootNavigator = createSwitchNavigator({
  // Auth: { screen: authNav },
  // Signup: { screen: Signup },
  Main: mainNav,
}, {
  initialRouteName: 'Main',
});

export default createAppContainer(rootNavigator);
