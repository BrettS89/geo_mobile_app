import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import HuntCard from './subComponents/huntCard';

export default function findHuntView(props) {
  return (
    <View style={styles.container}>
      <Text>Find hunts</Text>
      <FlatList
        data={props.hunts}
        keyExtractor={hunt => hunt._id}
        showsVerticalScrollIndicator={false}
        renderItem={hunt => (
          <HuntCard
            hunt={hunt.item}
            
          />
        )}
      />
    </View>
  );
}
