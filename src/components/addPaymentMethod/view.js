import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function addPaymentMethodView(props) {
  return (
    <View style={styles.container}>
      <Text>
        Add payment method
      </Text>
    </View>
  );
}
