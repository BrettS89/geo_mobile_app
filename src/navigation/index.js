import React from 'react';
import { View, Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../shared/styles/colors';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Foundation';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from './logo';

import FindHunt from '../containers/findHunt';
import MyHunts from '../containers/myHunts';
import Account from '../containers/account';

const mainNav = createBottomTabNavigator({
  // FindHunt: {
  //   screen: FindHunt,
  //   navigationOptions: {
  //     title: 'Find Hunts',
  //     activeTintColor: Colors.main,
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon2 name="map-search-outline" size={26} color={tintColor}/>
  //     )
  //   }
  // },
  FindHunt: {
    screen: createStackNavigator({
      MyHunts: {
        screen: FindHunt,
        // title: 'My Hunts',
        navigationOptions: {
          headerLeft: <Logo />
        },
      },
    }),
    navigationOptions: {
      title: 'Find Hunt',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="map-search-outline" size={28} color={tintColor}/>
      )
    }
  },
  MyHunts: {
    screen: createStackNavigator({
      MyHunts: {
        screen: MyHunts,
        // title: 'My Hunts',
        navigationOptions: {
          headerLeft: <Logo />
        },
      },
    }),
    navigationOptions: {
      title: 'My Hunts',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon3 name="map" size={28} color={tintColor}/>
      )
    }
  },
  Account: {
    screen: createStackNavigator({
      MyHunts: {
        screen: Account,
        // title: 'My Hunts',
        navigationOptions: {
          headerLeft: <Logo />
        },
      },
    }),
    navigationOptions: {
      title: 'Account',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon4 name="account" size={29} color={tintColor}/>
      )
    }
  },
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
