import React from 'react';
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
import CitySearchIcon from '../components/_misc/citySearchIcon';
import CitySearchBar from '../components/_misc/citySearchBar';
import HuntDetailHeader from '../components/_misc/huntDetailHeader';
import TokenHeader from '../components/_misc/tokensHeader';

// Auth
import Auth from '../containers/auth';
import Login from '../containers/login';
import Register from '../containers/register';

import FindHunt from '../containers/findHunt';
import MyHunts from '../containers/myHunts';
import Account from '../containers/account';
import CitySearch from '../containers/citySearch';
import HuntDetails from '../containers/huntDetails';
import PurchaseTokens from '../containers/purchaseTokens';
import ActiveHunt from '../containers/activeHunt';
import AddPaymentMethod from '../components/addPaymentMethod';

const mainNav = createBottomTabNavigator({
  FindHunt: {
    screen: createStackNavigator({
      FindHunt: {
        screen: FindHunt,
        navigationOptions: {
          headerLeft: <Logo />,
          headerRight: <CitySearchIcon />,
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
        title: 'MyHunts',
        navigationOptions: {
          headerLeft: <Logo />,
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
      Account: {
        screen: Account,
        title: 'Account',
        navigationOptions: {
          headerLeft: <Logo />,
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

const noBottomNav = createBottomTabNavigator({
  CitySearch: {
    screen: createStackNavigator({
      CitySearch: {
        screen: CitySearch,
        navigationOptions: {
          headerLeft: <CitySearchBar />,
        },
      },
    }),
    navigationOptions: {
      title: 'City Search',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="map-search-outline" size={28} color={tintColor}/>
      )
    }
  },
  HuntDetails: {
    screen: createStackNavigator({
      HuntDetails: {
        screen: HuntDetails,
        navigationOptions: {
          headerLeft: <HuntDetailHeader />,
          headerRight: <TokenHeader />,
        },
      },
    }),
    navigationOptions: {
      title: 'Hunt Details',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="map-search-outline" size={28} color={tintColor}/>
      )
    }
  },
  AddPaymentMethod: {
    screen: createStackNavigator({
      AddPaymentMethod: {
        screen: AddPaymentMethod,
        navigationOptions: {
          headerLeft: <Logo />,
        },
      },
    }),
    navigationOptions: {
      title: 'Add Payment Method',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="map-search-outline" size={28} color={tintColor}/>
      )
    }
  },
  PurchaseTokens: {
    screen: createStackNavigator({
      PurchaseTokens: {
        screen: PurchaseTokens,
        navigationOptions: {
          headerRight: <TokenHeader />,
        },
      },
    }),
    navigationOptions: {
      title: 'Purchase Tokens',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="map-search-outline" size={28} color={tintColor}/>
      )
    }
  },
  ActiveHunt: {
    screen: ActiveHunt,
  },
  // ActiveHunt: {
  //   screen: createStackNavigator({
  //     ActiveHunt: {
  //       screen: ActiveHunt,
  //     },
  //   }),
  //   navigationOptions: {
  //     title: 'Active Hunt',
  //     activeTintColor: Colors.main,
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon2 name="map-search-outline" size={28} color={tintColor}/>
  //     )
  //   }
  // },
},
{
  tabBarOptions: {
    activeTintColor: Colors.main,
    style: {
      display: 'none'
    }
  },
});

const authNav = createBottomTabNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      title: 'Auth',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="list" size={26} color={tintColor}/>
      )
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="list" size={26} color={tintColor}/>
      )
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="list" size={26} color={tintColor}/>
      )
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: Colors.main,
    style: {
      display: 'none'
    },
    // initialRouteName: 'Login'
  },
});


const rootNavigator = createSwitchNavigator({
  Auth: authNav,
  NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'Auth',
});

export default createAppContainer(rootNavigator);
