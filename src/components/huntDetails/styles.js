import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 30,
  },
  imageView: {
    height: 180,
    width: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  content: {
    alignItems: 'center',
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontWeight: '600',
    marginBottom: 1,
  },
  tokenText: {
    fontWeight: '500',
    fontSize: 12,
  },
  button: {
    borderColor: colors.main,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 160,
    borderRadius: 50,
  },
  buttonText: {
    color: colors.main,
    fontWeight: '600',
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
  tokensIcon: {
    marginVertical: 25,
  },
  noThanksButton: {
    fontWeight: '600',
    color: colors.secondary,
  }
});
