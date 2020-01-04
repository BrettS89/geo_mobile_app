import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import styles from '../styles';

export default function finishedHuntCard({ hunt, hunt: { huntId }, startHunting }) {
  const h = huntId;
  return (
    <View 
      style={styles.huntCardContainer}
    >
      <ImageBackground 
        style={styles.imageView}
        imageStyle={{ borderRadius: 2 }}
        resizeMode="cover"
        source={{ uri: h.prizePic }}
      />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>
            {h.title}
          </Text>
          <View>
            <Text style={styles.description2}>
              This hunt has been won
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
