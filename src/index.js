import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import store from './redux';
import AppNav from './navigation';

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store()}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <AppNav />
        </View>
      </Provider>
    );
  }
}

export default AppContainer;
