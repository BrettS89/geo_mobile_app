import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import store from './redux';

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store()}>
        <View>
          <Text>Geo</Text>
        </View>
      </Provider>
    );
  }
}

export default AppContainer;
