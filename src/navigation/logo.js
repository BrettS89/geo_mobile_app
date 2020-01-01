import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NEW_LOGO } from '../../assets/images';

export default function logo(props) {
  return (
    <View>
      <Image source={NEW_LOGO} resizeMode="contain" style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    marginLeft: 14,
  }
});
