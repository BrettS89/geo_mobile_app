import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import styles from '../styles';

export default function huntCard({ hunt, navigateToHunt }) {
  return (
    <TouchableOpacity 
      style={styles.huntCardContainer}
      onPress={() => navigateToHunt(hunt._id)}
    >
      <ImageBackground 
        style={styles.imageView}
        imageStyle={{ borderRadius: 2 }}
        resizeMode="cover"
        source={{ uri: hunt.prizePic }}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {hunt.title}
        </Text>
        <Text style={styles.description}>
          Prize: {hunt.prize}
        </Text>
        <Text style={styles.description}>
          Location: {hunt.city2}, {hunt.stateAbv}, {hunt.zip}
        </Text>
        <Text style={styles.description}>
          Tokens to enter: {hunt.tokens}
        </Text>
      </View>

    </TouchableOpacity>
  );
}
