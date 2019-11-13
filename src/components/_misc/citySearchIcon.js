import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import * as citySearchActions from '../../redux/actions/citySearch';
import SearchIcon from 'react-native-vector-icons/Feather';
import Colors from '../../shared/styles/colors';

class CitySearchIcon extends React.Component {
  _navigate = () => {
    this.props.navigation.navigate('CitySearch');
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._navigate}>
        <SearchIcon name="search" size={32} color={Colors.main} />
        <Text style={styles.findText}>Find hunts in your city</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  findText: {
    color: Colors.main,
    marginLeft: 6,
    fontWeight: '500',
  },
});

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...citySearchActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withNavigation(CitySearchIcon));
