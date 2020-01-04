import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

const BackToAccount = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Account')}>
      <Back name="ios-arrow-round-back" size={40} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
  }
});

export default withNavigation(BackToAccount);
