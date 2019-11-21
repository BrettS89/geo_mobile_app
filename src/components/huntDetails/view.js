import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function huntDetailsView({ hunt }) {
  return (
    <View style={styles.container}>
      {/* <Text>hi</Text> */}
      <Text>{hunt.title}</Text>
    </View>     
  );
}
