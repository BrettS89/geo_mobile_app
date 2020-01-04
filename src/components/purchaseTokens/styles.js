import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 50
  },
  tokenCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.main,
    padding: 20,
    borderWidth: 4,
    borderColor: colors.main,
    borderRadius: 50,
    marginBottom: 15,
  },
  coins: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokensText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  }
});
