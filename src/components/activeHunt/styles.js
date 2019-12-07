import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  huntTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 50,
    width: '80%',
    textAlign: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 180,
    backgroundColor: colors.midGrey,
    borderRadius: 90,
  },
  warmerColderContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 80,
  },
  warmerColderText: {
    fontWeight: '600',
    fontSize: 22,
    color: colors.midGrey2,
  },
  backText: {
    color: colors.secondary,
    fontWeight: '700',
  }
});
