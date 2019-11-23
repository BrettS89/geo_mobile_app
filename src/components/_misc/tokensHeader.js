import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import colors from '../../shared/styles/colors';

class TokensHeader extends React.Component {
  _navigateBack = () => {
    this.props.navigation.navigate('FindHunt');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tokensText}>
          Available Tokens: 24
        </Text>
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
  tokensText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.main,
  },
});

export default connect(null)(withNavigation(TokensHeader));