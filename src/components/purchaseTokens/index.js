import React from 'react';
import View from './view';

class PurchaseTokens extends React.Component {
  onPurchase = amount => {
    this.props.actions.purchaseTokens(amount);
  };

  render() {
    return (
      <View
        onPurchase={this.onPurchase}
      />
    );
  }
}

export default PurchaseTokens;
