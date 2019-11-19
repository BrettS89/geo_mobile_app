import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import Back from 'react-native-vector-icons/Ionicons';
import * as huntsActions from '../../redux/actions/hunts';

class CitySearchBar extends React.Component {
  _navigateBack = () => {
    this.props.navigation.navigate('FindHunt');
  }

  _onSearch = ({ nativeEvent: { text } }) => {
    this.props.actions.searchCities(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={this._navigateBack}>
            <Back name="ios-arrow-round-back" size={40} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput 
            placeholder="Search for a city"
            onChange={this._onSearch}
            underlineColorAndroid="transparent"
          />
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

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...huntsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withNavigation(CitySearchBar));
