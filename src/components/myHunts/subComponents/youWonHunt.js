import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

export default function huntCard({ hunt: { huntId } }) {
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
              You Won this hunt!  <Text style={{ fontSize: 20 }}>🎉</Text>
            </Text>
          </View>
        </View>
      </View>

    </View>
  );
}
