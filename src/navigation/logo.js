import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LOGO, LOGO2, LOGO3, LOGO4, LOGO5 } from '../../assets/images';

export default function logo(props) {
  return (
    <View>
      <Image source={LOGO5} resizeMode="contain" style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 110,
    marginLeft: 14,
  }
});
