import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import store from './redux';
import AppNav from './navigation';

class AppContainer extends React.Component {
  render() {
    AsyncStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGQwMWZjODRmZGM1ODBmZDc2ZjJiZDciLCJpYXQiOjE1NzM5MjA3MTJ9.5kG5n8QSdGa239OVIMRw75hRD3fbTH-zQX-GtgzQ9ks');
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
