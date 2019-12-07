import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Tokens from 'react-native-vector-icons/FontAwesome5';

export default function insufficientTokensView({ modalVisible, closeModal, navigateToPurchaseTokens }) {
  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>
            You need more tokens to enter this hunt
          </Text>

          <Tokens 
            name="coins"
            color="#ffdf00"
            size={80} 
            style={styles.tokensIcon}
          />

          <TouchableOpacity 
            onPress={navigateToPurchaseTokens} 
            style={[styles.button, { marginBottom: 25 }]}
          >
            <Text style={styles.buttonText}>
              Purchase tokens
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.noThanksButton}>
              No thanks
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}
