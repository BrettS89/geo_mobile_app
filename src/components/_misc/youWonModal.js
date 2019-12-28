import React from 'react';
import { Modal, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const WonModal = () => {
  const won = useSelector(state => state.currentlyHunting.won);

  return (
    <Modal visible={won}>
      <View>
        <Text>
          You won
        </Text>
      </View>
    </Modal>
  );
};

export default WonModal;
