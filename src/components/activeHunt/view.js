import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BlinkView from 'react-native-blink-view'
import styles from './styles';
import LocationIcon from 'react-native-vector-icons/FontAwesome5';
import YouWonModal from '../_misc/youWonModal';
import colors from '../../shared/styles/colors'

export default function activeHuntView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.huntTitle}>
        {props.hunt.title}
      </Text>
      <View style={styles.iconContainer}>
        <BlinkView blinking delay={props.blinkSpeed}>
          <LocationIcon name="map-marker-alt" size={90} color={colors.main} />
        </BlinkView>
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

      <View style={{ marginTop: 20 }}>
        <Text>
          {props.distance}
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>
          {props.won}
        </Text>
      </View>
      <YouWonModal
        confirmWon={props.confirmWon}
      />
    </View>
  );
}
