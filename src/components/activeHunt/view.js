import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from '../../shared/styles/colors';
import LocationIcon from 'react-native-vector-icons/Ionicons';

export default function activeHuntView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.huntTitle}>
        {props.hunt.title}
      </Text>  
      <View style={styles.iconContainer}>
        <LocationIcon name="md-pin" size={90} color={props.color} />
      </View>
      <View style={styles.warmerColderContainer}>
        <Text style={[styles.warmerColderText]}>
          Colder
        </Text>
        <Text style={[styles.warmerColderText]}>
          Warmer
        </Text>
      </View>
      <TouchableOpacity onPress={props.back}>
        <Text style={styles.backText}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}
