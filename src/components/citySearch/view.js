import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import CityRow from './subComponents/cityRow';

export default function citySearch(props) {
  return (
    <View style={styles.container}>
      <FlatList
          data={props.cities}
          // extraData={[state, playing]}
          keyExtractor={city => city._id}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          renderItem={city => (
            <CityRow
              city={city.item}
              findHunts={props.findHunts}
              navigate={props.navigate}
            />
          )}
        />
    </View>
  );
}
