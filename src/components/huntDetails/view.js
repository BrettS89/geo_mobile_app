import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function huntDetailsView({ hunt, enterHunt }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hunt.title}</Text>
      <ImageBackground 
        style={styles.imageView}
        imageStyle={{ borderRadius: 3 }}
        resizeMode="cover"
        source={{ uri: hunt.prizePic }}
      />
      <View sytle={styles.content}>
        <View style={styles.textSection}>
          <Text style={styles.header}>Prize</Text>
          <Text>{hunt.prize}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.header}>Location</Text>
          <Text>{hunt.city2}, {hunt.stateAbv}, {hunt.zip}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.header}>Other hunters</Text>
          <Text>{hunt.players}</Text>
        </View>
      </View>

      <View style={[styles.content, { marginBottom: 20, }]}>
        <Text>
          {hunt.description}
        </Text>
      </View>

      <View style={[styles.content, { marginBottom: 30, }]}>
        <Text style={styles.tokenText}>
          Tokens to enter: {hunt.tokens}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={enterHunt}>
        <Text style={styles.buttonText}>
          Enter
        </Text>
      </TouchableOpacity>
    </View>
  );
}
