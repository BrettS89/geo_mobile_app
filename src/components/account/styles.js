import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 50,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.midGrey2,
  },
  btn: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 15
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
