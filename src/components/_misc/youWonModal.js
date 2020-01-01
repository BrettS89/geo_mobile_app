import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import colors from '../../shared/styles/colors';

const WonModal = props => {

  let currentlyHunting = useSelector(state => state.hunt.currentlyHunting);

  let prize = currentlyHunting.huntId
    ? currentlyHunting.huntId.prize
    : '';

  function navigate() {
    props.navigation.navigate('MyHunts');
  }
  
  return (
    <Modal
      visible={!!currentlyHunting.huntId.won}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            You won!
          </Text>

          <Text style={styles.confetti}>
            🎉
          </Text>

          <Text style={styles.message}>
            Congratulations you found the secret location and won the hunt! We received a notification and will ship out your new {prize}.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => props.confirmWon(navigate)}
          >
            <Text style={styles.buttonText}>
              Awesome!
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default withNavigation(WonModal);

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  contentContainer: {
    width: '75%',
    backgroundColor: '#fff',
    padding: 25,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  confetti: {
    fontSize: 72,
    marginVertical: 25,
  },
  message: {
    marginBottom: 30,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});
