import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function cityRow({ city, findHunts, navigate }) {
  const findHuntsAction = () => {
    findHunts({ lat: city.location.coordinates[1], lon: city.location.coordinates[0] });
    navigate();
  };

  return (
    <TouchableOpacity style={styles.cityRow} onPress={findHuntsAction}>
      <Text>{city.fullAddress}</Text>
    </TouchableOpacity>
  );
}
