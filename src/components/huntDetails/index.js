import React from 'react';
import View from './view';

class HuntDetails extends React.Component {
  enterHunt = () => {
    const huntId = this.props.state.hunt._id;
    this.props.actions.enterHunt({ huntId, navigate: this.navigateToMyHunts });
  };

  navigateToMyHunts = () => {
    this.props.navigation.navigate('MyHunts');
  };

  navigateToPurchaseTokens = () => {
    this.closeModal();
    this.props.navigation.navigate('PurchaseTokens');
  };

  closeModal = () => {
    this.props.actions.closeInsufficientTokensModal();
  };

  render() {
    return (
      <View
        hunt={this.props.state.hunt}
        enterHunt={this.enterHunt}
        modalVisible={this.props.state.modalVisible}
        closeModal={this.closeModal}
        navigateToPurchaseTokens={this.navigateToPurchaseTokens}
      />
    );
  }
}

export default HuntDetails;
