import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Back from 'react-native-vector-icons/Ionicons';

class CitySearchBar extends React.Component {
  _navigateBack = () => {
    this.props.navigation.navigate('FindHunt');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={this._navigateBack}>
            <Back name="ios-arrow-round-back" size={40} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search for a city" onChange={this.props.onChange} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  backButton: {
    marginRight: 25,
    alignItems: 'center',
  },
  searchBar: {
    paddingBottom: 3,
  }
});

export default withNavigation(CitySearchBar);
