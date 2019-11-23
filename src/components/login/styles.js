import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginFormContainer: {
    width: 350,
    height: '100%',
    justifyContent: 'center',
    borderRadius: 3,
    padding: 50,
    backgroundColor: '#ffffff',
    borderColor: '#eaeaea',
  },
  logoContainer: {
    alignItems: 'center'
  },
  inputContainer: {
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    // backgroundColor: Colors.secondary,
    borderWidth: 3,
    borderColor: Colors.main,
    borderRadius: 50,
    height: 45
  },
  buttonText: {
    color: Colors.main,
    fontWeight: '600',
    fontSize: 15,
  },
});
