import React from 'react';
import { Provider } from 'react-redux';
import { View, AsyncStorage } from 'react-native';
import store from './redux';
import AppNav from './navigation';
import LoadingModal from './shared/components/loadingModal';

const AppContainer = props => {
  return (
    <Provider store={store()}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppNav />
        <LoadingModal />
        
      </View>
    </Provider>
  );
}

export default AppContainer;
