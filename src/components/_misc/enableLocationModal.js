import React from 'react';
import { Modal, View, Text } from 'react-native';

class EnableLocationModal extends React.Component {
  promptLocationPermission = () => {

  };

  render() {
    return (
      <Modal transparent visible={this.props.state.visible}>
        <View>
          <Text>
            Modal
          </Text>
        </View>
      </Modal>
    );
  }
}

export default EnableLocationModal;
