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
          Available Tokens: {this.props.state.tokens}
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

function mapStateToProps({ user: { user } }) {
  return {
    state: {
      tokens: user.tokens,
    }
  }
}

export default connect(mapStateToProps)(withNavigation(TokensHeader));