import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 15,
  },
  huntCardContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    borderBottomColor: colors.midGrey,
    borderBottomWidth: 1,
  },
  imageView: {
    height: 140,
    width: 160,
    borderRadius: 10,
    marginRight: 15,
  },
  imageStyle: {
    flex: 1,
    width: 'auto',
    height: 180,
    alignSelf: 'stretch',
  },
  contentContainer: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 40,
    flexWrap: 'wrap',
  },
  button: {
    borderWidth: 3,
    borderColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 40,
    borderRadius: 50,
  },
  description: {
    flexWrap: 'wrap',
    textAlign: 'center',
    color: colors.main,
    fontWeight: '600',
  },
  description2: {
    flexWrap: 'wrap',
    color: colors.main,
    fontWeight: '600',
  }
});
