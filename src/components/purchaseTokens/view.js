import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Tokens from 'react-native-vector-icons/FontAwesome5';

export default function purchaseTokensView({ onPurchase }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Purchase tokens
      </Text>

      <TouchableOpacity style={styles.tokenCard} onPress={() => onPurchase(10)}>
        <View style={styles.coins}>
          <Tokens name="coins" color="#ffdf00" size={50} />
        </View>
        <View>
          <Text style={styles.tokensText}>
            10 Tokens
          </Text>
        </View>        
      </TouchableOpacity>

      <TouchableOpacity style={styles.tokenCard} onPress={() => onPurchase(25)}>
        <View style={styles.coins}>
          <Tokens name="coins" color="#ffdf00" size={50} />
          <Tokens name="coins" color="#ffdf00" size={50} />
        </View>
        <View>
          <Text style={styles.tokensText}>
            25 Tokens
          </Text>
        </View>        
      </TouchableOpacity>

      <TouchableOpacity style={styles.tokenCard} onPress={() => onPurchase(50)}>
        <View style={styles.coins}>
          <Tokens name="coins" color="#ffdf00" size={50} />
          <Tokens name="coins" color="#ffdf00" size={50} />
          <Tokens name="coins" color="#ffdf00" size={50} />
        </View>
        <View>
          <Text style={styles.tokensText}>
            50 Tokens
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}
