import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Card from 'react-native-vector-icons/FontAwesome5';
import Tokens from 'react-native-vector-icons/FontAwesome5';
import Add from 'react-native-vector-icons/FontAwesome5';
import Right from 'react-native-vector-icons/FontAwesome5';
import colors from '../../shared/styles/colors';

export default function accountView({ navigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Account
      </Text>


      <View style={[styles.sectionRow, { borderTopWidth: 1, borderTopColor: colors.midGrey2 }]}>
        <View style={styles.flexRow}>
          <Card 
            name="credit-card"
            size={30}
            color={colors.midGrey2}
            style={styles.icon}
          />
          <Text style={[styles.text, { color: colors.midGrey2 }]}>
            No payment method added
          </Text>
        </View>
      </View>


      <View style={styles.sectionRow}>
        <TouchableOpacity onPress={() => navigate('AddPaymentMethod')} style={styles.btn}>
          <View style={styles.flexRow}>
            <Add 
              name="plus"
              size={30}
              color={"#85bb65"}
              style={[styles.icon, { marginLeft: 3, marginRight: 20 }]}
            />
            <Text style={styles.text}>
              Add/change payment method
            </Text>
          </View>
          <Right name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>


      <View style={styles.sectionRow}>
        <View style={styles.flexRow}>
          <Tokens 
                name="coins"
                color="#ffdf00"
                size={34} 
                style={styles.icon}
              />
          <Text style={styles.text}>
            Purchase tokens
          </Text>
        </View>
        <Right name="chevron-right" size={20} />
      </View>


    </View>
  );
}